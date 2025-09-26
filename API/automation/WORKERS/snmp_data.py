from pysnmp.hlapi import *
import psycopg2
import os

# Database connection details (replace with your own)
DB_NAME = "bbmon"
DB_USER = "bbadmin"
DB_PASSWORD = os.environ['PGPASSWORD']
DB_HOST = "localhost"
DB_PORT = 5432

# Define table names
DEVICE_DETAILS_TABLE = "bb_device_details"
INTERFACE_DETAILS_TABLE = "bb_interface_details"

def connect_db():
    """Connects to the PostgreSQL database"""
    try:
        conn = psycopg2.connect(dbname=DB_NAME, user=DB_USER,
                                password=DB_PASSWORD, host=DB_HOST, port=DB_PORT)
        return conn
    except Exception as e:
        print(f"Error connecting to database: {e}")
        return None

def get_device_details(conn):
    """Fetches device IPs and communities from the bb_device_details table"""
    cursor = conn.cursor()
    cursor.execute(f"""
        SELECT deviceid, publicip, community FROM bb_device_details where custid <> 9;
    """)
    rows = cursor.fetchall()
    cursor.close()
    return rows

def check_and_update_interface(conn, device_id, interface_index, interface_name):
    """Checks for existing data and updates or inserts accordingly"""
    cursor = conn.cursor()

    # Check if device exists
    cursor.execute(f"""
        SELECT 1 FROM {DEVICE_DETAILS_TABLE} WHERE deviceid = %s;
    """, (device_id,))

    device_exists = cursor.fetchone() is not None

    if not device_exists:
        print(f"Error: Device with ID {device_id} not found in {DEVICE_DETAILS_TABLE}")
        return

    # Check if data exists
    cursor.execute(f"""
        SELECT 1 FROM {INTERFACE_DETAILS_TABLE}
        WHERE deviceid = %s AND interface_index = %s;
    """, (device_id, interface_index))

    exists = cursor.fetchone() is not None

    if exists:
        # Update existing data
        cursor.execute(f"""
            UPDATE {INTERFACE_DETAILS_TABLE} SET interface_name = %s
            WHERE deviceid = %s AND interface_index = %s;
        """, (interface_name, device_id, interface_index))
        print(f"Device {device_id}: Interface {interface_index} ({interface_name}) updated")
    else:
        # Insert new data
        cursor.execute(f"""
            INSERT INTO {INTERFACE_DETAILS_TABLE} (deviceid, interface_index, interface_name)
            VALUES (%s, %s, %s);
        """, (device_id, interface_index, interface_name))
        print(f"Device {device_id}: Interface {interface_index} ({interface_name}) inserted")

    conn.commit()
    cursor.close()

def get_bulk_snmp_data(target, community, oids, port=161, timeout=5, retries=1):
    """
    Fetches bulk SNMP data for the given OIDs from the target device.

    :param target: Target IP address of the SNMP device.
    :param community: SNMP community string.
    :param oids: List of OIDs to fetch.
    :param port: SNMP port, default is 161.
    :param timeout: Timeout in seconds, default is 1.
    :param retries: Number of retries, default is 5.
    :return: A dictionary with OID as key and fetched values as a list of tuples (index, value).
    """
    result = {oid: [] for oid in oids}

    for oid in oids:
        for (error_indication, error_status, error_index, var_binds) in nextCmd(
                SnmpEngine(),
                CommunityData(community, mpModel=1),
                UdpTransportTarget((target, port), timeout=timeout, retries=retries),
                ContextData(),
                ObjectType(ObjectIdentity(oid)),
                lexicographicMode=False):

            if error_indication:
                print(f"Error: {error_indication}")
                break
            elif error_status:
                print(f"Error: {error_status.prettyPrint()}")
                break
            else:
                for var_bind in var_binds:
                    oid_index = str(var_bind[0])
                    value = str(var_bind[1])
                    index = oid_index.split('.')[-1]
                    result[oid].append((int(index), value))

    return result


def main():
    # Connect to database
    conn = connect_db()
    if not conn:
        return

    # Get device details
    device_data = get_device_details(conn)

    # Process each device
    for deviceid, device_ip, community in device_data:
        print(f"Processing device {device_ip} with community {community}")
        # OIDs for ifName, ifDescr, and ifIndex
        oids = [
            '1.3.6.1.2.1.31.1.1.1.1',  # ifName
            '1.3.6.1.2.1.2.2.1.2',     # ifDescr
            '1.3.6.1.2.1.2.2.1.1'      # ifIndex
        ]

        snmp_data = get_bulk_snmp_data(device_ip, community, oids)
        # Print the results in a structured format
        if_index_data = {index: {} for index, _ in snmp_data[oids[2]]}

        for index, value in snmp_data[oids[0]]:
            if_index_data[index]['ifName'] = value

        for index, value in snmp_data[oids[1]]:
            if_index_data[index]['ifDescr'] = value

        for index, value in snmp_data[oids[2]]:
            if_index_data[index]['ifIndex'] = value
        try:
            for index in sorted(if_index_data.keys()):
                print(f"ifIndex: {index}")
                print(f"  ifName: {if_index_data[index].get('ifName', 'N/A')}")
                if if_index_data[index].get('ifName'):
                    check_and_update_interface(conn, deviceid, index, if_index_data[index].get('ifName', 'N/A'))
                else:
                    check_and_update_interface(conn, deviceid, index, if_index_data[index].get('ifDescr', 'N/A'))
                print(f"  ifDescr: {if_index_data[index].get('ifDescr', 'N/A')}")
                print()
        except Exception as e:
            print(f"Error processing device {device_ip}: {e}")

    conn.close()

if __name__ == "__main__":
    main()
