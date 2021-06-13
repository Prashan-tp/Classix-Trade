import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {sellerproduct} from "../../../action/selleraction";
import cart from '../../../cart.jpg';
const Selleritem = () => {
    const productList = useSelector((state)=>state.seller.product)
    const dispatch = useDispatch();
    useEffect(()=>{dispatch(sellerproduct())},[])
     let product_List ;
     var i = -1 ;
    console.log(productList);
     if(productList!=null){
        
   product_List = productList.map(product=>{

   
        let http = "http:" ;
        let localhost = "//localhost:7000"
        let address = http+localhost+product.avatar
        i++ ;
        if(product.avatar==null){
          address= cart
          console.log('213232');
        }
    return <div key= {i} >
        <div>Name :{product.name}</div>
        <div>Rate: {product.rate} </div>
        <div>Qty :{product.Qty}</div>
       <img src= {address} width = "100px" alt="./cart.jpg"/>
       </div>
    })
 }
    return ( <div>
    { product_List}

    </div> );
}
 
export default Selleritem;