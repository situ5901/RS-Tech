import tkinter as tk
import time
import numpy as np
import cv2
import pyautogui
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.image import MIMEImage
from email.mime.text import MIMEText
import threading
import datetime

class StopWatch:
    def __init__(self):
        self.root = tk.Tk()
        self.root.title("RS-Tracker")
        self.root.configure(background="#050032")
        self.root.geometry("250x150")  # Set the main container size to 250x150

        self.label = tk.Label(text="00:00:00", font=("Helvetica", 18), bg="#050032", fg="white")  # Decrease font size to 18
        self.label.pack()

        self.date_label = tk.Label(text="", font=("Helvetica", 12), bg="#050032", fg="white")  # Decrease font size to 12
        self.date_label.pack()

        self.time_label = tk.Label(text="", font=("Helvetica", 10), bg="#050032", fg="white")  # Create a label to display the time
        self.time_label.pack()

        self.screenshot_label = tk.Label(text="Screenshots: 0", font=("Helvetica", 10), bg="#050032", fg="white")  # Create a label to display the number of screenshots
        self.screenshot_label.pack()

        self.update_date()
        self.update_time()

        self.seconds = 0
        self.running = False
        self.button = tk.Button(self.root, text="Start", command=self.start, font=("Helvetica", 12))  # Decrease font size to 12
        self.button.pack()

        self.update_timer()
        self.counter = 0
        self.start_time = time.time()
        self.root.mainloop()

    def update_date(self):
        current_date = datetime.datetime.now().strftime("%d-%m-%Y")
        self.date_label.config(text=current_date)
        self.root.after(1000, self.update_date)

    def update_time(self):
        current_time = datetime.datetime.now().strftime("%H:%M:%S")
        self.time_label.config(text=current_time)
        self.root.after(1000, self.update_time)

    def start(self):
        if not self.running:
            self.running = True
            self.button.config(text="Stop")
        else:
            self.running = False
            self.button.config(text="Start")

    def update_timer(self):
        if self.running:
            self.label.config(text=time.strftime("%H:%M:%S", time.gmtime(self.seconds)))
            self.seconds += 1
            if self.seconds % 6 == 0:
                image = pyautogui.screenshot()
                image = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)
                threading.Thread(target=self.send_screenshot, args=(image,)).start()
                self.counter += 1
                self.screenshot_label.config(text=f"Screenshots: {self.counter}")  # Update the screenshot label
        self.root.after(1000, self.update_timer)

    def send_screenshot(self, image):
        # Gmail account credentials
        sender_email = "er.situkumar@gmail.com"
        sender_password = "metc ljwd wqqy wcgl"
        recipient_email = "situdancer9@gmail.com"

        # Create a text message
        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = recipient_email
        msg['Subject'] = "Screenshot from RS-Tracker"

        # Attach the screenshot
        img_data = cv2.imencode('.png', image)[1].tobytes()
        image = MIMEImage(img_data, name='screenshot.png')
        msg.attach(image)

        # Send the email
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(sender_email, sender_password)
        server.sendmail(sender_email, recipient_email, msg.as_string())
        server.quit()
        print("Screenshot sent!")

if __name__ == "__main__":
    StopWatch()