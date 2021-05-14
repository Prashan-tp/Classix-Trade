import axios from 'axios';

export const logedIn=()=>{
    return{
        type:"Loged_In_CC",
        data:"SUCCESFULL"
    }
}
export const ShowData=(data)=>{
    return{
        type:"chat" ,
        data:data,
    }
}
export const login_cc = (data) =>{
    return async function (dispatch){
 await axios.post('http://localhost:7000/login-customercare',data).then((res)=>{
     localStorage.setItem('Customercare',res.data.token)
     dispatch(logedIn())
 })

}
    }
    export const chatroom =()=>{
        return  async function (dispatch){
          await  axios.get('http://localhost:7000/talk/customercare',{
                headers:{
                    'Authorization' : 'Bearer'+' '+localStorage.getItem('Customercare')
                   }

            }).then(res=>{
                console.log(res.data.data);
                dispatch(ShowData(res.data.data));
            })
        }
    }

