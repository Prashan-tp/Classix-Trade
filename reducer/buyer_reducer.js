const initState = {

    signUp: "" ,
    login: "" ,
    product:[]
    
}
const Buyer_Reducer = (state= initState , action ) =>{
    if(action.type ==="Account_Created_Buyer"){
      console.log(action.data)
        return {
            signUp:action.data
        }
    }
    if(action.type==="Loged_In_Buyer"){
        
        return{
            login:action.data
        }
    }
    if(action.type==="Searched"){
        
        return{
            product:action.data
        }
    }
    
    return state;
   
}
export default Buyer_Reducer ;