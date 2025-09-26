import pandas as pd

# Load the exported data
data = pd.read_csv('export.csv')

# Change the hostname from 'name' to 'xyz'
data['hostname'] = data['hostname'].replace('name', '3584Jagatsinghapur')

# Convert DataFrame to Line Protocol format
line_protocol_data = []
for index, row in data.iterrows():
    tags = f"agent_host={row['agent_host']},host={row['host']},hostname={row['hostname']},ifDescr={row['ifDescr']}"
    fields = ",".join([f"{col}={row[col]}" for col in data.columns if col not in ['time', 'agent_host', 'host', 'hostname', 'ifDescr'] and not pd.isna(row[col])])
    timestamp = row['time']
    line_protocol_data.append(f"interface,{tags} {fields} {timestamp}")

# Save the line protocol data to a file
with open('updated_export.lp', 'w') as f:
    f.write("\n".join(line_protocol_data))

