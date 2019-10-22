const express = require("express");
const router = express.Router();

//Item Model
const Item = require("../../models/Item");

// Get request to api/items
//gets all items

router.get("/");


module.exports = router;