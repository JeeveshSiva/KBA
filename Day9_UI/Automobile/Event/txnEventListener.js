const { EventListener } = require('./events')

let ManufacturerEvent = new EventListener();
ManufacturerEvent.txnEventListener("manufacturer", "User1", "autochannel",
    "KBA-Automobile", "CarContract", "createCar",
    "Car-11", "Hatchbachn", "Nexon", "White", "26/04,2023", "Manufacturer 2");

