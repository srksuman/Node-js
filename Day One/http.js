const http = require('http')
const server= http.createServer((err,res)=>{
    res.write("Hello World");
    res.end();
});
server.listen(3000)