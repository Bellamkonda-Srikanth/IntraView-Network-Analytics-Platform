from flask import Flask, request, jsonify
from ping3 import ping
from pysnmp.entity.rfc3413.oneliner import cmdgen
import os
import shutil
import datetime
import psycopg2
import ipaddress
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

db_config = {
    'database': 'nms',
    'user': 'nms',
    'password': 'nms@123!@#',
    'host': 'localhost',
    'port': 5432,
}

file_dict = {}  # Dictionary to store filenames

def is_valid_ip(ip):
    try:
        ipaddress.ip_address(ip)
        return True
    except ValueError:
        return False

def is_ip_reachable(ip):
    if ping(ip) is not None:
        return True
    return False


def get_filename(ip, method, hostname=None):
    # Generate a unique filename based on IP, method, and hostname (if provided)
    if method == 'icmp':
        return f"{ip}.cfg"
    elif method == 'snmp':
        if hostname:
            return f"{ip}.cfg"
        return f"{ip}.cfg"
    return f"{ip}.cfg_{method}"


def get_sysname(ip, community):
    cmd_gen = cmdgen.CommandGenerator()
    errorIndication, errorStatus, errorIndex, varBinds = cmd_gen.getCmd(
        cmdgen.CommunityData(community),
        cmdgen.UdpTransportTarget((ip, 161)),
        cmdgen.MibVariable('SNMPv2-MIB', 'sysName', 0)
    )

    if errorIndication:
        return None

    if errorStatus:
        return None

    sysname = varBinds[0][1].prettyPrint()
    return sysname


def insert_data_into_db(ip, hostname, method):
    try:
        # Connect to the PostgreSQL database
        connection = psycopg2.connect(**db_config)
        cursor = connection.cursor()

        # Check if a record with the same IP address and method exists
        select_query = "SELECT * FROM automachines WHERE ip = %s AND type = %s"
        cursor.execute(select_query, (ip, method))
        existing_record = cursor.fetchone()

        if not existing_record:
            # If no record exists for the IP and method, insert a new record
            insert_query = "INSERT INTO automachines (ip, hostname, type) VALUES (%s, %s, %s)"
            cursor.execute(insert_query, (ip, hostname, method))

        # Commit the transaction and close the database connection
        connection.commit()
        cursor.close()
        connection.close()

        return "Data successfully inserted into the database."

    except Exception as e:
        return f"Error inserting data into the database: {str(e)}"


@app.route('/data', methods=['GET'])
def get_data():
    try:
        # Connect to the PostgreSQL database
        connection = psycopg2.connect(**db_config)
        cursor = connection.cursor()

        # Execute a SELECT query to retrieve data from the 'automachines' table
        select_query = "SELECT * FROM automachines"
        cursor.execute(select_query)

        # Fetch all rows as a list of dictionaries
        rows = cursor.fetchall()
        data = []
        for row in rows:
            data.append({
                'ip': row[1],
                'hostname': row[2],
                'type': row[3]
            })

        # Close the cursor and connection
        cursor.close()
        connection.close()

        return jsonify(data)

    except Exception as e:
        print(str(e))
        return jsonify({"message": f"Error fetching data from the database: {str(e)}"})


@app.route('/delete', methods=['POST'])
def delete_data():
    data = request.get_json()
    ip_to_delete = data.get('ip')
    method_to_delete = data.get('method')  # Add method parameter to specify the method to delete

    if not is_valid_ip(ip_to_delete):
        return jsonify({"message": "Invalid IP address"})

    try:
        # Connect to the PostgreSQL database
        connection = psycopg2.connect(**db_config)
        cursor = connection.cursor()

        # Define the DELETE query with both IP and method criteria
        delete_query = "DELETE FROM automachines WHERE ip = %s AND type = %s"
        cursor.execute(delete_query, (ip_to_delete, method_to_delete))

        # Commit the transaction
        connection.commit()

        # Close the cursor and connection
        cursor.close()
        connection.close()

        # Move the file to the backup folder if it exists in the file_dict
        nfilename = ip_to_delete + '.cfg'
        tfilename = ip_to_delete + '.conf'
        # Determine the source folder based on the method
        source_folder_1 = "/usr/local/nagios/etc/objects/BB/HOST_NEW"
        # Determine the backup folder based on the method
        backup_folder_1 = "/home/backup/nagios"

        source_folder_2 = "/etc/telegraf/telegraf.d/NEW"
        backup_folder_2 = "/home/backup/telegraf"
        source_folder = '/tmp/nms'
        backup_folder = '/tmp/nms/backup'
        os.makedirs(backup_folder_1,exist_ok=True)
        os.makedirs(backup_folder_2,exist_ok=True)

        if os.path.exists(f"{source_folder_2}/{tfilename}"):
            # Generate a timestamp to append to the filename
            timestamp = datetime.datetime.now().strftime("%Y%m%d%H%M%S")
            # Construct the new filename with a timestamp
            new_filename = f"{tfilename}_{timestamp}"

            # Construct the source and backup paths
            source_path = f"{source_folder_2}/{tfilename}"
            backup_path = f"{backup_folder_2}/{new_filename}"

            # Move the file to the backup folder with the new filename
            shutil.move(source_path, backup_path)

        # Check if the file with the method exists in the source folder
        if os.path.exists(f"{source_folder_1}/{nfilename}"):
            # Generate a timestamp to append to the filename
            timestamp = datetime.datetime.now().strftime("%Y%m%d%H%M%S")
            # Construct the new filename with a timestamp
            new_filename = f"{nfilename}_{timestamp}"

            # Construct the source and backup paths
            source_path = f"{source_folder_1}/{nfilename}"
            backup_path = f"{backup_folder_1}/{new_filename}"

            # Move the file to the backup folder with the new filename
            shutil.move(source_path, backup_path)

        return jsonify({"message": f"File deleted successfully"})

    except Exception as e:
        return jsonify({"message": f"Error deleting data: {str(e)}"})

