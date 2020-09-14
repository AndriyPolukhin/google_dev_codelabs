#!/bin/bash

#defining a function to get the ip address
function get_ip
{

ip=`ifconfig | grep "inet addr" | head -n 1 | cut -d ":" -f 2 | cut -d " " -f 1`
echo $ip

}
:
#defining a function to get the system time
function get_time
{
	time=`date | cut -d " " -f 4`
	echo $time
}


# defining a function to get the hostname and logged in user
function get_who
{
	host=`hostname`
	user=`who | cut -d " " -f 1`
	echo $user "-" $host
}

# script begins here with while loop for menu selection
n=1
while n=1; do
	echo "Please choose an option."
	echo "1) IP Address"
	echo "2) System Time"
	echo "3) Username - Hostname"
	echo "4) Quit"
	echo "#?"
	read input

	if [ "$input" = "1" ]; then
		clear
		get_ip; echo
	elif [ "$input" = "2" ]; then
		clear
		get_time; echo 
	elif [ "$input" = "3" ]; then
		clear
		get_who; echo
	elif [ "$input" = "4" ]; then
		clear
		echo "Exiting..."
		exit
	else
		clear
		echo "Invalid - Please Try Again"; echo
	fi
done
