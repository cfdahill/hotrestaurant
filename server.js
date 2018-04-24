var express = require("express");
var bodyparser = require("body-parser");
//body parser
var app = express();
var path = require("path");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

var PORT = 3000;
/// array for reservations, similar one for wait list
var Reservations = function (customerName, customerEmail, customerID, phone) {
	customerName = this.name;
	customerEmail = this.customerEmail;
	customerID = this.customerID;
	phone = this.phone;
}
app.listen(PORT, function () {
	console.log("App listening on PORT " + PORT);
});

var Reservations = function (customerName, customerEmail, customerID, phone) {
	customerName = this.name;
	customerEmail = this.customerEmail;
	customerID = this.customerID;
	phone = this.phone;
}


//constructor for building 'reservation' 

//start server & listen for URL hit

//paths to different pages

//listen for POST from page forms

//listen for GET for view tables request

//function to clear the reservation/wait list arrays
