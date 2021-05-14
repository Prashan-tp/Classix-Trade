const Product = require("../model/product");

module.exports.add_Product = function(req,res){
    console.log(req.body);
    let path2 =   Product.avatarPath.replace("\\", "/");
    Product.uploadedAvatar(req,res,function(err){
        console.log(req.body);
        console.log('*************');
        console.log(req);
        if(err){
            console.log(err);
        }
 Product.create({
   
     name:req.body.name ,
     rate:req.body.rate ,
     Qty:req.body.Qty ,
      avatar:path2+'/'+req.file.filename ,
     type:req.body.type,
     seller:req.user.id 
 },function(err,product){
     if(err){
         console.log(err);
     }
          return res.json(200,{
         message:"Data Added",
         data:product
     });
 })
})
}

module.exports.display=function(req,res){
    console.log(req.user.id);
    Product.find({seller:req.user.id},function(err,product){
        // console.log(req);
        console.log(req.user.id);
        if(err){
            return res.json(401,{
                message:"ERROR"
            })
        }
        console.log(product);
        return res.json(200,{
            message:'Data-Displayed',
            
            data:product
        })
    })
}