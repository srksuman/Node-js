const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/StudentRegistration').catch(()=>{
    console.log("Connected!!!")
})
.catch((error)=>{
    console.log("Error to connect ===>"+error)
})