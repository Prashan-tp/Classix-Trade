import React ,{Component} from 'react' ;
import {connect} from 'react-redux' ;
import { getdata} from '../action/getdataction';
import AddData from '../component/addproduct';
import cart from '../cart.jpg';

class SellerProduct extends Component {
    state = {  
      buy_list :[]
    }
    componentDidMount(){
      console.log('oooooooooo');
      this.props.showProduct();
    }   
    render() { 
        const product_List = this.props.products.map(product=>{
            
           return <div key={product._id}>
             Name : {product.name}
             rate: {product.rate} 
             Qty :{product.Qty}
             
             <img src= {address} width = "100px" alt="./cart.jpg"/>
             
           </div>
         })
        return (<div>
     <div>
       {console.log(product_List)}
                {product_List}
      </div>
      <AddData/>
         </div>  
      );
    }
} 
const mapStatetoprops = (state) =>{
  
    return{
      products:state.seller.product 
     
    }
  }
  const mapDispatchtoprops=(dispatch)=>{
    return{
      showProduct:()=>{
        dispatch(getdata())}
       }
  }
  export default  connect(mapStatetoprops,mapDispatchtoprops)  (SellerProduct);