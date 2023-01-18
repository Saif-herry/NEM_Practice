const express = require('express')

const crudModel = require('../Model/crud.model')

const CrudRouter = express.Router()

CrudRouter.get('/',async(req,res)=>{
    try{
      const user =await crudModel.find()
      res.status(200).send(user)
    }
    catch(err){
        res.status(500).send(err)
    }
})

module.exports = CrudRouter