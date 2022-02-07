const express = require('express')
const path = require('path')

const app = express()
const route = express.Router()

// const filePath = path.join(__dirname,'public')
const ageMiddleware = (req,res,next)=>{
    if(!req.query.age){
        res.send("Please provide age");
    }else{
        next()
    }
}

route.use(ageMiddleware)


app.set('view engine', 'ejs')

// app.set('views',filePath)

route.get('',(req,res)=>{
    let data = {
        name:"Suman Raj Khanal",
        address:"Thali-5 Kathmandu",
        subjects:['HPC','Big Data','AI','Complex System']
    }
    res.render('home',{data})
})

app.use('/',route);

app.listen(5000);