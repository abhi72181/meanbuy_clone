import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import {unstable_HistoryRouter} from "react-router-dom"
const RequiredAuth = ({children}) => {
    const {isAuth}=useSelector((state)=>state.auth.authenticate)
    const location=useLocation()
    console.log("location in req",location)
   const from={
    pathname:location.pathname
   }
   

  if(isAuth) return children
  return <Navigate to={"/login"} state={from} replace />
   
     
 
}

export default RequiredAuth