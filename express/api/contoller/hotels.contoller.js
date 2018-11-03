var jsondata=require('../data/json-data.json');
module.exports.hotelall=(function(req,res){
    res.status('202');
    res.json({jsondata});
});



module.exports.hotelone=(function(req,res){
    var hotelId=req.params.hotelId;
    var hotelfinal=jsondata[hotelId];
    console.log("get one hotel",hotelId);
    res.status('202');
    res.json(hotelfinal);
});


module.exports.hotelAdd=function(req,res){
    console.log("post_method");       //middleware will fill the data in the request-body object
    console.log(req.body);
    res.status('202');
    res.json(req.body);
};
