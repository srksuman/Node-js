const express = require('express')
var bodyParser = require('body-parser')
const Data = require('./mongo')
const app = express()

app.use(bodyParser.json())

app.set('view engine','ejs')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/form',(req,res)=>{
    res.render('form')
})


async function saveData(data){
    form_data = new Data(data)
   let result = await form_data.save()
//    console.log(result)
}

const getData = async()=>{
    const result = await Data.find()
    return result;
}

app.post('/show',urlencodedParser,async(req,res)=>{
    // console.log(req.body)
    let data = {
        name:req.body.name,
        address:req.body.address
    }
    saveData(data)
    let  get_data = await getData();
    console.log(get_data)
    res.render('show')
})



app.listen(3000)