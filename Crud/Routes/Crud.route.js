const express = require("express")

const CrudModel = require("../Model/Crud.model")

const CrudRouter = express.Router();

CrudRouter.get("/",async(req,res)=>{
   try{
         const user = await CrudModel.find()
         res.status(200).send(user);
   }
   catch(err){
         res.status(500).send({message:err.message})
   }
})

CrudRouter.post("/post",async(req,res)=>{
    const {name,age,city} = req.body;
    try{
        const user =await CrudModel.create({name,age,city})
        user.save();
        res.status(200).send(user);
    }
    catch(err){
        res.status(500).send({message:err.message});
    }
})

module.exports = CrudRouter