const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())

const connection = require('./config')
const CrudRouter = require('./routes/Crud.Routes')

app.get('/',(req,res)=>{
    res.send('Welcome from Crud Operation World')
})

app.use('/crud',CrudRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT,async()=>{
    try{
         await connection
         console.log('db connected')
    }
    catch(err){
          console.log('check config',err)
    }
    console.log(`listening on port ${PORT}`)
})
