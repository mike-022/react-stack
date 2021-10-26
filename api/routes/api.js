var express = require("express");
var router = express.Router();

// Recipes within the Categories
router.get("/health/", function(req, res, next) {
    res.send("OK");
});


module.exports = router;
