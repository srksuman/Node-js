// const express = require('express')
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/TestSuman',{useNewUrlParser:true});
// mongoose.connection
// .once('open',()=>console.log('connected'))
// .on('error',(error)=>console.log(error))
// const app = express()
// app.listen(5000)

const express = require('express')
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db('TestSuman');
    const collection = db.collection('suman');
    return collection
  }

  main()
  .then((res)=>{
    res.find().toArray()
    .then((resp)=>{
        console.log(resp)
    })
  })

const app = express()

app.listen(5000)