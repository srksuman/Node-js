const exp = require('constants')
const express = require('express')
const path = require('path')

const filePath = path.join(__dirname,'public')
console.log(filePath)
const app = express()

app.use(express.static(filePath))

app.listen(3000)