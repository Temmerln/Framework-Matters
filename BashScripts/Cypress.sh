#on raspberry pi use /usr/bin/bash, on mac use /bin/bash
#!usr/bin/bash

TIMEFORMAT=%R 
LOGFILE=runtime.log

benchcmd() {
#to measure the temperature of the pi
echo "temp_before = $(vcgencmd measure_temp)" >> LOGFILE

echo "begin test"
echo "start test [$(date)]" >> LOGFILE
T="$(date +%s%N)"
#npx cypress run --spec "/cypress/e2e/action1.cy.js"
npx cypress run $1 --browser chromium

T="$(($(date +%s%N)-T))"
T=$((T/1000000))
echo "duration of test ${T}" >> LOGFILE
echo "end test [$(date)]" >> LOGFILE
echo "end test"
echo "temp_after = $(vcgencmd measure_temp)" >> LOGFILE
#Time between each iteration
sleep 60
}

run_files() {
#this is our spike test, essentially recursively finding and printing the first 10000 fibonaci numbers (only 700 ish values that is not inf)
    sleep 30
    echo "temp_fib_start = $(vcgencmd measure_temp)" >> LOGFILE
    echo "open fibonacci file"
    echo "start fibonacci [$(date)]" >> LOGFILE
    T="$(date +%s%N)"
    node Fibonacci.js
    T="$(($(date +%s%N)-T))"
    T=$((T/1000000))
    echo "duration of test ${T}" >> LOGFILE
    echo "end fibonacci [$(date)]" >> LOGFILE
    echo "temp_fib_end = $(vcgencmd measure_temp)" >> LOGFILE
    sleep 120
    #for each file in directory ($1 is argument when function is called)
    for file in $1
    do
        #print which action test will run now ($file converts file to a variable)
        echo "$file" >> LOGFILE

        #run action test 35 times
        for j1 in 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35
        do  
            #print which run is starting now: Run 1; Run 2; etc
            echo "$file; Run $j1; " >> LOGFILE

            #call benchmark function, give file as argument
            benchcmd $file
        done
        echo "$file finished"
        sync
        sleep 300
    done
}

#stop services
sudo apt remove unattended-upgrades
sudo rfkill block 0 1

run_files "./CypressEC/e2e/*"

#restart services
sudo rfkill unblock 0 1
