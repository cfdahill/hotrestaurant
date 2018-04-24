// Dependencies
// ===========================================================
var express = require("express");
var bodyparser = require("body-parser");
//body parser
var app = express();
var path = require("path");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
var newreservation;
var PORT = 3000;
var reservations = [];
var tables = [];

//constructor for building 'reservation' 

//start server & listen for URL hit

//paths to different pages
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
})
//listen for POST from page forms

//listen for GET for view tables request
// Create New reservations - takes in JSON input
app.post("/reserve", function (req, res) {

  newreservation = req.body;

  console.log(newreservation);
  if (reservations.length < 5) { reservations.push(newreservation); }
  else { reservations.push(newresevation); }

});

// $("#add-btn").on("click", function (event) {
//   event.preventDefault();
// var newReservation = {
//   name: $("#name").val().trim(),
//   email: $("#email").val().trim(),
//   id: $("#id").val().trim(),
//   phone: $("#phone").val().trim()
// };

// Question: What does this code do??
app.post("/api/new", function (req, res) {
  console.log(req);
  alert("Adding reservation...");
});

//function to clear the reservation/wait list arrays
function clear() {

}

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});


  //constructor in case we need it
  // var Reservations = function (customerName, customerEmail, customerID, phone) {
  //   customerName = this.name;
  //   customerEmail = this.customerEmal;
  //   customerID = this.customerID;
  //   phone = this.phone;
  // }
