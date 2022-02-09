const mongoose = require('mongoose');
const validator = require('validator');

//create a Schema
const StudentSchema = new mongoose.Schema({
    First_name:{
        type:String,
        required: [true,"Email is required"],
        minlength:3,
      
    },
    Last_name: String,
    Address: String,
    Number:{
        type:Number,
        minlength:10,
        maxlength:10
    },
    Email:{
        type:String,
        required:[true,"Email field is required!!!"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email!!")
            }
        }
    },

});

//creating a model

const Student = new mongoose.model('Student',StudentSchema);

module.exports = Student;
