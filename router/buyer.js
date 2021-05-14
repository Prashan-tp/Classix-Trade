const express = require('express');
const passport  = require('passport');
const router = express.Router();
const buyercontroller = require('../controller/buyer_controller');
router.post('/search',passport.authenticate('buyer',{session:false}),buyercontroller.search);
module.exports=router ;