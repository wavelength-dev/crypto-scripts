#!/bin/bash

curl -s "https://api.etherscan.io/api?module=contract&action=getabi&address=$2&apikey=XRZNZRYTP6RESXXUVI1J7KWE9PCU8Y7Q9M" | jq ".result | fromjson" > $1
