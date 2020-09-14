#!/bin/bash

clear

echo "Please enter a number"
read a1

echo "Please enter another number"
read a2


if [ $a1 -gt $a2 ]; then
	echo "The first number is bigger"
elif [ $a1 -lt $a2 ]; then
	echo "The first number is smaller"
else
	echo "The numbers are equal"
fi
