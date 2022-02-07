const express = require('express')
const file = require('path')

const filePath = file.join(__dirname,'public')

const app = express()
app.get('/',(_,res)=>{
    res.sendFile(`${filePath}/index.html`)
})

app.get('/help',(_,res)=>{
    res.sendFile(`${filePath}/help.html`)
})

app.get('*',(_,res)=>{
    res.sendFile(`${filePath}/error.html`)
})

app.listen(5000)