//  import  {useState} from 'react';
// import {useDispatch,useSelector} from 'react-redux' ;
import AddtoCart from './component/home/buyer_homepage/addtocart';
import BuyProduct from './component/home/buyer_homepage/buyProduct';
import LoginBuyer from './component/login/login_buyer';
import LoginSeller from './component/login/login_seller';
import HomeBuyer from './component/home/buyer_homepage/home_buyer';
import HomeSeller  from './component/home/seller_homepage/home_seller'; 
import SignupBuyer from './component/signUp/signUp_buyer';
import SignupSeller from './component/signUp/signUp_seller';
import HomePage from './component/Home_Page/home_page'; 
import {BrowserRouter, Route } from 'react-router-dom';
import Cclogin from './component/login/login_cc'; 
import Homecc from './component/home/home_customerCare';
// import ChatBot from './component/chatbot'
function App(props) {
    return (
      <div className="App">
      <BrowserRouter>
      <Route  exact path='/'  component={HomePage}/>
      <Route  path='/sign-up-seller'  component={SignupSeller}/>
      <Route  path='/sign-up-buyer'  component={SignupBuyer}/>
      <Route path='/login-buyer' component={LoginBuyer}/>
       <Route path='/login-seller' component={LoginSeller}/>
       <Route  path='/buyer/home'  component={HomeBuyer}/> 
       <Route  path='/seller/home'  component={HomeSeller}/> 
       <Route  path='/buyer/products'  component={BuyProduct}/> 
       <Route  path='/buyer/addtocart'  component={AddtoCart}/> 
       <Route path ='/login-customercare' component={Cclogin}/>
       <Route path='/customercare/home' component={Homecc}/> 
      </BrowserRouter>
    </div>
  );
}

export default  (App);
