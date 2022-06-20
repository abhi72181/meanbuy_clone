import { Box, Button, Divider, Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDataWatches, getDataWatchFilterandSort } from '../store/getData/action';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import "../pages/Home.css"
import "./Watches.css"
import { useState } from 'react';
import { addDataCart, getDataCart } from '../store/cart/Cart.action';
const Watches = () => {
    const [brand,setBrand]=useState("")
    const [sort,setSort]=useState("")
    const [orders,setOrders]=useState("")
    const dispatch=useDispatch()
    const [filteredData,setFilteredData]=useState({
        brand:"",
       sort:"",
       order:""
    })
    // const { watchloading, watcherror, watchdata } = useSelector(
    //     (state) => state.getDataWatch.getDataWatches
    //   );

      const {data}=useSelector((state)=>state.getDataWatchesFilterandSort.getDataWatchesFilterandSort)
     
      // const {getloading,geterror,getdata}=useSelector((state)=>state.getCartData.getCart)
      // const {addloading,adderror,adddata}=useSelector((state)=>state.addCartData.addCart)
      // const {deleteerror,deletedata,deleteloading}=useSelector((state)=>state.deleteCartData.deleteCart)
      const handleCheckbox=(e)=>{
        e.preventDefault()
        if(e.target.checked){
            setFilteredData({...filteredData,[e.target.name]:e.target.value})
        }
        else{
            setFilteredData({...filteredData,[e.target.name]:""})
        }
      
      }

      console.log("brand",filteredData.brand,"sort",filteredData.sort,"order",filteredData.order)
     

    
     
      const handleFiltering=()=>{
       setBrand(filteredData.brand)
       setOrders(filteredData.order)
       setSort(filteredData.sort)
      }

      useEffect(() => {
      
          dispatch(getDataWatchFilterandSort("mensWatches","","",""));
        
       
      }, []);


     

      useEffect(() => {
        
          dispatch(getDataWatchFilterandSort("mensWatches",brand,sort,orders));
        
        
      }, [brand,sort,orders]);

      console.log(data,"need")

    //   if(watchloading){
    //     return <h2>loading...</h2>
    //   }
    //   if(watcherror){
    //     return <h2>something went wrong...</h2>
    //   }
    const handleAddtoCart=(e)=>{
      dispatch(addDataCart(e))
    }

    // useEffect(()=>{
    //   dispatch(getDataCart())
    // },[addloading,deleteloading])
  return (
    <div >
         <h2 className="headerslider">Watches</h2>
      <Divider />
      <div className='mainWatchContainer'>
     
    
     <div className='watchAccordion'>

<Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Filter
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <CheckboxGroup colorScheme='green' >
  <Stack >
    <Checkbox value='Titan' name='brand' onChange={handleCheckbox}>Titan</Checkbox>
    <Checkbox value='Rolex' name='brand' onChange={handleCheckbox}>Rolex</Checkbox>
    <Checkbox value='Fasttrack' name='brand' onChange={handleCheckbox}>Fast-track</Checkbox>
    
  </Stack>
</CheckboxGroup>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Sort
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <CheckboxGroup colorScheme='green' >
  <Stack >
    <Checkbox value='price' name='sort' onChange={handleCheckbox}>Price</Checkbox>
    <Checkbox value='rating' name='sort' onChange={handleCheckbox}>Rating</Checkbox>
    
  </Stack>
</CheckboxGroup>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Order
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <CheckboxGroup colorScheme='green' >
  <Stack >
    <Checkbox value='asc' name='order' onChange={handleCheckbox}>Ascending</Checkbox>
    <Checkbox value='desc' name='order' onChange={handleCheckbox}>Descending</Checkbox>
    </Stack>
    </CheckboxGroup>
    </AccordionPanel>
  </AccordionItem>
</Accordion>

<Button colorScheme="orange" onClick={handleFiltering}>Apply</Button>
</div>

      <div className='gridShow'>
      {data.map((e)=>(
        
            
        
        <div className="flexColumn">
                <img src={e.image} alt="" className="imgslider" />

                <div className="nameslider">{e.name}</div>

                <div className="ratingslider">
                  <div className="insideratingslider">{e.rating}/5</div>
                </div>

                <div className="watchflex">
                  <div className="watchpriceslider">₹{e.price}</div>
                  <div className="watchparaslider">{e.para}</div>
                </div>
                <div>
                    <Button colorScheme="orange" className='AddbtnWatch' onClick={()=>handleAddtoCart(e)} >Add to Cart</Button>
                </div>
                <br /><br />
              </div>

              
      ))}
      </div>
      </div>
     
    </div>
  )
}

export default Watches