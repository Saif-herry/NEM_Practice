const express = require("express")
require("dotenv").config()
const cors = require("cors")


const connection = require("./config")
const CrudRoute = require("./Routes/Crud.route")

const app = express();
app.use(express.json())
app.use(cors())

app.use("/crud",CrudRoute)

const PORT  = process.env.PORT || 8080;



app.listen(8080,()=>{
    console.log("Listening on port localhost 8080")
})