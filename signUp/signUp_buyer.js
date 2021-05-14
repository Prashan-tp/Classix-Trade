import React ,{Component} from 'react';
import {signUp_buyer} from '../../action/buyeraction';
import {connect} from 'react-redux';
class SignupBuyer extends Component {
    state = { 
        firstname:null,
        lastname:null,
        email:null ,
        password:null,
        confirmpassword:null
     }
      handelChange = (e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handelSubmit= (e) =>{
        e.preventDefault();
     this.props.signUp_buyer(this.state);
     console.log(this.props.added);
     if(this.props.added==="SUCCESFULL"){
         setTimeout(() => {
             this.props.history.push('/login-buyer');
         }, 10);
         
      }
    }
    render() { 
        return (<div>
            <form onSubmit={this.handelSubmit}>
                <input id ="firstname" placeholder ="First Name" onChange={this.handelChange}/>
                <input id ="lastname" placeholder ="Last Name" onChange={this.handelChange}/>
                <input id ="email" placeholder="E-mail" onChange={this.handelChange}/>
                <input id ="password" placeholder="password" onChange={this.handelChange}/>
                <input id ="confirmpassword" placeholder="Confirm password" onChange={this.handelChange}/>
               <button>SIGN UP</button>
            </form>
        </div>  )
    }
}
 const mapStatetoprops =(state)=>{
     return{
         added:state.buyer.signUp 
     }
 }
 const mapDispatchtoprops =(dispatch)=>{
     return {
         signUp_buyer:(data)=>{dispatch(signUp_buyer(data))}
     }
 }
export default connect(mapStatetoprops,mapDispatchtoprops)(SignupBuyer);