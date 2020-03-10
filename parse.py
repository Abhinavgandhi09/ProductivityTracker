#!/usr/bin/python

from os.path import expanduser
import re
import json
import urllib2

def main():
    filepath = expanduser("~") + "/.catkin_time"

    fileData = open(filepath).read()

    time = re.search('real\t(\d+)m(\d+\.\d+)s', fileData)
    date = re.search('DATE:\n(.+)', fileData)
    host = re.search('HOST:\n(.+)', fileData)
    secondsWasted = float(time.group(1)) + float(time.group(2))

    data = json.dumps({"host": host.group(1), "time": secondsWasted, "date": date.group(1), "error_flag": False, "package_count": 0})
    print(data)
    secondsWasted = float(time.group(1)) + float(time.group(2))
    print(secondsWasted)
    print(date.group(1))
    print(host.group(1))

    req = urllib2.Request('http://130.215.12.27:3000/api/user_data')
    req.add_header('Content-Type', 'application/json')
    response = urllib2.urlopen(req, data)

if __name__ == "__main__":
    main()
