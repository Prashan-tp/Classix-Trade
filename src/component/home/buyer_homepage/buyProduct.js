import { useState ,useEffect} from "react";
import {Link} from "react-router-dom";
import cart from '../../../cart.jpg';
const BuyProduct = (props) => {
    const[product,addproduct]=useState();
    useEffect(()=>{
        if(!localStorage.getItem("buyer")){
            props.history.push('/login-buyer');
        }
    },[])
    var i= -1 ;
    let  productList ;
    let cart_product=[];
    const addtoCart=(e)=>{
        e.preventDefault();
    //  console.log(productList[e.target.id].props)
    cart_product.push(props.location.product[e.target.id]);
    console.log(props.location.product);
    }
    const logout =(e)=>{
        localStorage.clear('buyer');
        props.history.push('/login-buyer')
    }
      
      
    if(props.location.product!=null){
    productList = props.location.product.map(product=>{
        i++ ; 
        let http = "http:" ;
            let localhost = "//localhost:7000"
            let address = http+localhost+product.avatar
            if(product.avatar==null){
              address= cart
              console.log('213232');
            }
        return <div key={i}>
            <div>Name :{product.name}</div>
            <div>Rate: {product.rate} </div>
            <div>Qty :{product.Qty}</div>
           <img src= {address} width = "100px" alt="./cart.jpg"/>
         <button id={i} onClick={addtoCart}>ADD TO CART</button>
        </div>
    })
}
 let res = "dasad";
    return ( <div>
        <Link to={
            {
                pathname:"/buyer/addtocart",
                state:cart_product
            }
        
        }>CHECK CART</Link>
       
      <button onClick={logout}>LOGOUT</button>

   { productList}
   
    </div> );
}
 
export default BuyProduct;