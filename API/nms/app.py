from flask import Flask, request, jsonify
from pysnmp.entity.rfc3413.oneliner import cmdgen
from ping3 import ping
import os
import shutil
import datetime
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

file_dict = {}  # Dictionary to store filenames

def is_valid_ip(ip):
    return isinstance(ip, str) and len(ip) > 0

def is_valid_community(community):
    return isinstance(community, str) and len(community) > 0

def get_filename(ip, method, hostname=None):
    # Generate a unique filename based on IP, method, and hostname (if provided)
    if method == 'icmp':
        return f"{ip}.cfg"
    elif method == 'snmp':
        if hostname:
            return f"{hostname}.cfg"
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


@app.route('/api/submit', methods=['POST'])
def index():
    result_message = None
    data = request.get_json()
    ip = data.get('ip')
    method = data.get('method')
    hostname = data.get('hostname')
    if not os.path.exists('icmp'):
        os.makedirs('icmp')
    if not os.path.exists('snmp'):
        os.makedirs('snmp')

    if not is_valid_ip(ip):
        return jsonify({"message": "Invalid IP address"})

    # Check if a hostname is provided and include it in the result message
    if hostname:
        result_message = f" for {hostname}"  # Add hostname to the result message

    # Define a folder name based on the method
    folder_name = "/usr/local/nagios/etc/objects/BB/HOST_NEW"

    if method == 'icmp':
        ping_result = ping(ip)
        if ping_result is not None:
            result_message = f"ICMP Ping Successful and file added"
        else:
            result_message = f"ICMP Ping Failed{result_message}"
            response = {
                "message": result_message
            }
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

        except Exception as e:
            result_message = f"ICMP configuration appending failed: {str(e)}{result_message}"

    elif method == 'snmp':
        community = data.get('community')
        if not is_valid_community(community):
            return jsonify({"message": "Invalid community string"})

        sysname = get_sysname(ip, community)

        if not sysname:
            response = {
                "message": result_message
            }
            return jsonify(response)

        # Modify the host and service data
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
    check_command           check-snmp!-C '{community}' -P 2c -o ifOperStatus.1 -r 1 
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
            with open(f"{folder_name}/{filename}", "w") as file:
                file.write(host_data)
            with open("/etc/telegraf/telegraf.d/NEW/{0}.conf".format(ip), "w") as telegraf:
                telegraf.write(template_date)
            result_message = f"File Added Successfully"

            # Add the filename to the file_dict
            file_dict[ip] = filename

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
        nfilename = ip_to_backup + '.cfg'
        tfilename = ip_to_backup + '.conf'
        # Determine the source folder based on the method
        source_folder_1 = "/usr/local/nagios/etc/objects/BB/HOST_NEW"
        # Determine the backup folder based on the method
        backup_folder_1 = "/home/backup/nagios"

        source_folder_2 = "/etc/telegraf/telegraf.d/NEW"
        backup_folder_2 = "/home/backup/telegraf"

        if os.path.exists(f"{source_folder_2}/{tfilename}"):
            timestamp = datetime.datetime.now().strftime("%Y%m%d%H%M%S")
            # Construct the new filename with a timestamp
            new_filename = f"{tfilename}_{timestamp}"

            # Construct the source and backup paths
            source_path = f"{source_folder_2}/{tfilename}"
            backup_path = f"{backup_folder_2}/{new_filename}"

            # Create the backup folder if it doesn't exist
            if not os.path.exists(backup_folder_2):
                os.makedirs(backup_folder_2)

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

            # Create the backup folder if it doesn't exist
            if not os.path.exists(backup_folder_1):
                os.makedirs(backup_folder_1)

            # Move the file to the backup folder with the new filename
            shutil.move(source_path, backup_path)

        return jsonify({"message": f"File deleted successfully"})
    else:
        return jsonify({"message": "Invalid method specified"})

print(datetime.datetime.now())

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
