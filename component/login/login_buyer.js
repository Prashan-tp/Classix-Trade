import {useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {login_buyer} from "../../action/buyeraction";
const LoginBuyer = (props) => {
    useEffect(()=>{
        
        if(localStorage.getItem("buyer")){
            props.history.push('/buyer/home');
        }

    },[])
 const [email,loginEmail]=useState();
 const [password,loginPassword]=useState();
const dispatch = useDispatch();
const authenticate = useSelector((state)=>state.buyer.login)
const handelEmail=(e)=>{
    loginEmail(e.target.value)
}
const handelPassword=(e)=>{
    loginPassword(e.target.value)
}

const handelSubmit=(e)=>{
    e.preventDefault();
    const data ={
        email:email,
        password:password
 }
 console.log(data);
 dispatch(login_buyer(data));
 if(authenticate==="SUCCESFULL"){
    setTimeout(() => {
        props.history.push({
        pathname:"/buyer/home",
        state:email
         });
     },10);
    
    
 }
}
    return ( <div >
        <form onSubmit={handelSubmit}>
            <input id = "email" placeholder="E-mail" onChange={handelEmail}/>
            <input id = "password>" placeholder="Password" onChange={handelPassword}/>
            <button>LOGIN</button>
        </form>
    </div> );
}
 
export default LoginBuyer;