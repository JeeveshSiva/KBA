const{ClientApplication}=require('./client')
let DealerClient=new ClientApplication()
DealerClient.generateAndSubmitTxn(
    "dealer",
    "Admin",
    "autochannel",
    "KBA-Automobile",
    "OrderContract",
    "queryTxn",
    "",
    "readOrder",
    "Order-02",
    
).then(message => {
    console.log(message.toString())
})