const express = require('express');
const cors = require('cors');
const bodyParser =require('body-parser');
const path = require('path');

const port = 7000 ; 
const passport = require ('passport');
const passport_Jwt = require('./config/passportjwt');
const app = express();
const db = require('./config/mongoose');
app.use(cors());
app.use(bodyParser());
app.use(passport.initialize());
 app.use('/uploads', express.static('./uploads')) ;
app.use('/',require('./router'));
const chatserver = require('http').Server(app);
const chatSockets=require('./chatting/backend_chat').chatSockets(chatserver);
chatserver.listen(5000,function(err){
    if(err){
        console.log(err);
    }

})
app.listen(port,function(err){
    if(err){
        console.log(err) ;

    }
    console.log(`Server is running on ${port}`);
})