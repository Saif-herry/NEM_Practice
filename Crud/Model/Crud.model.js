

const mongoose = require("mongoose");


const CrudSheme = new mongoose.Schema({
    "qty":Number,
    "imgu":String,
    "title":String,
    "price":Number,
    "rating":Number
})

const CrudModel = mongoose.model("crud",CrudSheme)

module.exports = CrudModel