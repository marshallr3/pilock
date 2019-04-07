import RPi.GPIO as GPIO
import time
import sys

GPIO.setmode(GPIO.BCM)
pin = 18
GPIO.setup(pin, GPIO.OUT)

p = GPIO.PWM(pin, 50)
print(sys.argv[1])

p.start(7.5)

try:
    p.ChangeDutyCycle(float(sys.argv[1]))  # turn towards 90 degree
    time.sleep(1)
except KeyboardInterrupt:
    p.stop()
    GPIO.cleanup()
