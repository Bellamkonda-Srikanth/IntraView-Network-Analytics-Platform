import subprocess
from flask import Flask, request, jsonify
from flask_cors import CORS
from pysnmp.hlapi import *
from functools import wraps
import psycopg2
from psycopg2 import sql
from psycopg2.extras import execute_values
import geohash2
from geopy.geocoders import Nominatim
import json


app = Flask(__name__)
CORS(app)

# Define a list of valid API keys
valid_api_keys = ['DGDxY9xTYQrjJUhEVbtLJ', 'b3iqCdwfHEHqnLpFHLakh', 'WzEXYGme6neTbqxaR6phc', 'BN3NtEYzAD3kU2NMC7Anw', 'myyPcBP2PMcVhbc24rZFq']


def restart_service(service_name):
    # Command to restart a service using systemctl
    command = ['systemctl', 'reload', service_name]

    # Execute the command
    try:
        subprocess.run(command, check=True)
        print(f"{service_name} service restarted successfully.")
    except subprocess.CalledProcessError as e:
        print(f"Failed to restart {service_name} service: {e}")


def get_geohash_from_location(city, state, country):
    # Concatenate city, state, and country into a single string
    location_str = f"{city}, {state}, {country}"
    # Use geopy to get the coordinates
    geolocator = Nominatim(user_agent="geo_locator")
    location = geolocator.geocode(location_str)

    if location:
        latitude = location.latitude
        longitude = location.longitude
        #print(geohash2.encode(latitude, longitude))
        return geohash2.encode(latitude, longitude)
    else:
        return "tdr1v9qp00bu"


def validate_api_key(api_key):
    return api_key in valid_api_keys


