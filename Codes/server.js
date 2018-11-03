var http=require('http');                               //http module
var server=http.createServer((req,res)=>{               //anonymous callback fn
    res.writeHead(200,{"Content-Type":"text/plain"});   //Defining the status code and content type        
    res.end("hello server");
});
server.listen(3000,()=>{
    console.log("server started !!!!!")
});
