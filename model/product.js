const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path')
const Avatar_Path = path.join('/uploads')
const productSchema = new mongoose.Schema({
    name:{
        type:String ,
        
    },
    rate:{
        type:Number
    },
    Qty:{
        type:Number
    },
    avatar:{
        type:String
    },
    type :{
        type:String
    },
    seller:{
        type:mongoose.SchemaTypes.ObjectId ,
        ref:'Seller'
    }

});
let storage = multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,path.join(__dirname ,'..' ,Avatar_Path));
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname+'_'+Date.now());
    }
});
productSchema.statics.uploadedAvatar=multer({storage : storage}).single('avatar');
productSchema.statics.avatarPath = Avatar_Path;
const Product = mongoose.model('Product',productSchema);
module.exports=Product ;