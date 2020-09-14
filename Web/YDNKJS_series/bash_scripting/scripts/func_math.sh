#!/bin/bash

function sqr
{
  echo $(( $1 * $1 ))

}

echo "Please enter a number..."
read num

sqr num
