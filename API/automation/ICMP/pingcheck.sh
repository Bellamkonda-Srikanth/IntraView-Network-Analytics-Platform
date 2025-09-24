while IFS= read -r line; do
   ping -c2 -W1 $line >> /dev/null && echo "$line is up" || echo "$line is down"
done < newdevices.csv
