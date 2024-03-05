const express = require('express')
require('dotenv').config()

const app = express()



app.get('/', (req, res) => {
    res.send('hello world   ')
})

app.get("/about",(req,res)=>{
    res.send("this is about page")
})

app.get("/register",(req,res)=>{
    res.send("<h1>This is registration</h1>")
})

app.listen(process.env.PORT, () => {
    console.log(`localhost is running in ${process.env.PORT}`)
})