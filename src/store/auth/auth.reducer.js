import { AUTH_ERROR, AUTH_LOADING, AUTH_SUCCESS, LOGOUT } from "./auth.action.types"

let token=localStorage.getItem("token")
 const initialState={
    authenticate:{
        loading:false,
    error:false,
    token:token,
    isAuth:!!token 
    }
}

export const authReducer=(state=initialState,{type,payload})=>{
switch(type){
    case AUTH_LOADING:{
     return {
        ...state,
        authenticate:{
            loading:true,
            error:false,
            token:"",
            isAuth:false
        }
       }

    }

    case AUTH_SUCCESS:{
        localStorage.setItem("token",payload.token)
       return {
        ...state,
        authenticate:{
            loading:false,
            error:false,
            token:payload.token,
            isAuth:true
           }
       } 
 
     }

     case AUTH_ERROR:{
       return {
        ...state,
        authenticate:{
            loading:false,
            error:true,
            token:"",
            isAuth:false
           }
       } 
 
     }

     case LOGOUT:{
        localStorage.removeItem("token")
       return {
        ...state,
        authenticate:{
            loading:false,
            error:false,
            token:"",
            isAuth:false
           }
       }
     }

     default: return {...state}

}
}