const express = require('express')
var bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.set('view engine','ejs')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/form',(req,res)=>{
    res.render('form')
})

app.post('/show',urlencodedParser,(req,res)=>{
    console.log(req.body)
    data = {
        name:req.body.name,
        address:req.body.address
    }
    res.render('show',{data})
})



app.listen(3000)