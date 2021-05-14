const initState = {
    signUp:"",
    login:"" , 
    product:[]
    
}
const Seller_Reducer = (state= initState , action ) =>{
    if(action.type ==="Show_Data"){
         console.log(action);
        return {
        product:action.data
        }
    }
    if(action.type==="Account_Created_Seller"){
        return{
            signUp:action.data
        }
    }
    if(action.type==="Loged_In_Seller"){
        return{
            login:action.data
        }
    }
    return state ;
}
export default Seller_Reducer ;