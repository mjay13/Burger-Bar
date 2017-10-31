var burger = require("../models/burger.js");

var express = require("express");
var router = express.Router();


// router.get("/") to retrieve all data
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// router.post for the submit
router.post("/", function(req, res) {
	burger.insertOne(req.body.burger, function(data){
		res.redirect("/");
	});
});

// router.put to update
router.put("/", function(req, res) {

});

module.exports = router;