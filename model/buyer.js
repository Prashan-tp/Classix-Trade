const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
   name:{
       type:String,
   },
   email:{
       type:String,
   },
   password:{
       type:String ,
   }
});
const Buyer = mongoose.model('Buyer',buyerSchema);
module.exports=Buyer ;