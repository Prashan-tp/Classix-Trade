const  mongoose = require('mongoose');
const customercare_Schema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }

});
const Customercare = mongoose.model('Customer_Care',customercare_Schema);
module.exports=Customercare ;