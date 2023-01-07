const express = require('express')

const app = express()

app.use((req,res,next)=>{
    console.log('Hellow middleware')
    next()
    console.log('Middleware again')
})

app.get('/',(req,res)=>{
    console.log('welcome in Test')
    res.send('Welcome in Test')
})

app.get('/dashboard',(req,res,next)=>{
    res.send('Welcome in dashboard!')
})

app.listen(8080,()=>{
    console.log('listening on the port 8008')
})