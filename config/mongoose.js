const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Project_Management_App') ;
const db = mongoose.connection ;
db.on('error',function(){console.log('error')});
db.once('open',function(){
    console.log('connected');
});
