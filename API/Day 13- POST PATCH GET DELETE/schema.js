const mongoose = require('mongoose')
const validator = require('validator')
const StudentScheme = new mongoose.Schema({
    fullname :{
        type:String,
        minlength:3,
        maxlength:30
    },
    email:{
        type:String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid!!!")
            }
        }
    },
    address:String
})

const StudentRegistration = mongoose.model('Student',StudentScheme)

module.exports = StudentRegistration