const mongoose = require('mongoose')

const CrudSchema = new mongoose.Schema({
    "name":String,
    "age":Number,
    
})

const crudModel = mongoose.model('crud2',CrudSchema)

module.exports = crudModel