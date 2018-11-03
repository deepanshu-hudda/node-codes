var fs=require('fs');
var readable=fs.createReadStream('text.txt','utf8');
var data='';
readable.on('data',function(chunk){
    console.log("******************************************************************");
    data+=chunk;
    console.log(data);
});
readable.on('end',function(chunk){
    console.log("ended..............");

})