def check_device_reachable(ip):
    # Run ping command to check if the device is reachable
    result = subprocess.run(['ping', '-c', '1', ip], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    if result.returncode == 0:
        return True
    else:
        return False


# Decorator function to authenticate API keys
def api_key_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        api_key = request.headers.get('X-API-KEY')
        if not api_key:
            return jsonify({'error': 'API Key is missing in the request headers'}), 401
        if not validate_api_key(api_key):
            return jsonify({'error': 'Invalid API Key'}), 401
        return f(*args, **kwargs)
    return decorated_function


def check_device_snmp(ip, community):
    errorIndication, errorStatus, errorIndex, varBinds = next(
        getCmd(SnmpEngine(),
               CommunityData(community),
               UdpTransportTarget((ip, 161)),
               ContextData(),
               ObjectType(ObjectIdentity('SNMPv2-MIB', 'sysName', 0)))
    )

    if errorIndication:
        return False
    else:
        # Extracting hostname from varBinds
        for name, val in varBinds:
            return val.prettyPrint()  # Returning hostname
        return False  # In case varBinds is empty


@app.route('/api/v1/nms/reports/bandwidth', methods=['POST'])
@api_key_required
def generate_report_bandwidth():
    if request.method == 'POST':
        data = request.json
        data['device'] = request.args.get('hosts')
        data['custid'] = request.args.get('custid')
        conn_params = {
                'dbname': 'bbmon',
                'user': 'bbadmin',
                'password': 'bbadmin@123!@#',
                'host': 'localhost'  # or another host address
            }
        # Establish the connection to the database
        conn = psycopg2.connect(**conn_params)
        cursor = conn.cursor()
        # Query
        insert_query = """insert into bb_report_details (reportdata, status, reporttype) values ('{0}', 'new', 2)""".format(json.dumps(data))
        cursor.execute(insert_query)
        conn.commit()
        return "Success", 200


@app.route('/api/v1/nms/reports/availability', methods=['POST'])
@api_key_required
def generate_report():
    if request.method == 'POST':
        data = request.json
        print(request.args.get('hosts'))
        data['device'] = request.args.get('hosts')
        conn_params = {
                'dbname': 'bbmon',
                'user': 'bbadmin',
                'password': 'bbadmin@123!@#',
                'host': 'localhost'  # or another host address
            }
        # Establish the connection to the database
        conn = psycopg2.connect(**conn_params)
        cursor = conn.cursor()
        # Query
        insert_query = """insert into bb_report_details (reportdata, status, reporttype) values ('{0}', 'new', 1)""".format(json.dumps(data))
        cursor.execute(insert_query)
        conn.commit()
        return "Success", 200


@app.route('/api/v1/nms/reports/downtime', methods=['POST'])
@api_key_required
def generate_downtime_report():
    if request.method == 'POST':
        data = request.json
        print(request.args.get('hosts'))
        data['device'] = request.args.get('hosts')
        conn_params = {
                'dbname': 'bbmon',
                'user': 'bbadmin',
                'password': 'bbadmin@123!@#',
                'host': 'localhost'  # or another host address
            }
        # Establish the connection to the database
        conn = psycopg2.connect(**conn_params)
        cursor = conn.cursor()
        # Query
        insert_query = """insert into bb_report_details (reportdata, status, reporttype) values ('{0}', 'new', 3)""".format(json.dumps(data))
        cursor.execute(insert_query)
        conn.commit()
        return "Success", 200


@app.route('/api/v1/nms/device/ping', methods=['POST'])
@api_key_required
def check_device():
    if request.method == 'POST':
        data = request.json
        device_ip = data.get('deviceip')
        if not device_ip:
            return jsonify({'error': 'Device IP not provided in JSON data'}), 400
        
        reachable = check_device_reachable(device_ip.strip())
        if reachable:
            return jsonify({'message': f'Device {device_ip} is reachable'}), 200
        else:
            return jsonify({'message': f'Device {device_ip} is not reachable'}), 400
    else:
        return jsonify({'error': 'Only POST requests are allowed'}), 405



@app.route('/api/v1/nms/device/snmp', methods=['POST'])
@api_key_required
def handle_snmp():
    if request.method == 'POST':
        data = request.json
        device_ip = data.get('deviceip')
        community = data.get('community')
        if not device_ip or not community:
            return jsonify({'error': 'Device IP not provided in JSON data'}), 400

        reachable = check_device_snmp(device_ip.strip(), community.strip())
        if reachable:
            return jsonify({'message': f'Device {device_ip} is reachable via SNMP'}), 200
        else:
            return jsonify({'message': f'Device {device_ip} is not reachable via SNMP'}), 400
    else:
        return jsonify({'error': 'Only POST requests are allowed'}), 405



@app.route('/api/v1/nms/device/delete', methods=['POST'])
@api_key_required
def device_delete():
    try:
        if request.method == 'POST':
            data = request.get_json()
            print(data)
            if data['deviceid'] == '':
                return "Fields are missing", 400
            conn_params = {
                'dbname': 'bbmon',
                'user': 'bbadmin',
                'password': 'bbadmin@123!@#',
                'host': 'localhost'  # or another host address
            }
            # Establish the connection to the database
            conn = psycopg2.connect(**conn_params)
            cursor = conn.cursor()
            query=f"""delete from bb_device_details where publicip='{data['deviceid']}'"""
            cursor.execute(query)
            conn.commit()
            # Delete the Files
            from pathlib import Path
            SNMP_PATH=Path(f"/etc/telegraf/telegraf.d/SNMP/{data['deviceid']}.conf")
            ICMP_PATH=Path(f"/etc/telegraf/telegraf.d/ICMP/{data['deviceid']}.conf")
            MON_PATH=Path(f"/usr/local/nagios/etc/objects/BB/HOST/{data['deviceid']}.cfg")
            try:
                SNMP_PATH.unlink()
            except:
                pass
            try:
                ICMP_PATH.unlink()
            except:
                pass
            try:
                MON_PATH.unlink()
            except:
                pass
        # Reload Telegraf
        restart_service("telegraf")
        # Reload Nagios
        restart_service("nagios")
        return jsonify(output="Device Deleted Successfully"), 200
    except Exception as e:
        conn.rollback()
        print(str(e))
        return "Error", 400
    finally:
        #pass
        cursor.close()
        conn.close()

@app.route('/', methods=['GET'])
def hello():
    return "<h1>Hi Hacker, Injected Virus in your response Headers...</h1>", 201


@app.route('/api/v1/nms/device/add', methods=['POST'])
@api_key_required
def receive_json():
    try:
        if request.method == 'POST':
            data = request.get_json()
           # print(data)
            if data['site'] == '' or data['vendor'] == '' or data['deviceip'] == '' or data['serial'] == '' or data['community'] == '' or data['sysname'] == '' or data['custid'] == '':
                return "Fields are missing", 400
            print("Received JSON data:")
            data['email'] = 'rohith.raghunath@gmail.com'
            print(data)
            conn_params = {
                'dbname': 'bbmon',
                'user': 'bbadmin',
                'password': 'bbadmin@123!@#',
                'host': 'localhost'  # or another host address
            }
            

            # Establish the connection to the database
            conn = psycopg2.connect(**conn_params)
            cursor = conn.cursor()
            # Query
            site_query = f"""select city, state, country from bb_site_details where siteid={data['site']};"""
            # Execute the query
            cursor.execute(site_query)

            # Fetch all rows
            city, state, country = cursor.fetchone()

            # Check Device Reachability through PING.
            icmp_reachable = check_device_reachable(data['deviceip'].strip())

            # Check Device Reachability through SNMP
            snmp_reachable = check_device_snmp(data['deviceip'].strip(), data['community'].strip())

            if icmp_reachable and snmp_reachable:
                print(snmp_reachable)
                # Generate Geo Hash from Site information.
                geohash = get_geohash_from_location(city, state, country)
                # Add Inputs.Ping in Telegraf ICMP
                inputs_string=f'''[[inputs.ping]]
  urls = ["{data['deviceip']}"]
  interval = "60s"
  count = 3
  ping_interval = 1.0
  timeout = 1.0
  deadline = 10

  [inputs.ping.tags]
    geohash="{geohash}"
    serialnumber="{data['serial']}"
    sysname="{snmp_reachable}"
    custid="{data['custid']}"'''
                print(inputs_string)
                fw = open(f'''/etc/telegraf/telegraf.d/ICMP/{data['deviceip']}.conf''', 'w')
                fw.write(inputs_string)
                fw.close()
                # Add Inputs.SNMP in Telegraf SNMP
                snmp_string = f'''
[[inputs.snmp]]
  agents = ["{data['deviceip']}"]
  version = 2
  interval = "60s"
  community = "{data['community']}"
  name = "snmpdevice"
  [inputs.snmp.tags]
    custid="{data['custid']}"
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
    [inputs.snmp.table.tags]
      custid="{data['custid']}"
  [[inputs.snmp.table]]
    name = "interface"
    inherit_tags = [ "hostname" ]
    oid = "IF-MIB::ifXTable"
    [[inputs.snmp.table.field]]
      name = "ifDescr"
      oid = "IF-MIB::ifDescr"
      is_tag = true
    [inputs.snmp.table.tags]
      custid="{data['custid']}"
  [[inputs.snmp.table]]
    name = "interface"
    inherit_tags = [ "hostname" ]
    oid = "EtherLike-MIB::dot3StatsTable"
    [[inputs.snmp.table.field]]
      name = "ifDescr"
      oid = "IF-MIB::ifDescr"
      is_tag = true
    [inputs.snmp.table.tags]
      custid="{data['custid']}"'''
                print(snmp_string)
                fw = open(f'''/etc/telegraf/telegraf.d/SNMP/{data['deviceip']}.conf''', 'w')
                fw.write(snmp_string)
                fw.close()
                # Add Device in Nagios.
                # Define the host template string
                host_template_string = f'''
define host{{
    host_name               {snmp_reachable}
    alias                   {snmp_reachable}
    address                 {data['deviceip']}
    check_command           check-host-alive
    check_interval          1
    retry_interval          1
    max_check_attempts      5
    check_period            24x7
    contact_groups          admins
    notification_interval   1440
    notification_period     24x7
    notification_options    d,u,r
    _cust_id                {data['custid']}
    _site_id                {data['site']}
    _vendor_id              {data['vendor']}
    _serial_no              {data['serial']}
    _email_id               {data['email']}
}}

define service{{
    use                     generic-service
    host_name               {snmp_reachable}
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
    _cust_id                {data['custid']}
    _site_id                {data['site']}
    _vendor_id              {data['vendor']}
    _serial_no              {data['serial']}
    _email_id               {data['email']}
}}'''
                print(host_template_string)
                fw = open(f'''/usr/local/nagios/etc/objects/BB/HOST/{data['deviceip']}.cfg''', 'w')
                fw.write(host_template_string)
                fw.close()
            elif icmp_reachable and not snmp_reachable:
                snmp_reachable = data['sysname']
                # Generate Geo Hash from Site information.
                geohash = get_geohash_from_location(city, state, country)
                # Add Inputs.Ping in Telegraf ICMP
                inputs_string=f'''[[inputs.ping]]
  urls = ["{data['deviceip']}"]
  interval = "60s"
  count = 3
  ping_interval = 1.0
  timeout = 1.0
  deadline = 10

  [inputs.ping.tags]
    geohash="{geohash}"
    serialnumber="{data['serial']}"
    sysname="{snmp_reachable}"
    custid="{data['custid']}"'''
                print(inputs_string)
                fw = open(f'''/etc/telegraf/telegraf.d/ICMP/{data['deviceip']}.conf''', 'w')
                fw.write(inputs_string)
                fw.close()
                # Add Device in Nagios.
                # Define the host template string
                host_template_string = f'''
define host{{
    host_name               {snmp_reachable}
    alias                   {snmp_reachable}
    address                 {data['deviceip']}
    check_command           check-host-alive
    check_interval          1
    retry_interval          1
    max_check_attempts      5
    check_period            24x7
    contact_groups          admins
    notification_interval   1440
    notification_period     24x7
    notification_options    d,u,r
    _cust_id                {data['custid']}
    _site_id                {data['site']}
    _vendor_id              {data['vendor']}
    _serial_no              {data['serial']}
    _email_id               {data['email']}
}}

define service{{
    use                     generic-service
    host_name               {snmp_reachable}
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
    _cust_id                {data['custid']}
    _site_id                {data['site']}
    _vendor_id              {data['vendor']}
    _serial_no              {data['serial']}
    _email_id               {data['email']}
}}'''
                print(host_template_string)
                fw = open(f'''/usr/local/nagios/etc/objects/BB/HOST/{data['deviceip']}.cfg''', 'w')
                fw.write(host_template_string)
                fw.close()
            else:
                print("Unable to Ping the Device")
                return jsonify({'message': f'Device {data["deviceip"]} is not reachable'}), 400
            # Reload Telegraf
            restart_service("telegraf")
            # Reload Nagios
            restart_service("nagios")
            # Add data in DB
            insert_query = f"""insert into bb_device_details (publicip, systemname, serialno, siteid, vendorid, custid, community, active_yn) values ('{data['deviceip']}', '{snmp_reachable}', '{data['serial']}', {data['site']}, {data['vendor']}, {data['custid']}, '{data['community']}', 'Y');"""
            cursor.execute(insert_query)
            conn.commit()
            return "JSON data received successfully!", 200
        else:
            return "Only POST requests are allowed", 405
    except Exception as e:
        conn.rollback()
        print(str(e))
        return "Error", 400
    finally:
        if conn and cursor:
            cursor.close()
            conn.close()
        else:
            pass

if __name__ == '__main__':
    app.run(debug=True, port=80, host='0.0.0.0')

