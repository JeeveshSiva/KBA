function addData(event) {
    event.preventDefault();
    console.log("addData Function")
    const carId = document.getElementById('carId').value;
    const make = document.getElementById('make').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const dom = document.getElementById('dom').value;
    const manufacturer = document.getElementById('manufacturer').value;
    console.log(carId + make + model + color + dom + manufacturer);
    if (carId.length == 0 || make.length == 0 || model.length == 0 || color.length == 0 || dom.length == 0 || manufacturer.length == 0) {
        alert("Please enter the data properly");

    }
    else {
        fetch('/createCar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ CarId: carId, CarMake: make, CarModel: model, CarColor: color, DOM: dom, ManufacturerName: manufacturer })
        }).then(function (response) {
            console.log(response);
            if (response.status == 200) {
                alert("Added a new car");

            } else {
                alert("Error in processing request");
            }

        }).catch(function (err) {
            console.log(err);
            alert("Error in processing request");
        })
    }

}

function readData(event) {

    event.preventDefault();
    const readCarId = document.getElementById('readCarId').value;

    console.log(readCarId);

    if (readCarId.length == 0) {
        alert("Please enter the data properly");
    }
    else {
        fetch('/readCar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ CarId: readCarId })
        })
            .then(function (response) {
                console.log(response);
                if (response.status != 200) {
                    console.log(response.status)
                    // alert("Error in processing request");

                } else {
                    return response.json();
                }
            })
            .then(function (Cardata) {
                dataBuf = Cardata["Cardata"]
                console.log(dataBuf)
                alert(dataBuf);
            })
            .catch(function (err) {
                console.log(err);
                alert("Error in processing request");
            })
    }
}