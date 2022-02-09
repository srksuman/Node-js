const express = require('express');
require('./connection');
const Student = require('./StudentSchema');
const app = express();
const port = process.env.PORT || 3000
app.use(express.json())

app.post('/student',async(req,res)=>{
    const studentData = new Student(req.body)
    const result = await studentData.save()
    res.status(201).send(result)
})

app.listen(port,()=>{
    console.log("Lisening on port numebr :-"+port)
})