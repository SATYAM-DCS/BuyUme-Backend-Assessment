const express = require('express')
const PORT =  3000;
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const db = require('./config/mongoose')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.use('/',require('./routes'))

app.listen(PORT, (err)=>{
    if(err){
        console.log('error while creating server')
    }
    console.log(`server is running on port ${PORT}`)
})