// we are reading chunks and also writing chunks

var fs=require('fs');
var read=fs.createReadStream('text.txt','utf8');
var write1=fs.createWriteStream('text3.txt','utf8');
read.on('data',function(chunk){
    console.log("................................................................");
    write1.write(chunk);
});
read.on('end',function(chunk){
    console.log("file is read");
})