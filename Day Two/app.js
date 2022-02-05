// const http = require('http')

// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'application/json'});
//     res.write(JSON.stringify({name:"Suman"}))
//     res.end()
// }).listen(3000)

//file in node js

const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname,"files")
console.warn(filePath)
for(var i = 0; i< 4;i++){
    fs.writeFileSync(`${filePath}/file${i}.txt`,`Hello from file ${i}`);
}


//show file list 
fs.readdir(filePath,(err,file)=>{
    file.forEach(element => {
        console.log(element);
    });
})

