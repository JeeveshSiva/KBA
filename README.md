# KBA_CHF_NPCI_B5

Elearning course link: https://elearning.kba.ai/courses/course-v1:KBA+CHFSP2V3+2021_T4/course/

Hyperledger Fabric readthedocs: https://hyperledger-fabric.readthedocs.io/en/release-2.2/

Fabric samples: https://github.com/hyperledger/fabric-samples

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



