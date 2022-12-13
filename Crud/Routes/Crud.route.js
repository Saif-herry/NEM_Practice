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

// CrudRouter.post("/post",(req,res)=>{
//     const user = CrudModel.create(req.body)
//     res.send({message:"user details saved"})
// })

module.exports = CrudRouter