@app.route('/ping', methods=['POST'])
def icmp_ping():
    data = request.get_json()
    ip = data.get('ip')

    if not ip:
        return jsonify({"message": "IP address is required"})

    # Perform ICMP ping
    ping_result = ping(ip)

    if ping_result is not None:
        result_message = f"ICMP Ping Successful: {ping_result} ms"
    else:
        result_message = f"ICMP Ping Failed"

    response = {
        "message": result_message
    }

    return jsonify(response)




@app.route('/add', methods=['POST'])
def index():
    result_message = None
    data = request.get_json()
    ip = data.get('ip')
    method = data.get('method')
    hostname = data.get('hostname')
    community = data.get('community')

    if not is_valid_ip(ip):
        return jsonify({"message": "Invalid IP address"})

    if not is_ip_reachable(ip):
        return jsonify({"message": "IP address is not reachable"})

    if method not in ['icmp', 'snmp']:
        return jsonify({"message": "Invalid method specified"})

    if not is_valid_ip(ip):
        return jsonify({"message": "Invalid IP address"})

    # Check if a hostname is provided and include it in the result message
    if hostname:
        result_message = f" for {hostname}"  # Add hostname to the result message

    # Define a folder name based on the method
    folder_name = "/usr/local/nagios/etc/objects/BB/HOST_NEW"

    if method == 'icmp':
        hostname = data.get('hostname')
        ping_result = ping(ip)
        if ping_result is not None:
            result_message = f"ICMP Ping Successful and file added"
        else:
            result_message = f"ICMP Ping Failed{result_message}"
            return jsonify(response)


        # Get the filename based on IP and method
        filename = get_filename(ip, 'icmp', hostname)

        # Define host and service configuration
        host_template = f"""\
define host{{
    host_name               {hostname if hostname else ip}  # Use IP as a default if hostname is None
    alias                   {hostname if hostname else ip}  # Use IP as a default if hostname is None
    address                 {ip}
    check_command           check-host-alive
    check_interval          1
    retry_interval          1
    max_check_attempts      10
    check_period            24x7
    contact_groups          admins
    notification_interval   1440
    notification_period     24x7
    notification_options    d,u,r
    host_groups             Bits and Bytes
}}
"""

        service_template = f"""\
define service{{
    use                     generic-service
    host_name               {hostname if hostname else ip}  # Use IP as a default if hostname is None
    service_description     Link Status
    check_command           check-dummy!0
    active_checks_enabled   0
    max_check_attempts      3
    check_interval          5
    retry_interval          1
    check_period            24x7
    notification_interval   720
    notification_period     24x7
    notification_options    w,c,r
    contact_groups          admins
}}
"""

        # Replace placeholders with actual values
        host_data = host_template.replace("{hostname}", hostname if hostname else ip).replace("{ip}", ip)
        service_data = service_template.replace("{hostname}", hostname if hostname else ip)

        try:
            with open(f"{folder_name}/{filename}", "a") as file:  # Change mode to "a" for appending
                file.write(host_data)
                file.write("\n")
                file.write(service_data)
            result_message = f"{result_message}"

            # Add the filename to the file_dict
            file_dict[ip] = filename

            # Insert data into the database
            insert_data_into_db(ip, hostname, method)

        except Exception as e:
            result_message = f"ICMP configuration appending failed: {str(e)}{result_message}"

    elif method == 'snmp':
        community = data.get('community')
        if not community:  # Check if SNMP community is provided
            return jsonify({"message": "Community String is required"})

        if not get_sysname(ip, community):
            return jsonify({"message": "Invalid SNMP community"})

        sysname = get_sysname(ip, community)
        if not sysname:
            response = {
                "message": result_message
            }
            return jsonify(response)

        hostname = sysname  # Set hostname to sysname obtained via SNMP

        template_date = f"""\
        [[inputs.snmp]]
        agents = ["{ip}"]
        version = 2
        interval = "60s"
        community = "{community}"
        name = "snmpdevice"
          [[inputs.snmp.field]]
            name = "hostname"
            oid = "RFC1213-MIB::sysName.0"
            is_tag = true
          [[inputs.snmp.field]]
            name = "uptime"
            oid = "DISMAN-EVENT-MIB::sysUpTimeInstance"
          [[inputs.snmp.table]]
            name = "interface"
            inherit_tags = [ "hostname" ]
            oid = "IF-MIB::ifTable"
            [[inputs.snmp.table.field]]
              name = "ifDescr"
              oid = "IF-MIB::ifDescr"
              is_tag = true
          [[inputs.snmp.table]]
            name = "interface"
            inherit_tags = [ "hostname" ]
            oid = "IF-MIB::ifXTable"
            [[inputs.snmp.table.field]]
              name = "ifDescr"
              oid = "IF-MIB::ifDescr"
              is_tag = true
          [[inputs.snmp.table]]
            name = "interface"
            inherit_tags = [ "hostname" ]
            oid = "EtherLike-MIB::dot3StatsTable"
            [[inputs.snmp.table.field]]
              name = "ifDescr"
              oid = "IF-MIB::ifDescr"
              is_tag = true
        """

        # Modify the host and service data
        host_data = f"""\
        define host{{
            host_name               {sysname}
            alias                   {sysname}
            address                 {ip}
            display_name            {hostname if hostname else sysname}
            check_command           check-host-alive
            check_interval          1
            retry_interval          0.5
            max_check_attempts      5
            check_period            24x7
            contact_groups          admins
            notification_interval   720
            notification_period     24x7
            notification_options    d,u,r
            host_groups             Bits and Bytes
        }}
        define service{{
            use                     generic-service
            host_name               {sysname}
            service_description     Link Status
            check_command           {community}
            max_check_attempts      3
            check_interval          5
            retry_interval          1
            check_period            24x7
            notification_interval   720
            notification_period     24x7
            notification_options    w,c,r
            contact_groups          admins
        }}
        """

        # Get the filename based on IP and method
        filename = get_filename(ip, 'snmp', hostname)

        try:
            with open(f"{folder_name}/{filename}", "a") as file:
                file.write(host_data)
            with open("/etc/telegraf/telegraf.d/NEW/{0}.conf".format(ip), "w") as telegraf:
                telegraf.write(template_date)
            result_message = f" File Added Successfully"

            # Add the filename to the file_dict
            file_dict[ip] = filename

            # Insert data into the database with the updated hostname
            insert_data_into_db(ip, hostname, method)

        except Exception as e:
            result_message = f"System Name (SNMP): {sysname}, Error Adding File: {str(e)}{result_message}"

    else:
        result_message = "Invalid method specified"

    response = {
        "message": result_message
    }

    return jsonify(response)

