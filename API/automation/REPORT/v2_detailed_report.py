from bs4 import BeautifulSoup
import json
import requests
import sys
from reportlab.lib.pagesizes import A4, letter, landscape
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Spacer, Paragraph, Image
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from datetime import datetime, timedelta
import psycopg2
import matplotlib.pyplot as plt
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders
import os

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
    message["Subject"] = "Device Downtime Report"
    body = """
    Hi,<br>
    <br>
    <p>Please find the Downtime Report Attached as per your Request.<br>
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

def get_downtime_information(conn, systemname, start_date, end_date):
    """Fetches the Detail downtime information"""
    cursor = conn.cursor()
    query=f"""SELECT t1.hostalias AS "Link Name", t1.hostaddress AS "Link Address", TO_CHAR(t1.updatetime AT TIME ZONE 'UTC' AT TIME ZONE 'Asia/Kolkata', 'YYYY-MM-DD HH24:MI:SS') AS "Time Down (IST)", TO_CHAR(t2.updatetime AT TIME ZONE 'UTC' AT TIME ZONE 'Asia/Kolkata', 'YYYY-MM-DD HH24:MI:SS') AS "Time Up (IST)", TO_CHAR(t2.updatetime - t1.updatetime, 'HH24:MI:SS') AS "Total Downtime", COALESCE(t2.rca, 'NA') AS "Reason" FROM bb_downtime_report t1 LEFT JOIN LATERAL (SELECT t2.updatetime, t2.rca FROM bb_downtime_report t2 WHERE t2.hostalias = t1.hostalias AND t2.servicestate = 'UP' AND t2.updatetime > t1.updatetime ORDER BY t2.updatetime ASC LIMIT 1) t2 ON TRUE WHERE t1.servicestate = 'DOWN' AND t1.hostalias = '{systemname}' AND t1.updatetime BETWEEN '{start_date} 00:00:00' AND '{end_date} 23:59:59' ORDER BY t1.updatetime;"""

    #query=f"""SELECT t1.hostalias AS "Link Name", t1.hostaddress AS "Link Address", TO_CHAR((t1.updatetime AT TIME ZONE 'UTC' AT TIME ZONE 'Asia/Kolkata'), 'YYYY-MM-DD HH24:MI:SS') AS "Time Down (IST)", TO_CHAR((MIN(t2.updatetime) AT TIME ZONE 'UTC' AT TIME ZONE 'Asia/Kolkata'), 'YYYY-MM-DD HH24:MI:SS') AS "Time Up (IST)", TO_CHAR(MIN(t2.updatetime) - t1.updatetime, 'HH24:MI:SS') AS "Total Downtime", COALESCE(t2.rca, 'NA') AS "Reason" FROM bb_downtime_report t1 LEFT JOIN bb_downtime_report t2 ON t1.hostalias = t2.hostalias AND t2.servicestate = 'UP' AND t2.updatetime > t1.updatetime WHERE t1.servicestate = 'DOWN' AND t1.hostalias = '{systemname}' AND t1.updatetime BETWEEN '{start_date}' AND '{end_date} 23:59:00' GROUP BY t1.hostalias, t1.hostaddress, t1.updatetime, t2.rca ORDER BY t1.updatetime;"""
    cursor.execute(query)
    rows = cursor.fetchall()
    cursor.close()
    return rows


def get_report_details(conn):
    """Fetches device IPs and communities from the bb_device_details table"""
    cursor = conn.cursor()
    cursor.execute(f"""
        SELECT reportid, reportdata, status FROM bb_report_details where status='new' and reporttype='3' order by reportid asc limit 1;
    """)
    rows = cursor.fetchall()
    cursor.close()
    return rows


def generate_pie_chart(availability_data, output_file):
    #print(availability_data)
    # Count UP/DOWN occurrences
    up_count = availability_data['UP'][0]['% Total Time'].split('%')[0]
    down_count = availability_data['DOWN'][0]['% Total Time'].split('%')[0]

    # Pie chart data
    labels = ['UP', 'DOWN']
    sizes = [up_count, down_count]
    colors = ['#4CAF50', '#FF6347']  # Green for UP, Red for DOWN

    # Plot pie chart
    plt.figure(figsize=(2, 2))
    plt.pie(sizes, labels=labels, colors=colors, autopct='%1.1f%%', startangle=140)
    plt.axis('equal')  # Equal aspect ratio ensures that pie chart is drawn as a circle.
    plt.savefig(output_file)
    plt.close()


def generate_pdf(data, hostname, start_date, end_date, pdf_filename, dt_info):
    logo_url = 'https://www.bitsandbyte.net/logo.jpg'
    doc = SimpleDocTemplate(pdf_filename, pagesize=landscape(letter))
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
    title = Paragraph("Device Detailed Downtime Report", styles['Title'])
    elements.append(title)
    elements.append(Spacer(1, 12))
    # Add report generated on
    current_datetime = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    report_generated_on = Paragraph(f"Report generated on: {current_datetime}", centered_style)
    elements.append(report_generated_on)
    elements.append(Spacer(1, 12))
    elements.append(Spacer(1, 12))
    elements.append(Spacer(1, 12))
    report_generated_from = Paragraph(f"From Date: {start_date}   To Date: {end_date}", centered_style)
    elements.append(report_generated_from)
    elements.append(Spacer(1, 20))

    # Pie Chart for UP/DOWN Percentage
    pie_chart_path = "availability_pie_chart.png"
    generate_pie_chart(data["Availability Information"], pie_chart_path)
    elements.append(Image(pie_chart_path, width=3 * inch, height=3 * inch))
    elements.append(Spacer(1, 0.3 * inch))
    elements.append(Spacer(1, 20))
    elements.append(Spacer(1, 20))

    # Table of Host Log Entries (excluding 'Message')
    table_data = [['Link Name', 'Link Address', 'Time Down (IST)', 'Time UP (IST)', 'Total Downtime', 'Probable Reason']]
    for entry in dt_info:
        table_data.append([entry[0], entry[1], entry[2], entry[3], entry[4], entry[5]])   

    # Table Styling
    #table = Table(table_data, colWidths=[2 * inch, 2 * inch, 1.5 * inch])
    table = Table(table_data)
    table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.grey),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 12),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 8),
        ('BACKGROUND', (0, 1), (-1, -1), colors.beige),
        ('GRID', (0, 0), (-1, -1), 1, colors.black)
    ]))

    for row_index in range(1, len(table_data)):
        table.setStyle(TableStyle([
            ('BACKGROUND', (3, row_index), (3, row_index), colors.green),
            ('TEXTCOLOR', (3, row_index), (3, row_index), colors.whitesmoke),
            ('BACKGROUND', (2, row_index), (2, row_index), colors.red),
            ('TEXTCOLOR', (2, row_index), (2, row_index), colors.whitesmoke),
        ]))

    elements.append(table)

    # Build PDF
    doc.build(elements)


def parse_html(html):
    # Parse HTML
    soup = BeautifulSoup(html, 'html.parser')
    
    # Extract Host Availability Info
    availability_info = {}
    for row in soup.select("table.data tr")[1:]:  # Skip header row
        cells = row.find_all('td')
        if len(cells) >= 5:
            state = cells[0].get_text(strip=True)
            type_reason = cells[1].get_text(strip=True)
            time_duration = cells[2].get_text(strip=True)
            percent_total_time = cells[3].get_text(strip=True)
            percent_known_time = cells[4].get_text(strip=True)
    
            if state not in availability_info:
                availability_info[state] = []
    
            availability_info[state].append({
                'Type / Reason': type_reason,
                'Time': time_duration,
                '% Total Time': percent_total_time,
                '% Known Time': percent_known_time
            })
    
    # Extract Host Log Entries Info
    log_entries = []
    log_table = soup.find('table', {'class': 'logEntries'})
    if log_table:
        for row in log_table.find_all('tr')[1:]:  # Skip header row
            cells = row.find_all('td')
            if len(cells) >= 4:
                log_entries.append({
                    'Event Start Time': cells[0].get_text(strip=True),
                    'Event End Time': cells[1].get_text(strip=True),
                    'Event Type': cells[2].get_text(strip=True),
                    'Message': cells[3].get_text(strip=True)
                })
    
    # Prepare Results
    output = {
        "Availability Information": {
            state: details for state, details in availability_info.items() if state in ["UP", "DOWN"]
        },
        "Host Log Entries": [
            {
                "Event Start Time": entry["Event Start Time"],
                "Event End Time": entry["Event End Time"],
                "Event Type": entry["Event Type"],
                "Message": entry["Message"]
            }
            for entry in log_entries if entry['Message'] == 'HOST DOWN (HARD)'
        ]
    }
    
    # Output in JSON format
    return output

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

    hostname = reportdata['device']
    # Timestamps to convert
    start_time = reportdata['start']
    end_time = reportdata['end']
    #print(start_time)
    #print(end_time)
    # Convert to datetime objects
    sdt = datetime.strptime(start_time, "%Y-%m-%dT%H:%M:%S.%fZ")
    # Extract only the date
    start_date_only = sdt.date()

    edt = datetime.strptime(end_time, "%Y-%m-%dT%H:%M:%S.%fZ")
    # Extract only the date
    end_date_only = edt.date()

    #print(start_date_only)
    #print(end_date_only)

    #Get Detailed Downtime Information
    dt_info = get_downtime_information(conn,hostname,start_date_only,end_date_only)
    print(dt_info)

    start_dt = datetime.fromisoformat(start_time[:-1])
    end_dt = datetime.fromisoformat(end_time[:-1])
    #print(start_dt)
    #print(end_dt)
    # Convert to epoch time
    start_epoch = int(start_dt.timestamp())
    end_epoch = int(end_dt.timestamp())
    total_epoch = end_epoch - start_epoch
    final_data = []
    #print(start_epoch)
    #print(end_epoch)
    #print(reportdata['device'])

    URL = f"http://10.160.3.7:81/nagios/cgi-bin/avail.cgi?show_log_entries=&t1={start_epoch}&t2={end_epoch}&timeperiod=custom&host={hostname}&rpttimeperiod=24x7&backtrack=0"
    #print(URL)
    try:
        response = requests.get(URL, auth=('nagiosadmin', 'nagiosadmin'))
        response.raise_for_status()  # Check if request was successful
        html_content = response.text
        json_output = parse_html(html_content)
        #print(json.dumps(json_output, indent=4))
        # Generate PDF
        pdf_filename = f"BB_Link_Downtime_Report.pdf"
        fromdate = convert_utc_to_ist(start_dt)
        todate = convert_utc_to_ist(end_dt)
        generate_pdf(json_output, hostname, fromdate, todate, pdf_filename, dt_info)
        for emailid in reportdata['email'].split(','):
            if (os.path.isfile('BB_Link_Downtime_Report.pdf')):
                send_report(emailid, 'BB_Link_Downtime_Report.pdf')
        change_report_status(conn, reportid, 'completed')
        print(f"Report generated: {pdf_filename}")
    except requests.exceptions.RequestException as e:
        print(f"Error fetching data: {e}")

# Main Script Execution
if __name__ == "__main__":
    main()
