var express=require('express');
var path=require('path');
var bodyParser=require('body-parser');
var routes=require('./api/routes');
var app=express();

//order of middleware is very important......they should be apply sequentially
app.use(function(req,res,next){               //applying the middleware to the subset of a root folder
    console.log(req.method,req.url);                //defining the static path
    next();
});


//app.get('/',function(req,res){
// console.log('this is the get request!!!');
// res.send("this is the root page");
// });


// //serving index.html file
// app.get('/home',function(req,res){
//     console.log('serving index.html');
//     res.sendFile(path.join(__dirname,'public','index.html'));
// });

app.use(express.static(path.join(__dirname,'public')));


//body-parser middleware should be static file serving between other routes..
app.use(bodyParser.urlencoded({extended:false}));


app.use('/api',routes);
// returning json object
// app.get('/json',function(req,res){
//     res.status('202');
//     res.json({'jsondata':true});
// });


// //serving static files
// app.get('/file',function(req,res){
//     res.sendFile(path.join(__dirname,'app.js'));
// });


app.listen(3333);
console.log('server started!!!');