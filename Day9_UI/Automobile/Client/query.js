const{ClientApplication}=require('./client')
let ManufacturerClient=new ClientApplication()
ManufacturerClient.generateAndSubmitTxn(
    "manufacturer",
    "Admin",
    "autochannel",
    "KBA-Automobile",
    "CarContract",
    "queryTxn",
    "",
    "readCar",
    "Car-02",
    
).then(message => {
    console.log(message.toString())
})
