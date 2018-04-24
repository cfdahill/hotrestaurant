// Dependencies
// ===========================================================
var express = require("express");
//body parser
var app = express();
var PORT = 3000;
/// array for reservations, similar one for wait list
var reservations = 
[{
    customerName: "",
    customerEmail: "",
    customerID: "",
    phoneNumber: "",

}];

// Sets up the Express app to handle data parsing
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


//constructor for building 'reservation' 

//start server & listen for URL hit

//paths to different pages
 app.get("/", function(req, res) {
     res.sendFile(path.join(__dirname, "home.html"));
   });
//listen for POST from page forms

//listen for GET for view tables request

//function to clear the reservation/wait list arrays


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });