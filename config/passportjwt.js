const passport = require('passport');
const passport_jwtStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt ;
const Buyer = require('../model/buyer');
const Seller = require('../model/seller');
const Customercare =require('../model/customercaer');
let opts ={
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey:'VYjHy6XJSQ'
}
passport.use('buyer',new passport_jwtStrategy(opts,function(payload,done){
 Buyer.findById(payload._id,function(err,buyer){
     if(err){
         console.log(err);
     }
     if(buyer){
 
        let a =  done(null,buyer);
        console.log(a);
        return a ;

     }
     else{
         return done(null,false);
     }
 })
})) ;
passport.use('seller',new passport_jwtStrategy(opts,function(payload,done){
    Seller.findById(payload._id,function(err,seller){
        if(err){
            console.log(err);
        }
        if(seller){
            return done(null,seller);
        }
        else{
            return done(null,false);
        }
    })
}));
passport.use('cutomercare',new passport_jwtStrategy(opts,function(payload,done){
    Customercare.findById(payload._id,function(err,user){
        if(err){

        }
        if(user){
            return done(null,user);
        }else{
            return done(null,false);
        }
    });
}));