#!/usr/bin/bash

TIMEFORMAT=%R
sleep 20

T="$(date +%s%N)"
eval "$@"
T="$(($(date +%s%N)-T))"
T=$((T/1000000))
echo "$@;${T};"