

const mongoose = require("mongoose");


const CrudSheme = new mongoose.Schema({
    "name":String,
    "city":String,
    "age":Number
})

const CrudModel = mongoose.model("crud",CrudSheme)

module.exports = CrudModel