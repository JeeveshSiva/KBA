const{ClientApplication}=require('./client')
let ManufacturerClient=new ClientApplication()
ManufacturerClient.generateAndSubmitTxn(
    "manufacturer",
    "Admin",
    "autochannel",
    "KBA-Automobile",
    "CarContract",
    "invokeTxn",
    "",
    "createCar",
    "Car-02",
    "Hatchback",
    "Nexon",
    "White",
    "22/03/22",
    "Manufacturer 2"
).then(message => {
    console.log(message.toString())
})


