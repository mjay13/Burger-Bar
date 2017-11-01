var express = require("express");
var metho = require("method-override");
var bodyParser = require("body-parser");

var app = express();

// Port
// var port = process.env.port || 3000;

// Serve static content
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Server access to routes
var router = require("./controllers/burgers_controller.js");

app.use("/", router);

// Listener
// app.listen(port);

app.listen(process.env.port || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});