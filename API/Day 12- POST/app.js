const express = require('express');
const Student = require('./connection');
const app = express();
const port = process.env.PORT || 3000

app.post('/student',(req,res)=>{
    console.log("connection created")
})

app.listen(port)