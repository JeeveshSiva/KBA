# KBA_CHF_NPCI_B5

Elearning course link: https://elearning.kba.ai/courses/course-v1:KBA+CHFSP2V3+2021_T4/course/

Hyperledger Fabric readthedocs: https://hyperledger-fabric.readthedocs.io/en/release-2.2/

Fabric samples: https://github.com/hyperledger/fabric-samples

**Day 9: UI**

**Install express generator**

`sudo npm install -g express-generator`

`express --help`

`cd Automobile`

`express --view=hbs UI`

`cd UI`

`npm install`

`npm start`

http://localhost:3000/


**Edit client.js**

`return Promise.resolve(result)`

`return Promise.reject(error);`

**Day 9: Api**

`npm i express`

`npm init`

`npm i joi`

` sudo npm i -g nodemon`

`node sample`

`curl -X PUT "http://localhost:3000/h"`

`snap install postman`

**Day 9:Event**

 In Event Terminal

 `npm init`

 `npm install fabric-network@2.2.8`

 change in chaincode in createCar above putstate

	let addCarEventData = { Type: 'Car creation', Model: model }
  
  await ctx.stub.setEvent('addCarEvent', Buffer.from(JSON.stringify(addCarEventData)));

**Day 8: Client** 

In Client Folder Terminal

`npm init`

`npm install fabric-network@2.2.8`

`npm install fabric-ca-client@2.2.4`

In Network Folder Terminal

`sudo chmod -R 777 vars/`

**Day 4: Chaincode**

**To view explorer**

`minifab explorerup`

userid: exploreradmin

password: exploreradminpw

`minifab explorerdown`

**To view couchdb**

http://localhost:7006/_utils/

 userid: admin
 
 password: adminpw

**Create Sample Chaincode**

`npm init -y`

`npm i fabric-contract-api@2.2.3`

`npm i fabric-shim@2.2.3`

`"start": "fabric-chaincode-node start"`

**PDC - collections.json**

```
[
  {
    "name": "CollectionOrder",
    "policy": "OR('manufacturer-auto-com.member', 'dealer-auto-com.member')",
    "requiredPeerCount": 1,
    "maxPeerCount": 1,
    "blockToLive": 1000000,
    "memberOnlyRead": true
  }
]
```

**Inputs**

```
{
  "arg0": "Car01",
  "arg1": "Tata",
  "arg2": "Tiago",
  "arg3": "White",
  "arg4": "22/09/2022",
  "arg5": "F-01"
}
```


```
{
  "make": "Tata",
  "model": "Tiago",
  "color": "White",
  "dealerName": "Dealer-1"
}
```


**Minifab commands to deploy and invoke chaincode**

**Note**: Execute the following commands from **Network** folder

`./startNetwork.sh`

`sudo chmod -R 777 vars/`

`mkdir -p vars/chaincode/KBA-Automobile/node`

`cp -r ../Chaincode/KBA-Automobile/* vars/chaincode/KBA-Automobile/node/`

`cp vars/chaincode/KBA-Automobile/node/collections.json ./vars/KBA-Automobile_collection_config.json`

`minifab ccup -n KBA-Automobile -l node -v 3.0 -d false -r true`

`minifab invoke -n KBA-Automobile -p '"createCar","car01","Tata","Tiago","White","22/03/2023","F-01"'`

`minifab query -n KBA-Automobile -p '"readCar","car01"'`

```
MAKE=$(echo -n "Tata" | base64 | tr -d \\n)
MODEL=$(echo -n "Tiago" | base64 | tr -d \\n)
COLOR=$(echo -n "White" | base64 | tr -d \\n)
DEALER_NAME=$(echo -n "XXX" | base64 | tr -d \\n)
```

`minifab invoke -n KBA-Automobile -p '"OrderContract:createOrder","ord01"' -t '{"make":"'$MAKE'","model":"'$MODEL'","color":"'$COLOR'","dealerName":"'$DEALER_NAME'"}' -o dealer.auto.com`

`minifab query -n KBA-Automobile -p '"OrderContract:readOrder","ord01"'`


`minifab query -n KBA-Automobile -p '"queryAllCars"'`

`minifab query -n KBA-Automobile -p '"OrderContract:queryAllOrders"'`

`minifab query -n KBA-Automobile -p '"getCarHistory","car01"'`

`minifab query -n KBA-Automobile -p '"getCarsWithPagination","10",""'`

`minifab query -n KBA-Automobile -p '"checkMatchingOrders","car01"'`

`minifab invoke -n KBA-Automobile -p '"matchOrder","car01","ord01"'`

`minifab invoke -n KBA-Automobile -p '"registerCar","car01","Bob","KL-01-XXXX"' -o mvd.auto.com`


**Day 3: Minifabric**

https://github.com/hyperledger-labs/minifabric

https://github.com/hyperledger-labs/minifabric/blob/main/docs/README.md

