module.exports.chatroom =[]; 
module.exports.print = function (){
    for(var i = 0 ; i<this.chatroom.length ; i++){
        console.log(this.chatroom[i]);
    }
}