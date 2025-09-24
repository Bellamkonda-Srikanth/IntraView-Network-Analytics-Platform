while IFS= read -r line; do
   snmpget -c 'public' -v 2c  -r 1 -t 3 $line sysName.0
   #snmpget -c 'Gl0b@lb!t$&8YT3VN0c' -v 2c  -r 1 -t 3 $line sysName.0
done < newdevices.csv
