import {useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {login_cc} from '../../action/ccaction';
const Cclogin = (props) => {
    useEffect(()=>{
        
        if(localStorage.getItem("Customercare")){
            props.history.push('/customercare/home');
        }

    },[])
    const [email,loginEmail]=useState();
   
    const [password,loginPassword]=useState();
   const dispatch = useDispatch();
   const authenticate = useSelector((state)=>state.cc.login)
  
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
    dispatch(login_cc(data));
    if(authenticate==="SUCCESFULL"){
        setTimeout(() => {
           props.history.push({
           pathname:"/customercare/home",
           state:email
            });
        },10);
       
    }
   }
   
    return ( <div>
        <form onSubmit={handelSubmit}>
            <input id = "email" placeholder="E-mail" onChange={handelEmail}/>
            <input id = "password>" placeholder="Password" onChange={handelPassword}/>
            <button>LOGIN</button>
        </form>
    </div> );
   
}

export default Cclogin;