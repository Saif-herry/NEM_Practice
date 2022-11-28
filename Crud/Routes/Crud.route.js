const express = require("express")

const CrudModel = require("../Model/Crud.model")

const CrudRouter = express.Router();

CrudRouter.get("/",(req,res)=>{
    const user = CrudModel.find()
    res.send(user)
})

CrudRouter.post("/post",(req,res)=>{
    const user = CrudModel.create(req.body)
    res.send({message:"user details saved"})
})

module.exports = CrudRouter