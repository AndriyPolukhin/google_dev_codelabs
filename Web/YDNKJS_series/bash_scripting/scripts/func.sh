#!/bin/bash

function get_info
{
echo "Please enter your name:"
read name
echo "Please enter your age:"
read age
echo "Please enter your email:"
read email

echo "Hello $name, what have you been doing till $age, write me a short esse to $email"
}

echo "The function will now run ..."
get_info
