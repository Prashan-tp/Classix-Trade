const Product = require('../model/product') ;
module.exports.search=function(req,res){
Product.find({type:req.body.type},function(err,product){
    if(err){
        return res.json(401,{
            message:'Server Problem'
        }); 
        }
    if(!product){
 return res.json(401,{
     message:'Not Found'
 });
    }
    return res.json(201,{
        message:"Product List",
        data:product
    })
})

}
