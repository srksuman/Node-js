const mongoose = require('mongoose')
const validator = require('validator')

const RegSchema = new mongoose.Schema({
    name: String,
    username: {
        type:String,
        unique: true
    },
    email: {
        type:String,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is not in propper format !!!")
            }
        }

    },
    password: {
        type:String,
        // validate(value){
        //     if(!validator.isStrongPassword(value)){
        //         throw new Error ("Password should be strong")
        //     }
        // }
    },
    Re_password: {
        type:String,
        // validate(value){
        //     if(!validator.isStrongPassword(value)){
        //         throw new Error ("Password should be strong")
        //     }
        // }
    },
    
})

RegSchema.methods.chekcTwoPassword = (val) =>{
    console.log("suman raj khanal")
    console.log(val)
}

const Register = mongoose.model('Registration',RegSchema)

module.exports = Register