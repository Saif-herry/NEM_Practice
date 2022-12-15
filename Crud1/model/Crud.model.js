const mongoose = require('mongoose')

const CrudSchema = new mongoose.Schema({
    "name":String,
    "age":Number,
    "city":String
})

const CrudModel = mongoose.model("crud1",CrudSchema)

module.exports = CrudModel