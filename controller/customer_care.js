const Customercare = require('../model/customercaer');
const jwt = require('jsonwebtoken');
const array = require('../array/chatroom');
module.exports.customercare_Signup=function(req,res){
    Customercare.findOne({email:req.body.email},function(err,user){
        if(err){
            return res.json(401,{
                message:"Server Problem"
            });
        }
        if(user){
            return res.json(401,{
                message:'User Already Exsist'
            });
        }
        if(!user&& req.body.password!=req.body.confirmpassword){
            return res.json(401,{
                message:'Password Not Same'
            });
        }
        Customercare.create({
              name:req.body.firstname + ' '+ req.body.lastname,
              email:req.body.email,
              password:req.body.password,
        },function(err,user){
            if(err){
                return res.json(401,{
                    message:'Server Problem'
                });
            }
            return res.json(201,{
                data:user,
                message:"Created"
            });
        });
    });

}
module.exports.Customercare_token = function(req,res){
    Customercare.findOne({email:req.body.email},function(err,user){
        if(!user || user.password!=req.body.password){
            return res.json(401,{
                message:'UnAuthorized'
            });
        }
        return res.json(200,{
            message:"Authorized",
            token:jwt.sign(user.toJSON(),'VYjHy6XJSQ',{expiresIn:1000*60*10})
        });
    })
}
module.exports.display = function(req,res){
   let c =  array.chatroom[0] ;
   array.print();
   console.log(c+"******");
   return res.json(200,{
    message:"Help" ,
    data: c
});
}