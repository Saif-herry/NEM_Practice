

const mongoose = require("mongoose");


const CrudSheme = new mongoose.Schema({
    "name":String,
    "age":Number,
    "city":String
})

const CrudModel = mongoose.model("crud",CrudSheme)

module.exports = CrudModel