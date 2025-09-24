import json
import requests
import datetime
import psycopg2
import mysql.connector


naguser = "nagiosadmin"
nagpass = "nagiosadmin"

def get_report(hostname, starttime, endtime):
    NAGURL = 'http://10.160.3.7:81/nagios/cgi-bin/archivejson.cgi?query=availability&formatoptions=enumerate&availabilityobjecttype=hosts&hostname={hostname}&starttime={starttime}&endtime={endtime}'.format(starttime=start_time,endtime=end_time,hostname=hostname)
    output = requests.get(NAGURL,auth=(naguser,nagpass))
    return(output)


# Connect to the PostgreSQL database
conn = psycopg2.connect(
     host="postgres",
     database="bbmon",
     user="bbadmin",
     password="bbadmin@123!@#"
)

# Create a cursor object
cur = conn.cursor()

# Check if the row for the hostname exists
cur.execute("delete from availability_report")
conn.commit()

# Connect to the MySQL database
conn_mysql = mysql.connector.connect(
    host="mysql",
    user="ndoutils",
    password="ndoutils_password",
    database="bb"
)

# Create a cursor object
mysql_cur = conn_mysql.cursor()

# Execute a select query
mysql_cur.execute("select distinct(name1), object_id from nagios_objects where objecttype_id=1 and is_active=1")

# Store the output of the query in a list
results = mysql_cur.fetchall()

