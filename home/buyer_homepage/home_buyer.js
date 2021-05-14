import { useState ,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {searchproduct} from "../../../action/buyeraction";
import ChatBot from "../../chatBot/buyer_chatBot"  ;
import ChatEngine from "../../../chat/frontend_chat";
const HomeBuyer = (props) => {
    const [type,search]=useState();
    const [check,change] = useState(false);
    useEffect(()=>{
        if(!localStorage.getItem("buyer")){
            props.history.push('/login-buyer');
        }
    },[])
    const dispatch = useDispatch();
    const product = useSelector((state)=>state.buyer.product)
  const handelChange=(e)=>{
     search(e.target.value)
     const data ={
        type:type
    }
    dispatch(searchproduct(data));
    }
    
    const handelclick=(e)=>{
        e.preventDefault();
        // console.log(b)
      change(true)
      
    }
    const logout =(e)=>{
        localStorage.clear('buyer');
        props.history.push('/login-buyer')
    }
    return ( <div>
        
        <input placeholder="Search-Item" onChange={handelChange}/>
    
        {!check ?
           <button onClick={handelclick}>CHAT</button>
        
        :null
        } 
        { check ?
        <ChatBot mail={props.location.state} />
        :null
         }
        <Link to ={{
            pathname:'/buyer/products',
            product:product 
        }}>
        Search
       </Link> 
       <button onClick={logout}>LOGOUT</button>
    </div> );
}
 
export default HomeBuyer;