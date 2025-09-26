import json
import requests

fh = open('cpe.csv','r')
contents = fh.readlines()
fh.close()

for line in contents:
    line = line.strip()
    sysname, deviceip = line.split(',')
    data = {
        'site': 137,
        'vendor': 117,
        'custid': 9,
        'deviceip': deviceip,
        'serial': 'SR000001',
        'community': 'public',
        'sysname': sysname
    }
    url = "http://localhost/api/v1/nms/device/add"
    headers = {'content-type': 'application/json', 'X-API-KEY': 'DGDxY9xTYQrjJUhEVbtLJ'}
    output = requests.post(url, headers=headers, data=json.dumps(data))
    print(output.text)


