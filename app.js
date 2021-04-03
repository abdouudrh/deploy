const express = require ('express')
const path = require("path")
require('dotenv').config()

const app = express()

const port =  process.env.PORT 
const publicDirectoryPath = path.join(__dirname, "./public")
app.use(express.static(publicDirectoryPath))


app.listen(port, ()=>{
    console.log(`server is runing on port ${port}`)
})