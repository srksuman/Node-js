const express = require("express")
const path = require('path')

const app = express()
const filePath = path.join(__dirname,'public');

app.set('view engine','ejs');

app.get('/',(_,res)=>{
    res.sendFile(`${filePath}/home.html`);
})

app.get('/contact',(_,res)=>{
    res.sendFile(`${filePath}/contact.html`);
})

app.get('/help',(_,res)=>{
    const student = {
        name:'Suman Raj Khanal',
        address:'Thali-5 Kathmandu',
        
    }
    
    res.render('help',{student})
})
app.listen(5000)