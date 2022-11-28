const express = require("express")

const app = express()
app.use(express.json())

//middleware


app.use((req,res,next)=>{
    console.log("Hi I am MiddleWare")
    next()
    console.log("Hi I am again MiddleWare again")
})

app.get("/",(req,res)=>{
    console.log("Home page")
    res.send("Home Page")
})

app.get("/dashboard",(req,res)=>{
    console.log("Dashboard Page")
    res.send("DashBoard Page")
})

app.listen(5000,()=>{
    console.log("Listening on port 8080")
})
