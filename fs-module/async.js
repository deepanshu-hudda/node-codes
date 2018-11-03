var fs=require('fs');
var read1=fs.readFile('text1.txt','utf8',(err,data)=>{
    if(err){
        console.log(err);
        }
        else
        console.log(data);
});
console.log("the file is read");


fs.writeFile('text3.txt',read1,(err,data)=>{
    if(err)
         console.log(err);
    
    else
console.log("success");
});