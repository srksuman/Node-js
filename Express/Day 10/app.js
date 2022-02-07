const express = require('express')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/TestSuman')
    .then(() => {
        console.log("Connection created!!!")
    })
    .catch((err) => console.log(err));

const app = express()

const UserSchema = new mongoose.Schema({
    fullname: String,
    address: String,
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', UserSchema);

const documentCreated = async () => {
    try {
        const data = User({
            fullname: "Pushpa Raj Khanal",
            address: "Thali-5, Kathmandu"
        })

        const data2 = new User({
            fullname: "Bikram Raj Khanal",
            address: " Kathmandu"
        })

        const data3 = new User({
            fullname: "Pushpa Raj Sapkota",
            address: "Sankhu-5, Kathmandu"
        })


        const result = await User.insertMany([data,data2,data3]);

        console.log(result);
    } catch (err) {
        console.log(err);
    }

}
// documentCreated();

//select
const showData = async() =>{
    const result = await User.find({address:'Thali-5, Kathmandu'})
    console.log(result)
}
// showData()


//update

const updateData = async(_id) =>{
const result = await User.updateOne({_id},{fullname:"SUMAN RAJ KHANAL",address:"Sindhupalchock"});
console.log(result)
}
// updateData('62014bff6b4d50936bbf890f')

const deleteData = async(_id) =>{
    const result = await User.deleteOne({_id})
    console.log(result)
}
// deleteData('620155b4929391fdfc1cb992')

app.listen(3000)