import React, { useEffect, useState } from 'react'
import { Button, Container } from '@chakra-ui/react'
import "./Cart.css"
import { useDispatch, useSelector } from 'react-redux'
import { deleteDataCart, getDataCart } from '../store/cart/Cart.action'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [totalprice,setTotalprice]=useState(0)
  let getdatad=useSelector((state)=>state.getCartData.getCart)
  const {getdata,getloading,geterror}=getdatad
  // const {getloading,geterror,getdata}=useSelector((state)=>state.getCartData.getCart)
  const {addloading,adderror,adddata}=useSelector((state)=>state.addCartData.addCart)
  const {deleteerror,deletedata,deleteloading}=useSelector((state)=>state.deleteCartData.deleteCart)
  
const handleDelete=(id)=>{
  dispatch(deleteDataCart(id))
}
    useEffect(()=>{
   dispatch(getDataCart())
  //  console.log(gettingCart,"getdata");
  console.log("total",totalprice)
    },[deleteloading])
    
    const gotoCheckout=()=>{
      navigate("/checkout")
    }
    useEffect(()=>{
      let totalPrice=0
      // getdata.map((e)=>(
      //   totalPrice=totalPrice+e.price
        
      //   console.log(e,"eprice")
      //  ))
      getdata.map((e)=>{
        totalPrice=totalPrice+e.price
        
         console.log(e.price,"eprice")
      })
       setTotalprice(totalPrice)
    //  dispatch(getDataCart())
    },[addloading,deleteloading,getdatad])
  

    if(getloading||addloading){
      <h1>loading...</h1>
    }
    if(geterror||adderror||deleteerror){
      <h1>something went wrong</h1>
    }
  if(getdata.length<1){
    return <h1 style={{fontSize:"30px", fontWeight:"600", textAlign:"center"}}>Cart is Empty</h1>
  }

  return (
     <div className='maincartcontainer'>

    <div className='cartcontainer'>
  <div className='upcartcontainer'>
   <div className='firstupcartcontainer'>
   <p style={{fontSize:"20px", fontWeight:"500"}}>Product Details</p>
   </div>
   <div className='secondupcartcontainer'>
   <p style={{fontSize:"20px", fontWeight:"500"}}>Our Price</p>
   <p style={{fontSize:"20px", fontWeight:"500"}}>Your Price</p>
   </div>
  </div>
  {getdata.map((e)=>(
    <div className='downcartcontainer'>
  
    <div className='firstdowncartcontainer'>
      <img src={e.image} alt="img" style={{width:"150px", marginRight:"10%"}} />
      <div>
        <h3 style={{fontSize:"18px",fontWeight:"700"}}>{e.name}</h3>
        
        <select style={{width:"100px",marginTop:"10px"}} name="Quantity" id="">
          <option value="">Qty</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>

        </select>
        <p style={{marginTop:"10px",fontSize:"20px", fontWeight:"400",color:"green"}}>{e.para}</p>
        
        <Button colorScheme="orange" style={{marginTop:"10px",width:"100px"}} onClick={()=>handleDelete(e.id)}>Delete</Button>
      </div>
    </div>
    <div className='seconddowncartcontainer'>
      <p style={{textDecoration:"line-through",marginTop:"70px",fontSize:"20px" ,fontWeight:"500"}}>{e.strikeprice}</p>
      <p style={{marginTop:"70px",fontSize:"20px" ,fontWeight:"500"}}>{e.price} </p>
    </div>
   </div>
  
 
    ))}
  </div>
 <div className='cartcheckoutBox'>
  <div style={{fontSize:"20px", fontWeight:"500", textAlign:"center",padding:"15px"}}>Checkout Details</div>
  <div className='insidecartcheckoutbox'>
   <div style={{color:"darkgreen",fontSize:"20px", fontWeight:"500"}}>Total-Items:<span style={{color:"maroon", fontSize:"20px", fontWeight:"500"}}> {getdata.length}</span></div>
   <div style={{color:"darkgreen", fontSize:"20px", fontWeight:"500"}}>Sub-Total:<span style={{color:"darkblue", fontSize:"20px", fontWeight:"500"}}>{totalprice}</span></div>
   <div style={{color:"darkgreen", fontSize:"20px", fontWeight:"500"}}>SHIPPING:FREE</div>
   <br />
   <div style={{color:"darkgreen",fontSize:"20px", fontWeight:"500"}}>Cart-Total:<span style={{color:"maroon", fontSize:"20px", fontWeight:"500"}}>{totalprice}</span></div>
   <br />
   <Button style={{marginBottom:"50px"}} colorScheme="orange" onClick={gotoCheckout}>CHECKOUT NOW</Button>
   </div>
 </div>
 </div>

   
  )
}

export default Cart