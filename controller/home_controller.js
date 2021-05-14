const Product = require('../model/product');
const Seller  = require('../model/seller');
const Buyer = require ('../model/buyer');
const { serializeUser } = require('passport');
const jwt = require('jsonwebtoken');

module.exports.sellerSign_up = function(req,res){
    Seller.findOne({email:req.body.email},function(err,seller){
        if(err){
            console.log(err);
        }
        if(seller){
            return res.json(401,{
                message:'User Already Exsists',
            });
        }
        if(!seller &&(req.body.password!=req.body.confirmpassword)){
            return res.json(409,{
                message:'Password Not same',
            });
        }
        Seller.create({
            name:req.body.firstname +" " + req.body.lastname ,
            email:req.body.email ,
            password:req.body.password ,
        },function(err,seller){
            if(err){
                console.log(err);
            }
              return res.json(200,{
                  message:'Account Created',
                  data:seller 
              });
        });

    });

}
module.exports.buyerSign_up = function(req,res){
    Buyer.findOne({email:req.body.email},function(err,buyer){
        if(err){
            console.log(err);
        }
        if(buyer){
            return res.json(401,{
                message:'User Already Exsists',
            });
        }
        if(!buyer &&(req.body.password!=req.body.confirmpassword)){
            return res.json(409,{
                message:'Password not same',
            });
        }
        Buyer.create({
            name:req.body.firstname+" " + req.body.lastname ,
            email:req.body.email ,
            password:req.body.password ,
        },function(err,buyer){
            if(err){
                console.log(err);
            }
              return res.json(200,{
                  message:'Account Created',
                  data:buyer
              });
        });
    });
}
module.exports.buyer_token=function(req,res){
    console.log(req.body.email);
    Buyer.findOne({email:req.body.email},function(err,buyer){
        if(!buyer || buyer.password!=req.body.password){
            return res.json(401,{
                message:'UnAuthorized'
            });
        }
        return res.json(200,{
            message:"Authorized",
            data:jwt.sign(buyer.toJSON(),'VYjHy6XJSQ',{expiresIn:1000*60*10})
        });
    })

}
module.exports.seller_token= function(req,res){
    Seller.findOne({email:req.body.email},function(err,seller){
        if(!seller || seller.password!=req.body.password){
            return res.json(401,{
                message:'UnAuthorized'
            });
        }
        return res.json(200,{
            message:"Authorized",
            data:jwt.sign(seller.toJSON(),'VYjHy6XJSQ',{expiresIn:1000*60*10})
        })
    })
}