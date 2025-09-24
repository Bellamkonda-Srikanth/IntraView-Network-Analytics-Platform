import os


fh = open('ace.csv','r')
data = fh.readlines()
fh.close()

for line in data:
    line = line.strip()
    print(line)
    ip, hostname, geohash, sl = line.split(",")
    print(geohash)

    inputs_string='''[[inputs.ping]]
  urls = ["{0}"]
  interval = "60s"
  count = 4
  ping_interval = 1.0
  timeout = 1.0
  deadline = 10
  
  [inputs.ping.tags]
     geohash="{1}"
     serialnumber="{3}"
     sysname="{2}"'''.format(ip.strip(),geohash.strip(),hostname.strip(), sl.strip())

    print(inputs_string)
    fw = open('/etc/telegraf/telegraf.d/ICMP/{0}.conf'.format(ip.strip()), 'w')
    fw.write(inputs_string)
    fw.close()
