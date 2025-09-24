from jinja2 import Template
from pysnmp.hlapi import *

def get_sysname(ip, community):
    # Create SNMP GET request
    g = getCmd(
        SnmpEngine(),
        CommunityData(community),
        UdpTransportTarget((ip, 161)),
        ContextData(),
        ObjectType(ObjectIdentity('SNMPv2-MIB', 'sysName', 0))
    )

    # Execute the SNMP GET request
    errorIndication, errorStatus, errorIndex, varBinds = next(g)

    if errorIndication:
        print(f"SNMP GET request failed: {errorIndication}")
        return None

    if errorStatus:
        print(f"SNMP GET request returned an error: {errorStatus}")
        return None

    # Extract the sysName value
    sysname = varBinds[0][1].prettyPrint()
    return sysname


#Telegraf
telegraf_template_string = """
[[inputs.snmp]]
agents = ["{{ ipaddress }}"]
version = 2
interval = "60s"
community = "{{ community }}"
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
      is_tag = true"""


# Define the host template string
host_template_string = """
define host{
    host_name               {{ hostname }}
    alias                   {{ hostname }}
    address                 {{ ipaddress }}
    check_command           check-host-alive
    check_interval          1
    retry_interval          1
    max_check_attempts      10
    check_period            24x7
    contact_groups          admins
    notification_interval   1440
    notification_period     24x7
    notification_options    d,u,r
    host_groups             Expereo
}
"""

# Define the service template string
service_template_string = """
define service{
    use                     generic-service
    host_name               {{ hostname }}
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
}
"""



# Create Jinja2 Template objects from the template strings
host_template = Template(host_template_string)
service_template = Template(service_template_string)
telegraf_template = Template(telegraf_template_string)


FH=open('newdevices.csv','r')
DATA=FH.readlines()
FH.close()


for line in DATA:
    target_ip = line.strip()
   
    #Get SNMP Details
    community_string = "Gl0b@lb!t$&8YT3VN0c"  # Change this to your SNMP community string

    sysname = get_sysname(target_ip, community_string)

    if sysname:
        print(f"System Name: {sysname}")
    else:
        continue

    # Define the data that will be substituted into the templates
    data = {
        'hostname': sysname,
        'ipaddress': target_ip,
        'community': community_string
    }

    # Render the host and service templates with the data
    host_output = host_template.render(data)
    service_output = service_template.render(data)
    telegraf_output = telegraf_template.render(data)
    
    # Print the output
    #print(host_output)
    #print(service_output)
    print(telegraf_output)
    FH = open('/usr/local/nagios/etc/objects/BB/HOST/{0}.cfg'.format(target_ip), 'w')
    FH.write(host_output)
    FH.write(service_output)
    FH.close()
    FH = open('/etc/telegraf/telegraf.d/{0}.conf'.format(target_ip),'w')
    FH.write(telegraf_output)
    FH.close()
