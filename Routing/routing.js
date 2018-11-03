var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    //res.end("hello everyone!!!!!");
    if (req.url === '/' || req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream('index.html').pipe(res);
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream('about.html').pipe(res);
    }
    else{
        res.writeHead(404, { 'Content-Type': 'text/html' });
        fs.createReadStream('404.html').pipe(res);
    }
});
server.listen(3000);
console.log("server started!!!!!");