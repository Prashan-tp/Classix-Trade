const mongoose = require('mongoose');
const sellerSchema =new mongoose.Schema({
    name :{
        type:String 
    },
    email:{
        type:String 
    },
    password:{
        type:String
    }
});
const Seller = mongoose.model('Seller',sellerSchema);
module.exports=Seller ;
