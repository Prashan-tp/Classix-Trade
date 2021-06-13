import React ,{ Component } from 'react' ;
import {connect} from 'react-redux' ;
import {add_product} from '../../../action/selleraction';
import Selleritem from '../seller_homepage/sellerproductlist';
class AddData extends Component {
    state = { 
        name:null ,
        rate:null ,
        Qty:null ,
        avatar:null ,
        type:null ,
     }
     handelchange=(e)=>{
         
         this.setState({
            [e.target.id]:e.target.value 
         }
        );
     }
     handelfilechange =(e)=>{
         console.log(e);
         this.setState({
            avatar:e.target.files[0]
         });
    }
    handelsubmit=(e)=>{
        e.preventDefault();
        const data = new FormData ();
        data.append('name',this.state.name);
        data.append('rate',this.state.rate);
        data.append('Qty', this.state.Qty);
        data.append('avatar',this.state.avatar);
        data.append('type',this.state.type);
        console.log(this.state);
      this.props.addProduct(data)
    }
   
    render() { 
        
        return ( 
            <div>
                
                    <input type="text" id='name' onChange={this.handelchange} />
                    <input type="text" id='rate' onChange={this.handelchange} />
                    <input type="number" id='Qty' onChange={this.handelchange} />
                    <input type="file" name='avatar' id='avatar' onChange={this.handelfilechange}/>
                    <select id = 'type'  onClick={this.handelchange}>
                        <option>NA</option>
                        <option>Home-Appliances/Product</option>
                        <option>Clothes</option>
                        <option>Food Product</option>
                        <option> Stationary</option>
                        <option>Electronic Devices</option>
                        <option>Musical Instrument</option>
                        <option>Other</option>
                    </select>
                    <button onClick={this.handelsubmit}>Submit</button>
                <div>
                    <Selleritem/>
                </div>
            </div>
         );
    }
}
const mapDispatchtoProps = (dispatch)=>{
    return{
        addProduct: (data) => {
            dispatch(add_product(data))
        }
    }
}
 
export default connect(null,mapDispatchtoProps)(AddData);