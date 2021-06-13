import React ,{Component} from 'react' 
import {signUp_seller} from '../../action/selleraction';
import {connect} from 'react-redux';
class Signup_Seller extends Component {
    state = { 
         firstname:null,
        lastname:null,
        email:null ,
        password:null 
    }
    handelChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handelSubmit=(e)=>{
        e.preventDefault();
     this.props.signUp_seller(this.state);
     if(this.props.added==="SUCCESFULL"){
        setTimeout(() => {
            this.props.history.push('/login-seller');
        }, 10);
        
     }
    }
    render() { 
        return (<div>
            <form onSubmit={this.handelSubmit}>
                <input id ="firstName" placeholder ="First Name" onChange={this.handelChange}/>
                <input id ="lastname" placeholder ="Last Name" onChange={this.handelChange}/>
                <input id ="email" placeholder="E-mail" onChange={this.handelChange}/>
                <input id ="password" placeholder="password" onChange={this.handelChange}/>
                <input id ="confirmpassword" placeholder="Confirm password" onChange={this.handelChange}/>
               <button>SIGN UP</button>
            </form>
        </div>  );
    }
}
const mapStatetoprops =(state)=>{
    return{
        added:state.seller.signUp 
    }
}
const mapDispatchtoprops =(dispatch)=>{
    return {
        signUp_seller:(data)=>{dispatch(signUp_seller(data))}
    }
}
 
export default connect(mapStatetoprops,mapDispatchtoprops)(Signup_Seller);