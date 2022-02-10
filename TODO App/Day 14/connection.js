const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/Todo').then(()=>{
    console.log("Database Connection Established")
}).catch((err)=>{
    console.log(err)
})

  


// module.exports = connection