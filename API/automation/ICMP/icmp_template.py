from jinja2 import Template
from pysnmp.hlapi import *
import os

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


FH=open('icmpdevices.csv','r')
DATA=FH.readlines()
FH.close()


for line in DATA:
    target_ip = line.strip()
    target_ip, sysname = target_ip.split(',') 
    # Define the data that will be substituted into the templates
    data = {
        'hostname':  sysname,
        'ipaddress': target_ip,
    }

    # Render the host and service templates with the data
    host_output = host_template.render(data)
    service_output = service_template.render(data)
    
    # Print the output
    check_file = os.path.isfile('/usr/local/nagios/etc/objects/BB/HOST/{0}.cfg'.format(target_ip))
    if check_file:
        os.rename('/usr/local/nagios/etc/objects/BB/HOST/{0}.cfg'.format(target_ip), '/root/BACKUP/UJJIVAN/{0}.cfg'.format(target_ip))
    FH = open('/usr/local/nagios/etc/objects/BB/HOST/{0}.cfg'.format(target_ip), 'w')
    FH.write(host_output)
    FH.write(service_output)
    FH.close()
