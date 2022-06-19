import { ADD_CART_ERROR, ADD_CART_LOADING, ADD_CART_SUCCESS, DELETE_CART_ERROR, DELETE_CART_LOADING, DELETE_CART_SUCCESS, GET_CART_ERROR, GET_CART_LOADING, GET_CART_SUCCESS } from "./Cart.action.types"

const initialState={
getCart:{
    getloading:false,
    geterror:false,
    getdata:[],
    total:0
},
addCart:{
   addloading:false,
    adderror:false,
    adddata:{},
   
       
},
deleteCart:{
    deleteloading:false,
    deleteerror:false,
    deletedata:[]
}
}

export const getCartReducer=(state=initialState,{type,payload})=>{
    console.log(payload,"pay")
  switch(type){
    case GET_CART_LOADING:{
        return {
            ...state,
            getCart:{
                
                getloading:true,
                geterror:false,
                getdata:[]
            }
           
        }
    }

    case GET_CART_SUCCESS:{
        return {
            ...state,
            getCart:{
                
                getloading:false,
                geterror:false,
                getdata:payload,
               
            },
           
        }
    }

    case GET_CART_ERROR:{
        return {
            ...state,
            getCart:{
               
                getloading:false,
                geterror:true,
                getdata:[]
            },
          
        }
    }
   default: return {...state}
  }
}

export const addCartReducer=(state=initialState,{type,payload})=>{
    switch(type){
      case ADD_CART_LOADING:{
          return {
              ...state,
             
              
              addCart:{
                ...state,
                 addloading:true,
                  adderror:false,
                  adddata:[] 
              }
          }
      }
  
      case ADD_CART_SUCCESS:{
          return {
              ...state,
              getCart:{
                 
                  getdata:[...state.getCart.getdata,payload]
              },
              addCart:{
                ...state,
                  addloading:false,
                  adderror:false,
                  adddata:payload ,
                  
              }
          }
      }
  
      case ADD_CART_ERROR:{
          return {
              ...state,
             
              addCart:{
                ...state,
                  addloading:false,
                  adderror:true,
                  adddata:[] 
              }
          }
      }
     default: return {...state}
    }
  }

  export const deleteCartReducer=(state=initialState,{type,payload})=>{
    switch(type){
      case DELETE_CART_LOADING:{
          return {
              ...state,
             
              
              deleteCart:{
                ...state,
                  deleteloading:true,
                  deleteerror:false,
                  deletedata:[] 
              }
          }
      }
  
      case DELETE_CART_SUCCESS:{
          return {
              ...state,
              getCart:{
                 
                  getdata:[...state.getCart.getdata,payload]
              },
              deleteCart:{
                ...state,
                  deleteloading:false,
                  deleteerror:false,
                  deletedata:payload 
              }
          }
      }
  
      case DELETE_CART_ERROR:{
          return {
              ...state,
             
              deleteCart:{
                ...state,
                  deleteloading:false,
                  deleteerror:true,
                  deletedata:[] 
              }
          }
      }
     default: return {...state}
    }
  }