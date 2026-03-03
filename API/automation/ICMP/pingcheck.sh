#!/bin/bash
while IFS= read -r line; do
   ping -c4 -W1 -s 64 $line >> /dev/null && echo "$line is up" || echo "$line is down" >> ping_results.log
done < newdevices.csv
