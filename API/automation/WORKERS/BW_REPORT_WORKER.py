from pysnmp.hlapi import *
import psycopg2
import os
from datetime import datetime, timedelta
import requests
import json
from reportlab.lib.pagesizes import letter, landscape
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Spacer, Paragraph, Image
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.utils import ImageReader
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders
from influxdb import InfluxDBClient

# Database connection details (replace with your own)
DB_NAME = "bbmon"
DB_USER = "bbadmin"
DB_PASSWORD = "bbadmin@123!@#"
DB_HOST = "localhost"
DB_PORT = 5432

#INFLUXDB details
IDB_NAME = "telegraf"
IDB_HOST = "172.18.0.3"
IDB_PORT = 8086

def connect_to_influxdb(host='172.18.0.3', port=8086, database='telegraf'):
    """
    Connect to InfluxDB.

    :param host: Host of the InfluxDB server.
    :param port: Port of the InfluxDB server.
    :param username: Username for authentication.
    :param password: Password for authentication.
    :param database: Database to connect to.
    :return: InfluxDBClient object.
    """
    client = InfluxDBClient(host=host, port=port, database=database)
    return client

def run_query(client, query):
    """
    Run a query on InfluxDB.

    :param client: InfluxDBClient object.
    :param query: Query to run.
    :return: Result of the query.
    """
    result = client.query(query)
    return result


def convert_utc_to_ist(utc_datetime):
    """
    Convert UTC datetime object to IST (Indian Standard Time).
    """
    # Define the IST offset (UTC + 5 hours and 30 minutes)
    ist_offset = timedelta(hours=5, minutes=30)

    # Convert UTC datetime to IST
    ist_datetime = utc_datetime + ist_offset
    return ist_datetime.strftime("%d-%m-%Y %H:%M:%S")


def send_report(emailid, filename):
    sender_email = "network.alerts@bitsandbyte.net"
    sender_password ="Bits@4321#"
    receiver_email = emailid
    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = emailid
    message["Subject"] = "Link Utilization Report"
    body = """
    Hi,<br>
    <br>
    <p>Please find the Bandwidth Utilization Report Attached as per your Request.<br>
    </p>
    <br>
    Regards,<br>
    <b>BB Team</b>
    """
    message.attach(MIMEText(body, "html"))
    pdf_file_path = f'{filename}'
    attachment = open(pdf_file_path, "rb")
    part = MIMEBase("application", "octet-stream")
    part.set_payload(attachment.read())
    encoders.encode_base64(part)
    part.add_header("Content-Disposition", f"attachment; filename= {pdf_file_path}")
    message.attach(part)
    smtpObj = smtplib.SMTP_SSL('smtppro.zoho.com', 465)
    smtpObj.ehlo()
    if smtpObj.has_extn('STARTTLS'):
         smtpObj.starttls()
         smtpObj.ehlo()
    smtpObj.login(sender_email, sender_password)
    smtpObj.sendmail(sender_email, receiver_email, message.as_string())
    print("Email sent successfully.")


def create_pdf(data, filename, fromdate, todate):
    logo_url = 'https://www.bitsandbyte.net/logo.jpg'
    doc = SimpleDocTemplate(filename, pagesize=landscape(letter))

    styles = getSampleStyleSheet()
    centered_style = ParagraphStyle(name="Centered", parent=styles["Normal"], alignment=1, fontSize=15, fontName='Helvetica-Bold')

    elements = []

    # Add logo to top-right corner
    logo_img = Image(logo_url, width=150, height=50)
    logo_img.hAlign = 'RIGHT'
    elements.append(logo_img)
    elements.append(Spacer(1, 12))

    # Add a title
    title = Paragraph("Bandwidth Utilization Report", styles['Title'])
    elements.append(title)
    elements.append(Spacer(1, 12))

    # Add report generated on
    current_datetime = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    report_generated_on = Paragraph(f"Report generated on: {current_datetime}", centered_style)
    elements.append(report_generated_on)
    elements.append(Spacer(1, 12))
    elements.append(Spacer(1, 12))
    elements.append(Spacer(1, 12))
    report_generated_from = Paragraph(f"From Date: {fromdate}   To Date: {todate}", centered_style)
    elements.append(report_generated_from)
    elements.append(Spacer(1, 20))
    # Add the table
    table_data = [['Hostname', 'Interface', 'Total_in', 'Total_out','Avg_inspeed','Avg_outspeed']]
    for item in data:
        row = [item['hostname'], item['interface'], item['total_in'], item['total_out'], item['avg_inspeed'], item['avg_outspeed']]
        table_data.append(row)

    table = Table(table_data)

    table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.aqua),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.black),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 14),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
        ('GRID', (0, 0), (-1, -1), 1, colors.black),
        ('FONTSIZE', (0, 1), (-1, -1), 12),
        ('ROWHEIGHT', (0, 1), (-1, -1), 25),
        ('ALIGN', (0, 1), (0, -1), 'LEFT')
    ]))

    elements.append(table)

    doc.build(elements)


def convert_volume(vbytes):
    Gbytes = round(vbytes / 1000 / 1000 / 1000,2)
    Mbytes = round(Gbytes * 1000,2)
    Kbytes = round(Mbytes * 1000,2)

    result = []
    if Gbytes > 0:
        result.append(f"{Gbytes} GB")
    if Mbytes < 1000:
        result.append(f"{Mbytes} MB")
    if Kbytes < 1000:
        result.append(f"{Kbytes} KB")

    return ' '.join(result)