@app.route('/backup', methods=['POST'])
def backup_file():
    data = request.get_json()
    ip_to_backup = data.get('ip')
    method = data.get('method')

    if not is_valid_ip(ip_to_backup):
        return jsonify({"message": "Invalid IP address"})

    if method == 'icmp' or method == 'snmp':
        # Determine the source folder based on the method
        source_folder = 'icmp' if method == 'icmp' else 'snmp'
        # Determine the backup folder based on the method
        backup_folder = 'backup_icmp' if method == 'icmp' else 'backup_snmp'

        # Check if the IP address exists in the file_dict
        if ip_to_backup in file_dict:
            filename = file_dict[ip_to_backup]

            # Check if the file with the method exists in the source folder
            if os.path.exists(f"{source_folder}/{filename}"):
                # Generate a timestamp to append to the filename
                timestamp = datetime.datetime.now().strftime("%Y%m%d%H%M%S")
                # Construct the new filename with a timestamp
                new_filename = f"{filename}_{timestamp}"

                # Construct the source and backup paths
                source_path = f"{source_folder}/{filename}"
                backup_path = f"{backup_folder}/{new_filename}"

                # Create the backup folder if it doesn't exist
                if not os.path.exists(backup_folder):
                    os.makedirs(backup_folder)

                # Move the file to the backup folder with the new filename
                shutil.move(source_path, backup_path)

                # Update the file_dict with the new filename
                file_dict[ip_to_backup] = new_filename

                return jsonify({"message": f"File {filename} backed up as {new_filename} in {method} backup folder"})

        return jsonify({"message": f"No backup file found for IP {ip_to_backup} with method {method}"})

    return jsonify({"message": "Invalid method specified"})

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5000)
