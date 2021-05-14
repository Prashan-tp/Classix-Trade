import axios from 'axios' ;
export const signedUp=()=>{
    return{
        type:"Account_Created_Seller",
        data:"SUCCESFULL"
    }
}
export const logedIn=()=>{
    return{
        type:"Loged_In_Seller",
        data:"SUCCESFULL"
    }
}
export const showData=(data)=>{
    return {
        type:"Show_Data",
        data:data
    }
}
export const signUp_seller =(data)=>{
return function(dispatch){
    axios.post('http://localhost:7000/sign-up-seller',data).then((res)=>{
      dispatch(signedUp())
    })
}
}
export const login_seller=(data)=>{
    return function(dispatch){
        axios.post('http://localhost:7000/login-seller',data).then((res)=>{
            localStorage.setItem('seller',res.data.data)
            console.log(res.data.data)
            dispatch(logedIn())
        })
    }
}
export const sellerproduct = ()=>{
    return function (dispatch){
        axios.get('http://localhost:7000/seller',{
            headers:{
                'Authorization' :'Bearer '+localStorage.getItem('seller')
            }
        }).then((res)=>{
            console.log(res.data.data)
            dispatch(showData(res.data.data))
        })
    }
}
export const add_product=(data)=>{
    return function(dispatch){
   axios.post('http://localhost:7000/seller/add',data,{
       headers:{
        'Content_type':'multipart/form-data',
        'Authorization' : 'Bearer'+' '+localStorage.getItem('seller')
       }
   }).then((res)=>{
    console.log(res)
   })
    }
}