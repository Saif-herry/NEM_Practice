const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('Welcome in Home Page')
})

app.get('/about',(req,res)=>{
    res.send('Welcome in about page')
})

app.listen(8080,()=>{
    console.log(`listening on the port 8080`)
})



