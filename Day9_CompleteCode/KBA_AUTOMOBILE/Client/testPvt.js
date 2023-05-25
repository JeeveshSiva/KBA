const{ClientApplication}=require('./client')
let DealerClient=new ClientApplication()
const transientData={
    make:Buffer.from("Hatchback"),
    model:Buffer.from("Nexon"),
    color:Buffer.from("White"),
    dealerName:Buffer.from("Dealer 2")
}
DealerClient.generateAndSubmitTxn(
    "dealer",
    "Admin",
    "autochannel",
    "KBA-Automobile",
    "OrderContract",
    "privateTxn",
    transientData,
    "createOrder",
    "Order-02",
    
    
).then(message => {
    console.log(message.toString())})