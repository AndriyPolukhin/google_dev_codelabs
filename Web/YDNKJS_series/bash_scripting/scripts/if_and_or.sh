#!/bin/bash

clear

echo "Please enter a name"
read a

echo "Please enter another name"
read b

if [ "$a" = "Andriy" ] && [ "$b" = "Andriy" ]; then
	echo "Both names are $a"
elif [ "$a" = "Anastasia" ] || [ "$b" = "Anastasia" ]; then
	echo "one of the names is Anastasia"
else
	echo "no conditions found"
fi

