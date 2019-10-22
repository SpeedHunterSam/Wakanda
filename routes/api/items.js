const express = require("express");
const router = express.Router();

//Item Model
const Item = require("../../models/Item");

// Get request to api/items
//gets all items

router.get("/", (req, res) => {
    Item.find({})
    .sort({date: -1})
    .then(items => res.json(items))
});


module.exports = router;