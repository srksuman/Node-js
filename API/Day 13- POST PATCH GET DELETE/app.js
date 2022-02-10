const exp = require("constants");
const express = require("express");
require("./connection");
const Student = require("./schema");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


//post data
app.post("/student", async (req, res) => {
  try {
    const data =  new Student(req.body)
    const result = await data.save()
    res.status(201).send(result)
  } catch {
    console.log("Error posting data")
  }
});

//get data all student data

app.get('/student',async(req,res)=>{
    const result =await Student.find()
    res.status(201).send(result)

})

//get single student data using id
app.get('/student/:id',async(req,res)=>{
    const id = req.params.id
    console.log(id)
    const result = await Student.find({_id:id})
    console.log(result)
    res.status(201).send(result)
})

//update the student registration

app.patch('/student/:id', async(req,res)=>{
    console.log(req.body)
    const result  = await Student.findByIdAndUpdate({_id:req.params.id},req.body)
    res.send(result)

})

//delete student registration

app.delete('/student/:_id',async(req,res)=>{
    const result = await Student.findByIdAndDelete(req.params._id)
    res.send(result)
})

app.listen(port, () => {
  console.log("Connected!!!");
});
