#!/bin/bash

if [ "$1" = "-y" ]; then
	echo "YES"
elif [ "$1" = "-n" ]; then
	echo "NO"
else
	echo "There should be -y or -n"
fi
