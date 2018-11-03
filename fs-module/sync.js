var fs=require('fs');
var read=fs.readFileSync('text.txt','utf8');
console.log(read);

fs.writeFileSync('text1.txt',read);