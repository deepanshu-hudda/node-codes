var express=require('express');
var router=express.Router();
var ctrlhotel=require('../contoller/hotels.contoller.js');
router
.route('/hotels')
.get(ctrlhotel.hotelall);
// .post(function(req,res){
//     res.status('202');                           //used to show how to test the post method through 
//     res.json({'jsondcata':'POST_method'});        // postman chrome extension
// });
router
.route('/hotels/:hotelId')
.get(ctrlhotel.hotelone);


//router for body-parser middleware
router
.route('/hotels/new')
.post(ctrlhotel.hotelAdd);


module.exports=router;