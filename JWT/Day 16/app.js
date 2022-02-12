const express = require("express");
const bcrypt = require('bcrypt');
const crypto = require('crypto')
require('./connection')
const Reg = require('./registerationSchema')
const app = express()

const port = process.env.PORT || 3000

app.post('/reg',async(req,res)=>{
    let reg = {
        name:"Suman",
        username:"su",
        email:"suman@gmail.com",
        password: crypto.createHash('sha256').update('##@R0ol98!!!').digest('hex'),
        Re_password:crypto.createHash('sha256').update('##@R0ol98!!!').digest('hex'),
    }
    
    if(reg.password === reg.Re_password){
        const data = new Reg(reg)
        const result = await data.save()
        res.send(result)
    }else{
        res.send("password dosent match")
    } 
    
})

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})