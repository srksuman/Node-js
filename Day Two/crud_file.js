const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname,'crud')

//create a file
fs.writeFileSync(`${filePath}/file.txt`,"The file is created!!!")

//read a file
// fs.readFile(`${filePath}/file.txt`,'utf-8',(err,text)=>{
//     console.log(text)
// })

//update a file
//append
// fs.appendFile(`${filePath}/file.txt`,'\nFile name is file',(err)=>{
//         if(!err){
//             console.log("File is updated successfully!")
//         }
// })

//rename a file
// fs.rename(`${filePath}/file.txt`,`${filePath}/file2.txt`,(err)=>{
//     console.warn("File is renamed!!!")
// })

//delete a file

fs.unlinkSync(`${filePath}/file.txt`)