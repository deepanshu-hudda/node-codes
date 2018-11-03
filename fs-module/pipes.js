var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res){
    res.writeHead('200',{'Content-Type':'text/plain'});
    var readStream=fs.createReadStream('text.txt','utf8');
    readStream.pipe(res);
});
server.listen(3000,function(){
    console.log("server started");
});