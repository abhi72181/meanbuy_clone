import React, { useState } from "react";
import "./Signup.css";
import { Input, Stack } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { login } from "../store/auth/auth.action";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Login = () => {
 const location=useLocation()
  const dispatch=useDispatch()
 const navigate=useNavigate()
  const {isAuth,loading,error,token}=useSelector((state)=>state.auth.authenticate)

 
  const [log, setLog] = useState({
    email: "",
    password: "",
  });

  const handleChangeLogin = (e) => {
    console.log(e.target.name, e.target.value);
    setLog({ ...log, [e.target.name]: e.target.value });
  };

  console.log("reg", token,"loading",loading,"error",error,"isAuth",isAuth);
  const handleLogin = () => {
    if(log.email==""||log.password==""){
    return  alert("Input Box Cannot be Empty")
    }
  dispatch(login(log))
  // navigate(-2 ,{replace:true})
  };


 useEffect(()=>{
if(isAuth  ){
  console.log(location,"location in login")
  // navigate(location.state.pathname || "/" )

  // if(location)
  if(location.state==null){
    navigate("/",{replace:true})

  }
  else{

    navigate(location.state.pathname , {replace:true})
  }
}


 },[isAuth,navigate])



  if(loading){
    return <h2>loading...</h2>
  }

 
  if(error){
    return <h2>something went wrong...</h2>
  }

  return (
    <div className="mainSignup">
      <div className="containerSignup">
        <label>Email Address:</label>
        <Stack spacing={3}>
          <Input
            variant="outline"
            type="text"
            placeholder="Email Address"
            name="email"
            onChange={handleChangeLogin}
          />
        </Stack>
        <br />
        <label>Password:</label>
        <Stack spacing={3}>
          <Input
            variant="outline"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChangeLogin}
          />
        </Stack>

        <br />

        <Button colorScheme="orange" onClick={handleLogin} width="100%">
          Login
        </Button>
        {/* <button onClick={handleSignup}>Register</button> */}
      </div>
    </div>
  );
};

export default Login;
