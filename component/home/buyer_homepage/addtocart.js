import { useEffect } from 'react';
import cart from '../../../cart.jpg';
const AddtoCart = (props) => {
    let productList ;
    var i = -1; 
     console.log(props.location.state)
    useEffect(()=>{
        if(!localStorage.getItem("buyer")){
            props.history.push('/login-buyer');
        }
    },[])
    if(props.location.state!=null){
        productList = props.location.state.map(product=>{
            
            let http = "http:" ;
                let localhost = "//localhost:7000"
                let address = http+localhost+product.avatar
                if(product.avatar==null){
                  address= cart
                  console.log('213232');
                }
                i++ ;
            return <div key={i}>
                <div>Name :{product.name}</div>
                <div>Rate: {product.rate} </div>
               <img src= {address} width = "100px" alt="./cart.jpg"/>
             
            </div>
        })
    }
    return (<div>
    {productList}
   
   <button>Buy </button>
    </div>  );
}
 
export default AddtoCart;