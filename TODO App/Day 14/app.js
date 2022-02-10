const express = require('express')
var bodyParser = require('body-parser')
require('./connection')
const Todo = require('./dotoSchema')
const app = express()
const port = process.env.port || 3000




app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//use ejs engine

app.set('view engine','ejs')


app.get('/',async(req,res)=>{
    const result = await Todo.find()
    // console.log(result)
    res.render('todo',{todo:result})
})


app.post('/todo',async(req,res)=>{
 try{
    const data = new Todo({"Todo":req.body.Todo})
    const result = await data.save()
    console.log(result)
    res.redirect('/')
 }catch{
     console.log("Error while saving the todo")
 }
})

app.get('/delete/:_id',async(req,res)=>{
    console.log(req.params._id)
    const result = await Todo.findByIdAndDelete(req.params._id)
    console.log(result)
    res.redirect('/')
})

app.listen(port,()=>{
    console.log("Listening to port "+port)
})