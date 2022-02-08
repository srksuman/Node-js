const mongoose = require('mongoose')

//create connection
mongoose.connect('mongodb://localhost/FormData')
// .then(()=>console.log("Connected"))
// .catch((err)=>console.log(err))


// let conn = async()=>mongoose.connect('mongodb://localhost/FormData');
const DataSchema = new mongoose.Schema({
    name: String,
    address:String
})
const Data = mongoose.model('Data',DataSchema)


module.exports = Data;