const mongoose = require('mongoose');

//connection for mongodb
mongoose.connect('mongodb://localhost/StudentRegistration')
.then(()=>{
    console.log("Connections Created!!!")
})
.catch((err)=>{
    console.log("Error:-"+ err)
})

