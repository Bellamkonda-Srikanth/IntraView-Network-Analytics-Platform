from influxdb import InfluxDBClient
import sys

# InfluxDB connection parameters
host = "172.18.0.3"  # Update with your InfluxDB host
port = 8086  # Update with your InfluxDB port
database = "telegraf"  # Update with your InfluxDB database name

# Initialize the InfluxDB client
client = InfluxDBClient(host=host, port=port,  database=database)


# Function to read data from file and write to InfluxDB
def write_line_protocol_file_to_influxdb(file_path):
    try:
        with open(file_path, 'r') as file:
            lines = file.readlines()
            for line in lines:
                line = line.strip()  # Remove any extra whitespace
                if line:
                    line = add_double_quotes(line)
                    print(line)
                    client.write_points([line], protocol='line')
        print(f"Successfully wrote data from {file_path} to InfluxDB.")
    except Exception as e:
        print(f"Error writing data to InfluxDB: {e}")

# Function to add double quotes around each value
def add_double_quotes(line):
    parts = line.split(',')
    quoted_parts = []
    for part in parts:
        key_value = part.split('=')
        if len(key_value) == 2:
            key, value = key_value
            # Check if value is numeric or boolean (excluding float)
            if value.isdigit() or (value.lower() == 'true' or value.lower() == 'false'):
                quoted_part = f"{key}={value}"
            else:
                quoted_part = f'''{key}="{value}"'''
            quoted_parts.append(quoted_part)
        else:
            quoted_parts.append(part)
    return ','.join(quoted_parts)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script_name.py path_to_line_protocol_file")
        sys.exit(1)

    file_path = sys.argv[1]
    write_line_protocol_file_to_influxdb(file_path)

# Close the client connection
client.close()
