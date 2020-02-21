sudo ln -s "$(pwd)/parse.py" "/usr/local/bin/parse_catkin_time"
chmod +x "$(pwd)/parse.py"
echo "alias \"c={ time catkin_make ; } 2>&1 | tee ~/.catkin_time && { echo \\\"DATE:\\\" ; date ; } >> ~/.catkin_time && { echo \\\"HOST:\\\" ; hostname ; } >> ~/.catkin_time\"" >> ~/.bashrc
