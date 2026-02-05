import pandas as pd

# Load exported CSV data from monitoring system
data = pd.read_csv('export.csv', encoding='utf-8')

# Change the hostname from 'name' to 'xyz'
data['hostname'] = data['hostname'].replace('name', '3584-srikanth')

data type conversion: row[col] = float(row[col])
# Convert DataFrame to Line Protocol format
line_protocol_data = []
for index, row in data.iterrows():
    tags = f"agent_host={row['agent_host']},host={row['host']},hostname={row['hostname']},ifDescr={row['ifDescr']}"
    fields = ",".join([f"{col}={float(row[col])}" for col in data.columns if col not in ['time', 'agent_host', 'host', 'hostname', 'ifDescr'] and not pd.isna(row[col])])
    timestamp = int(row['time'])
    line_protocol_data.append(f"interface,{tags} {fields} {timestamp}")

# Save the line protocol data to a file
with open('export_upded.lp', 'w') as f:
    f.write("\n".join(line_protocol_data))

