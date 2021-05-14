const express = require('express');
const passport  = require('passport');
const router = express.Router();
const sellercontroller= require('../controller/seller_controller');
router.get('/',passport.authenticate('seller',{session:false}), sellercontroller.display);
router.post('/add',passport.authenticate('seller',{session:false}),sellercontroller.add_Product);
module.exports=router ;