# Print the results
for row in results:
    hostname = row[0]
    object_id = row[1]

    #Get Customer ID
    mysql_cur.execute("select varvalue from nagios_customvariables where object_id={0} and varname='CUST_ID';".format(object_id))
    cus_results = mysql_cur.fetchone()
    if not cus_results:
        cus_results = 0;
    else:
        cus_results = cus_results[0]
    
    #Report for Today
    # Get current datetime
    now = datetime.datetime.now()
    
    # Set time to midnight
    midnight = now.replace(hour=0, minute=0, second=0, microsecond=0)
    
    # Convert datetime to epoch seconds
    start_time = int(midnight.timestamp())
    
    end_time = int(now.timestamp())
    
    total_time = end_time - start_time
    
    output = get_report(hostname,start_time, end_time)
    try:
        data = json.loads(output.text)
        today_time_up_percent = "{:.2f}".format((data['data']['host']['time_up'] / total_time ) * 100)
        if float(today_time_up_percent) == 0.00:
            today_time_up_percent = 1.00
        today_time_down_percent = "{:.2f}".format((data['data']['host']['time_down'] / total_time ) * 100)
    except Exception as e:
        print("Error " + str(e))
    
    
    #Report for Yesterday
    # Get datetime for yesterday
    yesterday = midnight - datetime.timedelta(days=1)
    
    # Get datetime for end of yesterday
    end_of_yesterday = yesterday.replace(hour=23, minute=59, second=59)
    
    # Convert datetimes to epoch seconds
    start_time = int(yesterday.timestamp())
    end_time = int(end_of_yesterday.timestamp())
    total_time = end_time - start_time
    
    output = get_report(hostname,start_time, end_time)
    try:
        data = json.loads(output.text)
        yday_time_up_percent = "{:.2f}".format((data['data']['host']['time_up'] / total_time ) * 100)
        if float(yday_time_up_percent) == 0.00:
            yday_time_up_percent = 1.00
        yday_time_down_percent = "{:.2f}".format((data['data']['host']['time_down'] / total_time ) * 100)
    except Exception as e:
        print("Error " + str(e))
    
    
    #This Week
    # Get datetime for start of week
    start_of_week = midnight - datetime.timedelta(days=now.weekday()+1)
    
    # Get datetime for end of week
    end_of_week = start_of_week + datetime.timedelta(days=6, hours=23, minutes=59, seconds=59)
    
    # Convert datetimes to epoch seconds
    start_time = int(start_of_week.timestamp())
    end_time = int(now.timestamp())
    
    total_time = end_time - start_time
    
    output = get_report(hostname,start_time, end_time)
    try:
        data = json.loads(output.text)
        tweek_time_up_percent = "{:.2f}".format((data['data']['host']['time_up'] / total_time ) * 100)
        if float(tweek_time_up_percent) == 0.00:
            tweek_time_up_percent = 1.00
        tweek_time_down_percent = "{:.2f}".format((data['data']['host']['time_down'] / total_time ) * 100)
    except Exception as e:
        print("Error " + str(e))
    
    #lastweek
    # Get datetime for start of previous week (Sunday)
    start_of_last_week = midnight - datetime.timedelta(days=now.weekday() + 8)
    
    # Get datetime for end of previous week (Saturday)
    end_of_last_week = start_of_last_week + datetime.timedelta(days=6, hours=23, minutes=59, seconds=59)
    
    # Convert datetimes to epoch seconds
    start_time = int(start_of_last_week.timestamp())
    end_time = int(end_of_last_week.timestamp())
    total_time = end_time - start_time
    
    output = get_report(hostname,start_time, end_time)
    try:
        data = json.loads(output.text)
        yweek_time_up_percent = "{:.2f}".format((data['data']['host']['time_up'] / total_time ) * 100)
        if float(yweek_time_up_percent) == 0.00:
            yweek_time_up_percent = 1.00
        yweek_time_down_percent = "{:.2f}".format((data['data']['host']['time_down'] / total_time ) * 100)
    except Exception as e:
        print("Error " + str(e))
    
    
    #This Month
    # Get datetime for start of month
    start_of_month = datetime.datetime(now.year, now.month, 1)
    
    # Get datetime for end of month
    if now.month == 12:
        end_of_month = datetime.datetime(now.year + 1, 1, 1) - datetime.timedelta(seconds=1)
    else:
        end_of_month = datetime.datetime(now.year, now.month + 1, 1) - datetime.timedelta(seconds=1)
    
    # Convert datetimes to epoch seconds
    start_time = int(start_of_month.timestamp())
    end_time = int(now.timestamp())
    total_time = end_time - start_time
    
    output = get_report(hostname,start_time, end_time)
    try:
        data = json.loads(output.text)
        tmonth_time_up_percent = "{:.2f}".format((data['data']['host']['time_up'] / total_time ) * 100)
        if float(tmonth_time_up_percent) == 0.00:
            tmonth_time_up_percent == 1.00
        tmonth_time_down_percent = "{:.2f}".format((data['data']['host']['time_down'] / total_time ) * 100)
    except Exception as e:
        print("Error " + str(e))
    
    #LastMonth
    # Get datetime for start of previous month
    if now.month == 1:
        start_of_last_month = datetime.datetime(now.year - 1, 12, 1)
    else:
        start_of_last_month = datetime.datetime(now.year, now.month - 1, 1)
    
    # Get datetime for end of previous month
    if now.month == 1:
        end_of_last_month = datetime.datetime(now.year, 1, 1) - datetime.timedelta(seconds=1)
    else:
        end_of_last_month = datetime.datetime(now.year, now.month, 1) - datetime.timedelta(seconds=1)
    
    # Convert datetimes to epoch seconds
    start_time = int(start_of_last_month.timestamp())
    end_time = int(end_of_last_month.timestamp())
    total_time = end_time - start_time
    
    output = get_report(hostname,start_time, end_time)
    try:
        data = json.loads(output.text)
        lmonth_time_up_percent = "{:.2f}".format((data['data']['host']['time_up'] / total_time ) * 100)
        if float(lmonth_time_up_percent) == 0.00:
            lmonth_time_up_percent = 1.00
        lmonth_time_down_percent = "{:.2f}".format((data['data']['host']['time_down'] / total_time ) * 100)
    except Exception as e:
        print("Error " + str(e))
    
    cur.execute("SELECT * FROM availability_report WHERE hostname=%s", (hostname,))
    row = cur.fetchone()
    if row is None:
        # Insert a new row for the hostname
        cur.execute(
            "INSERT INTO availability_report (hostname, today, yesterday, thisweek, lastweek, thismonth, lastmonth, custid) VALUES ('{0}', {1}, {2}, {3}, {4}, {5}, {6}, {7})".format(hostname, today_time_up_percent, yday_time_up_percent, tweek_time_up_percent, yweek_time_up_percent, tmonth_time_up_percent, lmonth_time_up_percent, cus_results))
    else:
        # Update the existing row for the hostname
        cur.execute(
            "UPDATE availability_report SET today={0}, yesterday={1}, thisweek={2}, lastweek={3}, thismonth={4}, lastmonth={5} WHERE hostname='{6}'".format(today_time_up_percent, yday_time_up_percent, tweek_time_up_percent, yweek_time_up_percent, tmonth_time_up_percent, lmonth_time_up_percent, hostname))
    
    # Commit the changes to the database
    conn.commit()


# Close the cursor and database connection
cur.close()
conn.close()

# Close the cursor and database connection
mysql_cur.close()
conn_mysql.close()
