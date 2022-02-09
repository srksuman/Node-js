const mongoose = require('mongoose');
const validator = require('validator')

//connection for mongodb
mongoose.connect('mongodb://localhost/StudentRegistration')
.then(()=>{
    console.log("Connections Created!!!")
})
.catch((err)=>{
    console.log("Error:-"+ err)
})

//create a Schema

const StudentSchema = new s=mongoose.Schema({
    First_name:{
        type:String,
        required: [true,"Email is required"],
        minlength:3,
      
    },
    Last_name: String,
    Address: String,
    Number:{
        type:Number,
        validate(value){
            if(value.length != 10){
                throw new Error("Phone number should be of length 10");
            }
        }
    },
    Email:{
        type:String,
        required:[true,"Email field is required!!!"],
        validate(vlaue){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email!!")
            }
        }
    },

});

//creating a model

const Student = new mongoose.model('Student',StudentSchema);

module.exports = Student;
