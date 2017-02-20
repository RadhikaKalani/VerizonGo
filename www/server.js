var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

app.use(bodyParser.urlencoded({
    'extended': 'true'
})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json

app.use(express.static(path.join(__dirname, '/')));
app.use(express.static(path.join(__dirname, '/node_modules/')));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Cache-Control");
    if (req.method === 'OPTIONS') {
        res.statusCode = 204;
        return res.end();
    } else {
        return next();
    }
});



app.get('/getInsurances', function (req, res) {
    var insurances = [];
    var newInsurance = {
        'name': 'Basic',
        'color': '',
        'capacity': '',
        'coverage': 'Basic Light Damage'
    };
    insurances.push(newInsurance);

    newInsurance = {
       'name': 'Medium',
        'color': '',
        'capacity': '',
        'coverage': 'Medium Light Damage'
    };
    insurances.push(newInsurance);
	res.json(insurances);
});

app.get('/getTest', function (req, res) {
    var devices = [];
    var newDevice = {
        'name': 'iPhone 6S',
        'color': 'Grey',
        'capacity': '16GB'
    };
    devices.push(newDevice);

    newDevice = {
        'name': 'Samsung Galaxy S3',
        'color': 'Silver',
        'capacity': '64GB'
    };
    devices.push(newDevice);

    newDevice = {
        'name': 'Motorola',
        'color': 'White',
        'capacity': '8GB'
    };
    devices.push(newDevice);

    newDevice = {
        'name': 'Galaxy Tab',
        'color': 'Red',
        'capacity': '4GB'
    };
    devices.push(newDevice);

    newDevice = {
        'name': 'iPhone 6S Plus',
        'color': 'Rose',
        'capacity': '64GB'
    };
    devices.push(newDevice);

    var objectJSON = {
        'name': 'Jose',
        'lastName': 'Ocasio'
    };
    res.json(devices);
});
app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});