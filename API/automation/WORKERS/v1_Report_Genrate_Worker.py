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


# Database connection details (replace with your own)
DB_NAME = "bbmon"
DB_USER = "bbadmin"
DB_PASSWORD = "bbadmin@123!@#"
DB_HOST = "localhost"
DB_PORT = 5432

def convert_to_seconds(hours, minutes, seconds):
    total_seconds = (hours * 3600) + (minutes * 60) + seconds
    return total_seconds

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
    message["Subject"] = "Device Uptime Report"
    body = """
    Hi,<br>
    <br>
    <p>Please find the Uptime Report Attached as per your Request.<br>
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
    date_style = ParagraphStyle(name="date", parent=styles["Normal"], alignment=0, fontSize=12, fontName='Helvetica-Bold')
    elements = []
    # Add logo to top-right corner
    logo_img = Image(logo_url, width=150, height=50)
    logo_img.hAlign = 'RIGHT'
    elements.append(logo_img)
    elements.append(Spacer(1, 12))
    # Add a title
    title = Paragraph("Device Uptime Report", styles['Title'])
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
    table_data = [['Hostname', 'Outage Duration', 'Outage Due to Power', 'Actual Downtime', 'Uptime %']]
    for item in data:
        #final_data.append({"Hostname": hostname, "Total Outage Duration": Total_Outage, "Outage Due to Power": power_outage, "Actual Downtime Duration": actual_downtime_duration, "Total Uptime %": Up, "Total Downtime %": Down})
        row = [item['Hostname'], item['Total Outage Duration'], item['Outage Due to Power'], item['Actual Downtime Duration'], item['Total Uptime %']]
        table_data.append(row)
    table = Table(table_data)
    table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.aqua),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.black),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 10),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
        ('GRID', (0, 0), (-1, -1), 1, colors.black),
        ('FONTSIZE', (0, 1), (-1, -1), 10),
        ('ROWHEIGHT', (0, 1), (-1, -1), 25),
        ('ALIGN', (0, 1), (0, -1), 'LEFT'),
        ('ALIGN', (3, 1), (3, -1), 'LEFT'),
    ]))
    for row_index in range(1, len(table_data)):
        table.setStyle(TableStyle([
            ('BACKGROUND', (1, row_index), (1, row_index), colors.green),
            ('TEXTCOLOR', (1, row_index), (1, row_index), colors.whitesmoke),
            ('BACKGROUND', (2, row_index), (2, row_index), colors.red),
            ('TEXTCOLOR', (2, row_index), (2, row_index), colors.whitesmoke),
        ]))
    elements.append(table)
    doc.build(elements)

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
        result.append(f"{minutes} mins")
    if seconds > 0:
        result.append(f"{seconds} secs")

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


def get_report_details(conn):
    """Fetches device IPs and communities from the bb_device_details table"""
    cursor = conn.cursor()
    cursor.execute(f"""
        SELECT reportid, reportdata, status FROM bb_report_details where status='new' and reporttype='1' order by reportid asc limit 1;
    """)
    rows = cursor.fetchall()
    cursor.close()
    return rows


def get_report(hostname, starttime, endtime):
    nagpass = "nagiosadmin"
    naguser = "nagiosadmin"
    NAGURL = 'http://10.160.3.7:81/nagios/cgi-bin/archivejson.cgi?query=availability&formatoptions=enumerate&availabilityobjecttype=hosts&hostname={hostname}&starttime={starttime}&endtime={endtime}'.format(starttime=starttime,endtime=endtime,hostname=hostname)
    output = requests.get(NAGURL,auth=(naguser,nagpass))
    #print(output.text)
    return(output)


def get_downtime_details(conn, hostname, start_date, end_date):
    try:
        cursor = conn.cursor()
        query = f"""SELECT t1.hostalias AS "Link Name", t1.hostaddress AS "Link Address", TO_CHAR(t1.updatetime AT TIME ZONE 'UTC' AT TIME ZONE 'Asia/Kolkata', 'YYYY-MM-DD HH24:MI:SS') AS "Time Down (IST)", TO_CHAR(t2.updatetime AT TIME ZONE 'UTC' AT TIME ZONE 'Asia/Kolkata', 'YYYY-MM-DD HH24:MI:SS') AS "Time Up (IST)", TO_CHAR(t2.updatetime - t1.updatetime, 'HH24:MI:SS') AS "Total Downtime", COALESCE(t2.rca, 'NA') AS "Reason" FROM bb_downtime_report t1 LEFT JOIN LATERAL (SELECT t2.updatetime, t2.rca FROM bb_downtime_report t2 WHERE t2.hostalias = t1.hostalias AND t2.servicestate = 'UP' AND t2.updatetime > t1.updatetime ORDER BY t2.updatetime ASC LIMIT 1) t2 ON TRUE WHERE t1.servicestate = 'DOWN' AND t1.hostalias = '{hostname}' AND t1.updatetime BETWEEN '{start_date} 00:00:00' AND '{end_date} 23:59:59' ORDER BY t1.updatetime;"""
        cursor.execute(query)
        rows = cursor.fetchall()
        if rows:
            return rows
        else:
            return False

    except Exception as e:
        print(str(e))
        return False


def get_outage_details(conn, hostname, start_date, end_date):
    try:
        """Get Device IP from Device Table"""
        cursor = conn.cursor()
        cursor.execute(f"""
            SELECT publicip from bb_device_details where systemname='{hostname}';
        """)
        rows = cursor.fetchone()
        if rows:
            publicip = rows[0]
        else:
            return False
        #print(publicip)
        cursor.execute(f"""
            SELECT 
            SUM(hours_utc) AS total_hours, 
            SUM(minutes_utc) AS total_minutes, 
            SUM(seconds_utc) AS total_seconds
        FROM 
            bb_outage_tracking 
        WHERE 
            hostaddress='{publicip}' 
            AND rca='Power Issue In the Location'
            AND reportingdate BETWEEN '{start_date}' AND '{end_date}';
        """)
        rows = cursor.fetchall()[0]
        hrs, mins, secs = rows
        output = convert_to_seconds(hrs,mins,secs)
        if output:
            cursor.close()
            return output
        else:
            cursor.close()
            return 0
    except Exception as e:
        print(str(e))


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
    #print(start_time)
    #print(end_time)
    # Convert to datetime objects
    start_dt = datetime.fromisoformat(start_time[:-1])
    end_dt = datetime.fromisoformat(end_time[:-1])
    #print(start_dt)
    #print(end_dt)
    # Convert to epoch time
    #print(start_dt)
    #print(end_dt)
    start_epoch = int(start_dt.timestamp())
    end_epoch = int(end_dt.timestamp())
    total_epoch = end_epoch - start_epoch
    final_data = []
    for hostname in reportdata['device'].split(','):
        Total_Outage = "No Outage"
        power_outage = None
        actual_downtime_duration = "No Outage"
        #print(hostname)
        try:
            power_outage = convert_seconds(0)
            output = get_report(hostname, start_epoch, end_epoch)
            outage = get_outage_details(conn,hostname, start_dt, end_dt)
            dt_details = get_downtime_details(conn,hostname, start_dt.date(), end_dt.date())
            if dt_details:
                #######################################################
                # Initialize counters for each cause of downtime
                total_downtime = timedelta()
                network_disconnect_downtime = timedelta()
                power_issue_downtime = timedelta()
                
                # Process the data
                for entry in dt_details:
                    # Extract duration and cause of downtime
                    duration_str = entry[4]
                    cause = entry[5]
                
                    # Convert the downtime duration to timedelta
                    duration = timedelta(hours=int(duration_str.split(':')[0]),
                                         minutes=int(duration_str.split(':')[1]),
                                         seconds=int(duration_str.split(':')[2]))
                
                    # Add to the total downtime
                    total_downtime += duration
                
                    # Add to the respective downtime cause
                    if "Network Disconnect" in cause:
                        network_disconnect_downtime += duration
                    elif "Power Issue" in cause:
                        power_issue_downtime += duration
                
                # Calculate Actual Downtime (Total Downtime - Power Issue Downtime)
                actual_downtime = total_downtime - power_issue_downtime
                
                # Convert total downtime to hours, minutes, and seconds
                total_hrs = total_downtime.seconds // 3600
                total_min = (total_downtime.seconds % 3600) // 60
                total_sec = total_downtime.seconds % 60

                Total_Outage = convert_to_seconds(total_hrs, total_min, total_sec)
                Total_Outage = convert_seconds(Total_Outage)
                
                ## Convert network disconnect downtime to hours, minutes, and seconds
                #network_hrs = network_disconnect_downtime.seconds // 3600
                #network_min = (network_disconnect_downtime.seconds % 3600) // 60
                #network_sec = network_disconnect_downtime.seconds % 60
                
                # Convert power issue downtime to hours, minutes, and seconds
                power_hrs = power_issue_downtime.seconds // 3600
                power_min = (power_issue_downtime.seconds % 3600) // 60
                power_sec = power_issue_downtime.seconds % 60
                power_outage = convert_to_seconds(power_hrs, power_min, power_sec)
                power_outage = convert_seconds(power_outage)
                
                # Convert actual downtime to hours, minutes, and seconds
                actual_hrs = actual_downtime.seconds // 3600
                actual_min = (actual_downtime.seconds % 3600) // 60
                actual_sec = actual_downtime.seconds % 60

                actual_downtime_duration = convert_to_seconds(actual_hrs, actual_min, actual_sec)
                actual_downtime_duration = convert_seconds(actual_downtime_duration)

                # Print the results
                print(f"Total Downtime: {total_hrs} hours, {total_min} minutes, {total_sec} seconds")
                #print(f"Downtime Due to Network Disconnect: {network_hrs} hours, {network_min} minutes, {network_sec} seconds")
                print(f"Downtime Due to Power Issue: {power_hrs} hours, {power_min} minutes, {power_sec} seconds")
                print(f"Actual Downtime (Total - Power Issue): {actual_hrs} hours, {actual_min} minutes, {actual_sec} seconds")
                #######################################################
            else:
                #need to all No Outage here.
                print("No Outage")
                pass
            if output.status_code == 200:
                avail_data = json.loads(output.text)
                time_down = avail_data['data']['host']['time_down'] + avail_data['data']['host']['time_unreachable'] + avail_data['data']['host']['time_indeterminate_nodata'] + avail_data['data']['host']['time_indeterminate_notrunning'] 
                #Total_Outage = convert_seconds(time_down)
                #print(Total_Outage)
                if outage:
                #    power_outage = convert_seconds(outage)
                #    #print(power_outage)
                    time_down = time_down - outage
                #    actual_downtime_duration = convert_seconds(time_down)
                #else:
                #    actual_downtime_duration = convert_seconds(time_down)

                Up = "{:.2f}".format(((total_epoch - time_down) / total_epoch) * 100)
                #print(Up)
                Down = "{:.2f}".format(100 - float(Up))
                #print(Down)
                final_data.append({"Hostname": hostname, "Total Outage Duration": Total_Outage, "Outage Due to Power": power_outage, "Actual Downtime Duration": actual_downtime_duration, "Total Uptime %": Up, "Total Downtime %": Down})
        except Exception as e:
            print(str(e))
            continue
    #print(final_data)
    fromdate = convert_utc_to_ist(start_dt)
    todate = convert_utc_to_ist(end_dt)
    change_report_status(conn, reportid, 'wip')
    create_pdf(final_data,"BB_Uptime_Report.pdf", fromdate, todate)
    for emailid in reportdata['email'].split(','):
        send_report(emailid, 'BB_Uptime_Report.pdf')
    change_report_status(conn, reportid, 'completed')


if __name__ == "__main__":
    main()
