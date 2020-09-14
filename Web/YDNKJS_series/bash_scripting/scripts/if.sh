#!/bin/bash

a=2
b=3

echo "Is " $a " greater than " $b "?"

if [ $a -gt $b ]; then
	echo "$a is greater than $b"
elif [ $a -lt $b ]; then
	echo "$a is less than $b"
else
	echo "The numbers are equal"
fi
