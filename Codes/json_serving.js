var http=require('http');
var server=http.createServer(function(req,res){
    console.log("requested url"+req.url);
    res.writeHead(200,{'Content-Type':'text/json'});
    var jsonObj={
        name:'dev',
        surname:'sangwan',
        age:08
    };
    res.end(JSON.stringify(jsonObj));
});
server.listen(3000);
console.log("server started!!!!!!!");