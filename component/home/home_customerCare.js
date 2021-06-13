import { useEffect,useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import {chatroom} from "../../action/ccaction" ;
import ChatBot from "../chatBot/customercare_chatBot";
import ChatEngine from "../../chat/cc_chat";

const Homecc = (props) => {
    
    const dispatch = useDispatch();
    
    const ans = useSelector((state)=>state.cc.chatroom)
    useEffect(()=>{
        
        if(!localStorage.getItem("Customercare")){
            props.history.push('/login-customercare');
        }
        // console.log(ans);
    },[])
     console.log(ans);

   const handelSubmit=(e)=>{
    e.preventDefault();
     dispatch(chatroom());
    //  window.alert(ans);
     
        console.log(ans+"******");
        if(ans!=""){
    new ChatEngine('user-chat-box',ans,  props.location.state); 
        }
    }
    const logout =(e)=>{
        localStorage.clear('Customercare');
        props.history.push('/login-customercare')
    }
    return ( <div>
    <button onClick={handelSubmit}>NEXT</button>
    <button onClick={logout}>LOGOUT</button>
    <ChatBot/>
    </div> );
}
 
export default Homecc;