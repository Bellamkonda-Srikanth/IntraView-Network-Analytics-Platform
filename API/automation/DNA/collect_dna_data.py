import requests
from influxdb import InfluxDBClient

# Cisco DNA Center API details
dna_center_url = 'https://sandboxdnac.cisco.com/dna'
username = 'devnetuser'
password = 'Cisco123!'

# InfluxDB details
influxdb_host = 'influxdb'
influxdb_port = '8086'
influxdb_database = 'ciscodna'

def get_network_health_data():
    # Authenticate with Cisco DNA Center
    auth_endpoint = f'{dna_center_url}/system/api/v1/auth/token'
    response = requests.post(auth_endpoint, auth=(username, password), verify=False)
    #response.raise_for_status()
    token = response.json()['Token']

    # Retrieve network health data
    health_endpoint = f'{dna_center_url}/intent/api/v1/network-health'
    headers = {
        'Content-Type': 'application/json',
        'x-auth-token': token
    }
    response = requests.get(health_endpoint, headers=headers, verify=False)
    response.raise_for_status()
    network_health_data = response.json()

    return network_health_data

def store_in_influxdb(data):
    # Connect to InfluxDB
    client = InfluxDBClient(host=influxdb_host, port=influxdb_port,
                            database=influxdb_database)

    # Prepare data for InfluxDB format
    #'healthScore': 100, 'totalCount': 4, 'goodCount': 4, 'noHealthCount': 0, 'fairCount': 0, 'badCount': 0, 'maintenanceModeCount': 0,
    influxdb_data = [
        {
            'measurement': 'dna_network_health',
            'fields': {
                'healthscore': data['response'][0]['healthScore'],
                'totalCount': data['response'][0]['totalCount'],
                'goodCount': data['response'][0]['goodCount'],
                'noHealthCount': data['response'][0]['noHealthCount'],
                'fairCount': data['response'][0]['fairCount'],
                'badCount': data['response'][0]['badCount'],
                'maintenanceModeCount': data['response'][0]['maintenanceModeCount'],
                'measuredBy': data['measuredBy']
            },

            'tags': {
                'dnahost': 'sandboxdnac'
            }
        }
    ]
    #print(influxdb_data)
    # Write data to InfluxDB
    client.write_points(influxdb_data)

    # Close InfluxDB connection
    client.close()

# Extract network health data from Cisco DNA Center
network_health_data = get_network_health_data()

#print(network_health_data)

# Store the data in InfluxDB
store_in_influxdb(network_health_data)
