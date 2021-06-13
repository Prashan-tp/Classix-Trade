import React, {Component} from 'react';

class ChatBot extends Component {
    state = { 
       
     }

    render() { 
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
 
export default ChatBot ;