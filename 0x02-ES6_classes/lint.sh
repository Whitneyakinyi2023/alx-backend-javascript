#!/bin/bash

# Check if a filename was provided as an argument
if [ -z "$1" ]; then
  echo "Usage: $0 <filename>"
  exit 1
fi

# Run the lint command for the provided filename
npm run lint "$1"
