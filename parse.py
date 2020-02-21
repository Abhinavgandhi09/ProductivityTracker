#!/usr/bin/python

from os.path import expanduser
import re

def main():
    filepath = expanduser("~") + "/.catkin_time"

    fileData = open(filepath).read()

    time = re.search('real\t(\d+)m(\d+\.\d+)s', fileData)
    date = re.search('DATE:\n(.+)', fileData)
    host = re.search('HOST:\n(.+)', fileData)

    secondsWasted = float(time.group(1)) + float(time.group(2))
    print(secondsWasted)
    print(date.group(1))
    print(host.group(1))

if __name__ == "__main__":
    main()
