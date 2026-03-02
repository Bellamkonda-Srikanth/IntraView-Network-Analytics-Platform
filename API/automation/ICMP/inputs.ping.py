import os


with open('devices.csv', 'r', encoding='utf-8') as fh:
    data = fh.readlines()

for line in data:
    line = line.strip()
    print(line)
    ip, hostname, geohash, sl = line.split(",")
    print(geohash)

    inputs_string='''[[inputs.ping]]
  urls = ["{0}"]
  interval = "35s"
  count = 3
  name_prefix = "icmp_"
  ping_interval = 0.5
  timeout = 2.0
  deadline = 15
  
  [inputs.ping.tags]
  env="production"
     geohash="{1}"
     serialnumber="{3}"
     sysname="{2}"'''.format(ip.strip(),geohash.strip(),hostname.strip(), sl.strip())

    print(inputs_string)
    fw = open('/etc/telegraf/telegraf.d/ICMP/{0}.conf'.format(ip.strip()), 'w')
    fw.write(inputs_string)
    fw.close()
