
import {useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {login_seller} from "../../action/selleraction";
const LoginSeller = (props) => {
    useEffect(()=>{
        
        if(localStorage.getItem("seller")){
            props.history.push('/seller/home');
        }

    },[])
    const [email,loginEmail]=useState();
    const [password,loginPassword]=useState();
   const dispatch = useDispatch();
   const authenticate = useSelector((state)=>state.seller.login)
  const  handelEmail=(e)=>{
       loginEmail(e.target.value)
   }
  const  handelPassword=(e)=>{
       loginPassword(e.target.value)
   }
  const handelSubmit=(e)=>{
    e.preventDefault();
       const data ={
           email:email,
           password:password
    }
    dispatch(login_seller(data));
    if(authenticate==="SUCCESFULL"){
        setTimeout(() => {
            props.history.push('/seller/home')  
        }, 10);
        
    }
   }
    return ( <div>
        <form onSubmit={handelSubmit}>
            <input id = "email" placeholder="E-mail" onChange={handelEmail}/>
            <input id = "password>" placeholder="Password" onChange={handelPassword}/>
            <button>SUBMIT</button>
        </form>
    </div> );
}
 
export default LoginSeller;