const express = require('express')

const app = express()



app.get('/',(req,res)=>{
  res.send('Welcome guys!')
})

app.listen(8080, () => {
  console.log('db connected')
})



// const express = require('express')
// const cors = require('cors')
// require('dotenv').config()

// const app = express()
// app.use(express.json())
// app.use(cors())

// const PORT = process.env.PORT || 8080
// const connection = require('./config')

// const CrudRouter = require('./Routes/Crud.routes')
// app.use('/crud',CrudRouter)

// app.get('/',(req,res)=>{
//     res.send('Welcome in crud')
// })
// app.listen(PORT,async()=>{
//     try{
//         await connection
//         console.log('db connected')
//     }
//     catch(err){
//         console.log('check config',err)
//     }
//     console.log(`listening on the port ${PORT}`)
// })
