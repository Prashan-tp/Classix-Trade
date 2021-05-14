const initState ={
    login:"",
    chatroom:""
}
const CC_Reducer = (state=initState,action)=>{
    if(action.type==="Loged_In_CC"){
        return {
            login:action.data
        }
    }
    if(action.type==="chat"){
        console.log(action.data);
   return {
       chatroom:action.data
   }
    }
    return state ;
}
export default CC_Reducer ;