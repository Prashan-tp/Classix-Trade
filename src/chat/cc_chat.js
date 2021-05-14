import io from 'socket.io-client';
class ChatEngine {
    constructor(chatBoxId,chatroom,userEmail ){
        this.chatBox= `document.getElementById( chatBoxId)`;
        this.user_email=userEmail ;
        this.chatroom = chatroom
        this.socket= io.connect('http://localhost:5000');
        
           this.connectionHandler();
        
    }
    connectionHandler(){
        let self = this ;
        let user_Email ;
        this.socket.on('connect',function(){
            console.log('connection');
        });
       
        this.socket.emit('join_room',{
        user_email: self.user_email ,
        chatroom:self.chatroom 
        });
        this.socket.on('user_joined',function(data){
         console.log('user_joined',data);
        });
        console.log(this.socket);
     const sendmessage =  document.getElementById('send-message');
        sendmessage.addEventListener('click',function(e){
             e.preventDefault();
             let msg = document.getElementById('chat-message-input') ;
            let text_msg= msg.value
            console.log(text_msg);
            
            if(text_msg!=''){
               console.log(this.socket)
                self.socket.emit('send_message' ,{
                    message:text_msg ,
                    user_email: self.user_email,
                    chatroom:self.chatroom
                })
             }
            });
           this.socket.on('recieve_message',function(data){
            console.log('>>>>>>>>>>>>>>>>>>>>>>>>>.');
            console.log(data.user_email+"888989");
            let recieve_msg = document.createElement('li');
            let messagetype= 'other-message' ;
            if(data.user_email===self.user_email ){
               messagetype = 'self-message';
            }
            var para = document.createElement('span');                       
               var t = data.message  ;
               console.log(para);

                  para.append(t);
                 recieve_msg.classList.add(messagetype);  
            
                  recieve_msg.append(para);
                  document.getElementById('chat-messages-list').append(recieve_msg);
                
        });
   }
}
export default ChatEngine;