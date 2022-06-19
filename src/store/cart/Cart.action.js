import axios from "axios";
import { ADD_CART_ERROR, ADD_CART_LOADING, ADD_CART_SUCCESS, DELETE_CART_ERROR, DELETE_CART_LOADING, DELETE_CART_SUCCESS, GET_CART_ERROR, GET_CART_LOADING, GET_CART_SUCCESS } from "./Cart.action.types";

export const getDataCart=()=>(dispatch)=>{
    dispatch({type:GET_CART_LOADING});
    axios.get(`https://meanbuybackend.herokuapp.com/cart`).then((r)=>{
        dispatch({type:GET_CART_SUCCESS,payload:r.data})
    }).catch(()=>{
        dispatch({type:GET_CART_ERROR})
    })
    }

    export const addDataCart=(value)=>(dispatch)=>{
        dispatch({type:ADD_CART_LOADING});
        axios.post(`https://meanbuybackend.herokuapp.com/cart`,value).then((r)=>{
            dispatch({type:ADD_CART_SUCCESS,payload:r.data})
        }).catch(()=>{
            dispatch({type:ADD_CART_ERROR})
        })
        }

        export const deleteDataCart=(value)=>(dispatch)=>{
            dispatch({type:DELETE_CART_LOADING});
            axios.delete(`https://meanbuybackend.herokuapp.com/cart/${value}`).then((r)=>{
                dispatch({type:DELETE_CART_SUCCESS,payload:r.data})
            }).catch(()=>{
                dispatch({type:DELETE_CART_ERROR})
            })
            }