https://github.com/hyperledger-labs/minifabric/blob/main/spec.yaml


**Bring up the network**

```
minifab netup -s couchdb -e true -i 2.2.2 -o manufacturer.auto.com
```
```
minifab create -c autochannel
```
```
minifab join -c autochannel
```
```
minifab anchorupdate
```
```
minifab profilegen -c autochannel
```
**To view the containers**

```
docker ps -a
```
**Bring down the network**

```
minifab cleanup
```

**Using script**

```
chmod +x startNetwork.sh
```
```
./startNetwork.sh
```
**To remove the containers**
```
docker container prune
```
```
docker system prune
```
```
docker volume prune
```
```
docker network prune
```
**To check for containers**

`docker ps -a`

**To forcefully remove containers**

`docker rm $(docker container ls -q) --force`

**To check for volumes**

`docker volume ls`

**To delete the volumes**

`docker volume rm $(docker volume ls -q)`

**To delete vars folder**
```
sudo rm -rf vars
```
**To view the details of a block**

`minifab blockquery`

`minifab blockquery -b 6`


**To view blockchain**

`docker exec -it peer1.mvd.auto.com /bin/sh`

`ls var/hyperledger/production/ledgersData/chains/chains/autochannel/`

`cat var/hyperledger/production/ledgersData/chains/chains/autochannel/blockfile_000000`

`exit`



**Deploy chaincode using minifab**

`./startNetwork.sh`

`sudo chmod -R 777 vars/`

`mkdir -p vars/chaincode/KBA-Automobile/node`

`cp -r ../Chaincode/KBA-Automobile/* vars/chaincode/KBA-Automobile/node/`

`minifab ccup -n KBA-Automobile -l node -v 1.0 -d false`

`minifab invoke -n KBA-Automobile -p '"createCar","car01","Tiago"'`

`minifab query -n KBA-Automobile -p '"readCar","car01"'`

//Update the chaincode

`cp -r ../Chaincode/KBA-Automobile/* vars/chaincode/KBA-Automobile/node/`

`minifab ccup -n KBA-Automobile -l node -v 2.0 -d false`

`minifab invoke -n KBA-Automobile -p '"createCar","car02","BMW"'`

`minifab query -n KBA-Automobile -p '"readCar","car02"'`

`minifab down`

`minifab restart`

`minifab query -n KBA-Automobile -p '"readCar","car02"'`


**Day2**

**Raft**

http://thesecretlivesofdata.com/raft/

**Download fabric-samples**

`curl -sSL https://bit.ly/2ysbOFE | bash -s -- 2.2.2 1.4.9`

`sudo cp fabric-samples/bin/* /usr/local/bin`

**Test-network commands**

`cd fabric-samples/test-network/`

`./network.sh -h`

`./network.sh up createChannel`

`docker ps -a`

`./network.sh deployCC -ccn basic -ccp ../asset-transfer-basic/chaincode-javascript/ -ccl javascript`

`export FABRIC_CFG_PATH=$PWD/../config/`

`export CORE_PEER_TLS_ENABLED=true`

`export CORE_PEER_LOCALMSPID="Org1MSP"`

`export CORE_PEER_TLS_ROOTCERT_FILE=${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt`

`export CORE_PEER_MSPCONFIGPATH=${PWD}/organizations/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp`

`export CORE_PEER_ADDRESS=localhost:7051`

`peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile "${PWD}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem" -C mychannel -n basic --peerAddresses localhost:7051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt" --peerAddresses localhost:9051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt" -c '{"function":"InitLedger","Args":[]}'`

`peer chaincode query -C mychannel -n basic -c '{"Args":["GetAllAssets"]}'`

`./network.sh down`

**Day1:Docker**

`docker build -t image1:1.0 .`

`docker run image1:1.0`

`docker-compose up -d`

`docker-compose config`

http://localhost:3000/_utils

Volume Mapping

`sudo chmod -R 777 samplefolder`

`docker ps -a`

`docker exec -it <container ID> bash`

`ls /hyperledger/fabric/newfolder`

`cat /hyperledger/fabric/newfolder/<file_name>`

`docker-compose down`

**To remove the containers**

`docker rm $(docker container ls -q) --force`

`docker container prune`

`docker system prune`

`docker volume prune --filter all=1`

`docker network prune`

**Day1: Install Dependencies**

`sudo apt install git`

`chmod +x installDependencies.sh`

`./installDependencies.sh`

Reboot 

`./installDependencies.sh bin`

To install VScode, download the .deb file for Ubuntu from [here](https://code.visualstudio.com/download).

`sudo dpkg -i <file_name>`

Download IBM Blockchain Extension from [here](https://gitlab.com/CHF_KBA/kba_chf_ibmblockchainplatformextension_vscode/-/raw/main/ibm-blockchain-platform-2.0.8.vsix?inline=false)



