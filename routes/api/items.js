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




// post request to api/items
//create an item

router.post("/", (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save().then(item=> res.json(item));
});

// route DELETE api/items/:id
//Delete a Database Item
//d

router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
  .then(item => item.remove().then(()=> res.json({success: true})))
  .catch(err => res.status(404).json({success: false}));
});



module.exports = router;