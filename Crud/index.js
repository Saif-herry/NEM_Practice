const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('Welcome in Test')
})

app.get('/dashboard',(req,res,next)=>{
    res.send('Welcome in dashboard!')
})

app.listen(8080,()=>{
    console.log('listening on the port 8008')
})