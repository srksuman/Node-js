const mongoose = require('mongoose')
const validator = require('validator')

const TodoSch = new mongoose.Schema({
    Todo:String
})
console.log("Schema")
const Todo = mongoose.model('Todos',TodoSch);

module.exports = Todo;