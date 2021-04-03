const express = require ('express')
const path = require("path")

const app = express()

const port = 3001
const publicDirectoryPath = path.join(__dirname, "./public")
app.use(express.static(publicDirectoryPath))


app.listen(port, ()=>{
    console.log(`server is runing on port ${port}`)
})