var express = require('express');
var router = express.Router();
const { ClientApplication } = require('../../Client/client')
let ManufacturerClient = new ClientApplication();


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'KBA-Automobile', dashboard: 'Manufacturer Dashboard' });
});

router.post('/createCar', function (req, res) {

  const carId = req.body.CarId;
  const make = req.body.CarMake;
  const model = req.body.CarModel;
  const color = req.body.CarColor;
  const dom = req.body.DOM;
  const manufacturer = req.body.ManufacturerName;

  ManufacturerClient.generateAndSubmitTxn(
    "manufacturer",
    "Admin",
    "autochannel",
    "KBA-Automobile",
    "CarContract",
    "invokeTxn",
    "",
    "createCar",
    carId, make, model, color, dom, manufacturer
  )
    .then(message => {
      console.log("Message is ", message)
      res.status(200).send({ message: "Added Car" })
    }
    )
    .catch(error => {
      console.log("Some error Occured: ", error)
      res.status(500).send({ error: `Failed to Add`, message: `${error}` })
    });
});

router.post('/readCar', async function (req, res) {
  const readCarId = req.body.CarId;

  ManufacturerClient.generateAndSubmitTxn(
    "manufacturer",
    "Admin",
    "autochannel",
    "KBA-Automobile",
    "CarContract",
    "queryTxn",
    "",
    "readCar",
    readCarId
  ).then(message => {
    console.log(message.toString());

    res.status(200).send({ Cardata: message.toString() });
  }).catch(error => {

    res.status(500).send({ error: `Failed to Read`, message: `${error}` })
  });

})


module.exports = router;
