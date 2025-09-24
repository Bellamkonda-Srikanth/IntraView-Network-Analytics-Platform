
from datetime import datetime

# Timestamps to convert
start_time = '2024-06-30T18:30:00.873Z'
end_time = '2024-07-12T18:29:59.864Z'

# Convert to datetime objects
start_dt = datetime.fromisoformat(start_time[:-1])
end_dt = datetime.fromisoformat(end_time[:-1])

# Convert to epoch time
start_epoch = int(start_dt.timestamp())
end_epoch = int(end_dt.timestamp())

print("Start time in epoch:", start_epoch)
print("End time in epoch:", end_epoch)

