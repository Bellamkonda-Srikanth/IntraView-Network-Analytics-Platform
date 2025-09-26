#!/root/autointelli/bin/python

from ipwhois import IPWhois
import json
from os import path
import psycopg2
from psycopg2 import sql
from psycopg2.extras import execute_values


def upsert_data(connection, data):
    """
    Insert or update data into the PostgreSQL table using UPSERT.

    :param connection: psycopg2 connection object to the database
    """
    cursor = connection.cursor()
    try:
        ids = None
        # Create an SQL query to insert data and handle conflicts for updates
        query = sql.SQL("""
        INSERT INTO bb_vendor_details (vendorname, vendorcontact, vendorhelpdesk, vendorphone, vendoraddress, uptime, resolutiontime)
        VALUES %s
        ON CONFLICT (vendorname) DO UPDATE
        SET vendorcontact = EXCLUDED.vendorcontact, vendorhelpdesk = EXCLUDED.vendorhelpdesk, vendorphone = EXCLUDED.vendorphone, vendoraddress = EXCLUDED.vendoraddress, uptime = EXCLUDED.uptime, resolutiontime = EXCLUDED.resolutiontime
        returning vendorid
        """)

        execute_values(cursor, query, data)
        ids = cursor.fetchone()

        # Commit the changes to the database
        connection.commit()
        #print("Data inserted or updated successfully")
    except Exception as e:
        # If an error occurs, rollback any change to the database and print the error
        connection.rollback()
        print(f"An error occurred: {e}")
    finally:
        # Close the cursor and connection to free up resources
        cursor.close()
    return ids

def getVendorDetails(addr):
    obj = IPWhois(addr)
    result = obj.lookup_rdap(depth=1)
    
    #print(json.dumps(result))
    entity = result['entities'][0]
    
    try:
        vendorname = result['network']['remarks'][0]['description']
    except:
        vendorname = None
    
    try:
        vendorcontact = result['objects'][entity]['contact']['name']
    except:
        vendorcontact = None
    
    try:
        vendoraddress = result['objects'][entity]['contact']['address'][0]['value']
    except:
        vendoraddress = None
    
    try:
        vendorphone = result['objects'][entity]['contact']['phone'][0]['value']
    except:
        vendorphone = None
    
    try:
        vendoremail = result['objects'][entity]['contact']['email'][0]['value']
    except:
        vendoremail = None
    return vendorname,vendorcontact,vendoraddress,vendorphone,vendoremail


def query_vendor_info():
    """
    Query vendorid and vendorcontact from the vendors table.
    
    :return: List of tuples containing (vendorid, vendorcontact)
    """
    # Connection parameters
    conn_params = {
        'dbname': 'bbmon',
        'user': 'bbadmin',
        'password': 'bbadmin@123!@#',
        'host': 'localhost'  # or another host address
    }
    
    # Establish the connection to the database
    conn = psycopg2.connect(**conn_params)
    cursor = conn.cursor()
    
    try:
        # SQL query to select vendorid and vendorcontact
        query = "SELECT vendorid, vendorname FROM bb_vendor_details;"
        
        # Execute the query
        cursor.execute(query)
        
        # Fetch all rows
        rows = cursor.fetchall()
        
        # Commit the transaction
        conn.commit()
        
        return rows
    except Exception as e:
        # If an error occurs, rollback any change to the database and print the error
        conn.rollback()
        print(f"An error occurred: {e}")
    finally:
        # Close the cursor and connection to free up resources
        cursor.close()
        conn.close()


def getVendorData(addr):
    name,contact,address,phone,email = getVendorDetails(addr)
    conn_params = {
        'dbname': 'bbmon',
        'user': 'bbadmin',
        'password': 'bbadmin@123!@#',
        'host': 'localhost'  # or another host address
    }

    #conn = psycopg2.connect(**conn_params)

    name = name.split('\n')[0]
    vendor_data = [(name, contact, email, phone, address, 99, 4)]
    #ids = upsert_data(conn, vendor_data)
    print("---------------------------------------------------------------------------------------------")
    print("Vendor Name    : " + name)
    print("Vendor Contact : " + contact)
    print("Vendor Email   : " + email)
    print("Vendor Phone   : " + phone)
    print("Vendor Address : " + address)
    #print("Vendor ID   : " + str(ids[0]))
    print("---------------------------------------------------------------------------------------------")
    #conn.close()
    #return ids[0]


if __name__ == '__main__':
    import argparse
    # Setup the arg parser.
    parser = argparse.ArgumentParser(
        description='Bits and Bytes Vendor Management'
    )
    parser.add_argument(
        '--list',
        help='An IPv4 or IPv6 address as a string.',
        action='store_true',
    )
    parser.add_argument(
        '--addr',
        type=str,
        nargs=1,
        metavar='"IP"',
        help='An IPv4 or IPv6 address as a string.',
    )
    # Get the args
    args = parser.parse_args()
    if args.list:
        print("---------------------------------------------------------------------------------------------")
        print("List of Vendors with Bits and Bytes\n")
        vendor_info = query_vendor_info()
        for vendor_id, vendor_contact in vendor_info:
            print(f"Vendor ID: {vendor_id}, Vendor Contact: {vendor_contact}")
        print("---------------------------------------------------------------------------------------------")
    elif args.addr:
        addr = args.addr[0]
        getVendorData(addr)
