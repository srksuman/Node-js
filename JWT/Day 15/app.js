require('dotenv').config({path: '.env'})
const express = require('express')
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser')
const app = express()
const port = process.env.port || 3000
app.use(bodyParser.json())
app.post('/login',(req,res)=>{
const username = req.body.username
const user = {name:username}
// console.log(jwt.hash(username))
const access_token = jwt.sign(user,process.env.ACCESS_TOKEN)
res.send({access_token:access_token})
})


app.listen(port, ()=>{
    console.log("Listening to port "+ port)
})