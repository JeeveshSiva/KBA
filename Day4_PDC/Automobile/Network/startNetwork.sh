#!/bin/sh

echo "Start the network"
minifab netup -s couchdb -e true -i 2.2.2 -o manufacturer.auto.com

sleep 5

echo "Create the channel"
minifab create -c autochannel

sleep 2

echo "Join the peers to channel"
minifab join -c autochannel

sleep 2

echo "Anchor update"
minifab anchorupdate

sleep 2

echo "Generate the required profiles"
minifab profilegen -c autochannel


