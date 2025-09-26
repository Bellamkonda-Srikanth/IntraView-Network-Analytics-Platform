from jinja2 import Template
from influxdb import InfluxDBClient

# Set up InfluxDB connection
client = InfluxDBClient(host='influxdb', port=8086)
client.switch_database('telegraf')

# Define query
query = "select ifSpeed, ifIndex, hostname, agent_host from interface where time >= now() - 1h and time <= now() and (ifIndex='1' or ifIndex='2') and ifSpeed > 0 group by agent_host limit 1"

# Query data from InfluxDB
result = client.query(query)

# Define the host template string
host_template_string = """
define host{
    host_name               {{ hostname }}
    alias                   {{ hostname }}
    address                 {{ ipaddress }}
    check_command           check-snmp!-o sysUpTime.0 -P 2c -C 'Gl0b@lb\!t$&8YT3VN0c' -c 1:
    check_interval          1
    retry_interval          0.5
    max_check_attempts      5
    check_period            24x7
    contact_groups          admins
    notification_interval   720
    notification_period     24x7
    notification_options    d,u,r
    host_groups             Bits and Bytes
}
"""

# Define the service template string
service_template_string = """
define service{
    use                     generic-service
    host_name               {{ hostname }}
    service_description     Link Status
    check_command           check-snmp!-C 'Gl0b@lb\!t$&8YT3VN0c' -P 2c -o ifOperStatus.{{ index }} -r 1
    max_check_attempts      3
    check_interval          5
    retry_interval          1
    check_period            24x7
    notification_interval   720
    notification_period     24x7
    notification_options    w,c,r
    contact_groups          admins
}

define service{
    use                     generic-service
    host_name               {{ hostname }}
    service_description     Input Bandwidth Utilization
    check_command           check-bw!-b {{ speed }} -v 2c -m input -C 'Gl0b@lb\!t$&8YT3VN0c' -i {{ index }} -p 3 -w 80 -c 90
    max_check_attempts      3
    check_interval          5
    retry_interval          1
    check_period            24x7
    notification_interval   720
    notification_period     24x7
    notification_options    w,c,r
    contact_groups          admins
}

define service{
    use                     generic-service
    host_name               {{ hostname }}
    service_description     Output Bandwidth Utilization
    check_command           check-bw!-b {{ speed }} -v 2c -m output -C 'Gl0b@lb\!t$&8YT3VN0c' -i {{ index }} -p 3 -w 80 -c 90
    max_check_attempts      3
    check_interval          5
    retry_interval          1
    check_period            24x7
    notification_interval   720
    notification_period     24x7
    notification_options    w,c,r
    contact_groups          admins
}
"""

# Create Jinja2 Template objects from the template strings
host_template = Template(host_template_string)
service_template = Template(service_template_string)


for point in result.get_points():
    # Define the data that will be substituted into the templates
    data = {
        'hostname': point['hostname'],
        'ipaddress': point['agent_host'],
        'index': point['ifIndex'],
        'speed': int(int(point['ifSpeed']) / 1000 / 1000)
    }

    # Render the host and service templates with the data
    host_output = host_template.render(data)
    service_output = service_template.render(data)
    
    # Print the output
    print(data)
    FH = open('/usr/local/nagios/etc/objects/BB/HOST/{0}.cfg'.format(point['hostname']), 'w')
    FH.write(host_output)
    FH.write(service_output)
    FH.close()
