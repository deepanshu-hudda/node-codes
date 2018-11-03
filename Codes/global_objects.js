
// setTimeout(function(){
// console.log("3 seconds have passed!!!!!!");
// },3000);

var time=0;
var timer=setInterval(function(){
    time+=2;
    console.log(time+"seconds have passed");
    if(time>7)
    {
        clearInterval(timer);
    }
},2000);
var http =require('http');
http.createServer(function(req,res){
    res.end('hello everyone this is my server')
})