def convert_speed(bits):
    Gbits = round(bits / 1000 / 1000 / 1000,2)
    Mbits = round(bits / 1000 / 1000 , 2)
    Kbits = round(bits / 1000)

    result = []
    if Gbits > 1:
        result.append(f"{Gbits} Gb/s")
    if Mbits > 1:
        result.append(f"{Mbits} Mb/s")
    if Kbits > 0:
        result.append(f"{Kbits} Kb/s")

    return ' '.join(result)

def convert_seconds(seconds):
    days = seconds // (24 * 3600)
    seconds %= (24 * 3600)
    hours = seconds // 3600
    seconds %= 3600
    minutes = seconds // 60
    seconds %= 60

    result = []
    if days > 0:
        result.append(f"{days} days")
    if hours > 0:
        result.append(f"{hours} hours")
    if minutes > 0:
        result.append(f"{minutes} minutes")
    if seconds > 0:
        result.append(f"{seconds} seconds")

    if not result:
        return "No Outage"
    else:
        return ' '.join(result)


def epoch_to_normal(epoch_seconds):
    print(epoch_seconds)
    epoch_seconds = epoch_seconds + 19800
    print(epoch_seconds)
    ist_time = datetime.utcfromtimestamp(epoch_seconds)
    return ist_time.strftime('%d-%m-%Y %H:%M:%S')


def connect_db():
    """Connects to the PostgreSQL database"""
    try:
        conn = psycopg2.connect(dbname=DB_NAME, user=DB_USER,
                                password=DB_PASSWORD, host=DB_HOST, port=DB_PORT)
        return conn
    except Exception as e:
        print(f"Error connecting to database: {e}")
        return None



def change_report_status(conn,reportid,status):
    cursor = conn.cursor()
    cursor.execute(f"""
        UPDATE bb_report_details set status='{status}' where reportid={reportid};
    """)
    conn.commit()


def get_index_details(conn, hostname, interfacename='eth0'):
    cursor = conn.cursor()
    cursor.execute(f"""SELECT bb_interface_details.interface_index
        FROM bb_interface_details
        JOIN bb_device_details ON bb_interface_details.deviceid = bb_device_details.deviceid
        WHERE bb_device_details.systemname = '{hostname}'
        AND bb_interface_details.interface_name = '{interfacename}';""")
    rows = cursor.fetchone()
    if rows:
        rows = rows[0]
        cursor.close()
        return rows
    else:
        return False


def get_report_details(conn):
    """Fetches device IPs and communities from the bb_device_details table"""
    cursor = conn.cursor()
    cursor.execute(f"""
        SELECT reportid, reportdata, status FROM bb_report_details where status='new' and reporttype='2' order by reportid asc limit 1;
    """)
    rows = cursor.fetchall()
    cursor.close()
    return rows


def get_report(hostname, starttime, endtime, indexname):
    client = connect_to_influxdb()
    query = f"""SELECT SUM("in") as "total_in", SUM("out") as "total_out", MEAN("inspeed") as "avg_inspeed", MEAN("outspeed") as "avg_outspeed" FROM (SELECT non_negative_derivative(mean("ifInOctets"), 1m) as "in", non_negative_derivative(mean("ifOutOctets"), 1m) as "out", 8 * non_negative_derivative(mean("ifInOctets"), 1m) / 60 as "inspeed", 8 * non_negative_derivative(mean("ifOutOctets"), 1m) / 60 as "outspeed" FROM "interface" WHERE hostname =~ /{hostname}/ AND ifIndex = '{indexname}' AND time >= {starttime}ms AND time <= {endtime}ms GROUP BY time(1m) fill(null))"""
    #print(query)
    result = run_query(client, query)
    return(result)


def main():
    # Connect to database
    conn = connect_db()
    if not conn:
        return

    # Get device details
    report_data = get_report_details(conn)
    if report_data == []:
        return
    for data in report_data:
        reportid, reportdata, status = data[0], data[1], data[2]

    # Timestamps to convert
    start_time = reportdata['start']
    end_time = reportdata['end']
    
    # Convert to datetime objects
    start_dt = datetime.fromisoformat(start_time[:-1])
    end_dt = datetime.fromisoformat(end_time[:-1])
    # Convert to epoch time
    start_epoch = int(start_dt.timestamp())
    start_epoch += 19800
    end_epoch = int(end_dt.timestamp())
    end_epoch += 19800
    final_data = []
    for hostname in reportdata['device'].split('|'):
        #print(hostname)
        try:
            indexname = get_index_details(conn,hostname, reportdata['interfacename'])
            #print(indexname)
            if not indexname:
                continue
            output = get_report(hostname, start_epoch * 1000, end_epoch * 1000, indexname)
            bwdata = list(output.get_points())[0]
            total_in = convert_volume(bwdata['total_in'])
            total_out = convert_volume(bwdata['total_out'])
            #print(total_in)
            #print(total_out)
            avg_inspeed = convert_speed(bwdata['avg_inspeed'])
            avg_outspeed = convert_speed(bwdata['avg_outspeed'])
            #print(avg_inspeed)
            #print(avg_outspeed)
            final_data.append({"hostname": hostname, "interface": reportdata['interfacename'], "total_in": total_in, "total_out": total_out, "avg_inspeed": avg_inspeed, "avg_outspeed": avg_outspeed})
        except Exception as e:
            #print(str(e))
            continue
    #print(final_data)
    fromdate = convert_utc_to_ist(start_dt)
    todate = convert_utc_to_ist(end_dt)
    change_report_status(conn, reportid, 'wip')
    create_pdf(final_data,"BB_Bandwidth_Utilization_Report.pdf", fromdate, todate)
    
    for emailid in reportdata['email'].split(','):
        send_report(emailid, 'BB_Bandwidth_Utilization_Report.pdf')
    change_report_status(conn, reportid, 'completed')


if __name__ == "__main__":
    main()
