const cors = require('cors');
const array = require('../array/chatroom');
function checking(data){
let a = array.chatroom.find((chatroom)=>{
    return chatroom===data
})
if(a!=undefined){
 let temp =    array.chatroom.filter(chatro=>{
        return a!=chatro ;
    });
    array.chatroom=temp ;
    return true ;
}
return false ;
}
module.exports.chatSockets = function(chatserver){
    let io = require('socket.io')(chatserver,{cors : {
        origin: "*",
        methods: ["GET", "POST"],
      }
    })
    io.sockets.on('connection',function(socket){
        
    
    socket.on('disconnect',function(){
        console.log('disconnect');
    })
    socket.on('join_room',function(data){
        if(!checking(data.chatroom)){
       array.chatroom.push(data.chatroom);
        }
        socket.join(data.chatroom);
        io.in(data.chatroom).emit('user_joined',data);
    });
    socket.on('send_message',function(data){
        io.in(data.chatroom).emit('recieve_message',data);
    });
});
}