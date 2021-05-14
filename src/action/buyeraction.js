import axios from 'axios' ;
export const signedUp=()=>{
    return{
        type:"Account_Created_Buyer",
        data:"SUCCESFULL"
    }
}
export const logedIn=()=>{
    return{
        type:"Loged_In_Buyer",
        data:"SUCCESFULL"
    }
}
export const searched=(data)=>{
    return {
        type:"Searched",
        data:data
    }
}
export const signUp_buyer =(data)=>{
return async function(dispatch){
   await axios.post('http://localhost:7000/sign-up-buyer',data).then((res)=>{
        console.log(res.data.data);
      dispatch(signedUp())
    })
}
}
export const login_buyer=(data)=>{
    return async function(dispatch){
      await  axios.post('http://localhost:7000/login-buyer',data).then((res)=>{
            
            localStorage.setItem("buyer",res.data.data)
            
            dispatch(logedIn())
        })
    }
}
export const searchproduct=(data)=>{
 return async function(dispatch){
    await axios.post('http://localhost:7000/buyer/search',data,{
         headers:{
             'Authorization':'Bearer '+localStorage.getItem("buyer")
         }
     }).then((res)=>{
         console.log(res.data.data);
         dispatch(searched(res.data.data));
     })
 }
}
