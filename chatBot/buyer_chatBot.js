import React, {Component} from 'react';
import ChatEngine from '../../chat/frontend_chat';
class ChatBot extends Component {
    state = { 
       
     }
	 
	 componentDidMount(){
		console.log(this.props.mail);
		new ChatEngine('user-chat-box',this.props.mail);
	 }
     
        
     

    render() { 
		console.log(this.props.mail);
        return (
             <div id="user-chat-box">
		<ul id="chat-messages-list">
			<li className="other-message">
				<span>Other Message</span>
			</li>
			<li className="self-message">
				<span>
					Self Message
				</span>
				
			</li>

		</ul>
        
		<div id="chat-message-input-container">
			<input id="chat-message-input" placeholder="Type message here"/>
			<button id="send-message">Send</button>
		</div>

          </div>
        
         );
    }
}
 
export default ChatBot;