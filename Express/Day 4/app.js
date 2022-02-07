const express = require('express')
const app = express()

app.get('/',(req,res)=>{
console.log(req.query.name)
res.send("Hello From Home page"+req.query.name)
})

app.get('/contact',(req,res)=>{
    res.send("Hello from Contact page !!!")
})


app.listen(3000)