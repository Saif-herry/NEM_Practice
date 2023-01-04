const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('Welcome in crud')
})

app.get('/dashboard',(req,res)=>{
    res.send('welcome in dashboard')
})

app.listen(8080,()=>{
    console.log(`listening on the port 8080`)
})