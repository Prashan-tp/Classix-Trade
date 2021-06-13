import { useEffect } from 'react';
import AddData from '../seller_homepage/seller_addproduct';
const HomeSeller = (props) => {
    useEffect(()=>{
        if(!localStorage.getItem("seller")){
            props.history.push('/login-seller');
        }
    },[])
    const logout =(e)=>{
        localStorage.clear('seller');
        props.history.push('/login-seller')
    }
    return (<div>
 <AddData/>
 <button onClick={logout}>LOGOUT</button>
    </div>  );
}
 
export default HomeSeller;