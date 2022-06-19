import React, { useState } from 'react'
import "./Signup.css"
import { Input, Stack } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
  const navigate=useNavigate()
  const [tokens,setTokens]=useState("")
  const [register,setRegister]=useState({
    email:"",
    password:"",
    confirmpassword:""
  })

  const handleChangeSignup=(e)=>{
    console.log(e.target.name,e.target.value)
    setRegister({...register,[e.target.name]:e.target.value})
  }

  async function registering(){
   let dataRegister=await axios.post("https://reqres.in/api/register",register)
   dataRegister=dataRegister.data
   setTokens(dataRegister)
  }
  console.log("reg",tokens)
  const handleSignup=()=>{
    
    if(register.email && register.password && register.confirmpassword){
      if(register.password == register.confirmpassword){
        registering()
          if(tokens){
            navigate("/login")
          }
         
        }
        else{
          alert("password and confirm password cannot be different")
        }
       
      }
      else{
        alert("input cannot be empty")
      }
    
  }

  useEffect(()=>{
   
      if(tokens){
        navigate("/login")
      }
  },[tokens])
  return (
    <div className='mainSignup'>
    <div className='containerSignup'> 
    <label >Email Address:</label>
    <Stack spacing={3}>
  <Input variant='outline' type="text" placeholder='Email Address' name='email' onChange={handleChangeSignup} />
  
</Stack>
      <br />
      <label >Password:</label>
      <Stack spacing={3}>
  <Input variant='outline' type="password" placeholder='Password' name='password' onChange={handleChangeSignup} />
  
</Stack>
  
<br />
<label >Confirm Password:</label>
    <Stack spacing={3}>
  <Input variant='outline' type="password" placeholder='Password' name='confirmpassword' onChange={handleChangeSignup} />
  
</Stack>
      
      <br />
     
      <Button colorScheme='orange' onClick={handleSignup} width="100%" >Register</Button>
      {/* <button onClick={handleSignup}>Register</button> */}
    </div>
    </div>
  )
}

export default Signup