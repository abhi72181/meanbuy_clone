import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './pages/Footer';
import Home from './pages/Home';
import RequiredAuth from './pages/hoc/RequiredAuth';
import { Route,Routes, useLocation, useNavigate } from 'react-router-dom';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Watches from './products/Watches';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import Thanks from './pages/Thanks';
// import WirelessSpeakers from './products/WirelessSpeakers';
function App() {
  const navigate=useNavigate()
  const location=useLocation()
  const {isAuth,loading,error,token}=useSelector((state)=>state.auth.authenticate)
  // console.log("location in app",location)
  // useEffect(()=>{
  //   if(isAuth){
  //   console.log(location,"location in App")
  //   if(location.state!=null){
  //     navigate(location.state.pathname || "/cart")
  //   }
    
     
  //   }
  //    },[isAuth,navigate])

  
//  useEffect(()=>{
//   if(isAuth){
//     console.log(location,"location in app")
//     navigate(location.state.pathname || "/" , {replace:true})
//     // if(location.state.pathname==null){
//     //   navigate("/",{replace:true})
  
//     // }
//     // else{
  
//     //   navigate(location.state.pathname || location.pathname, {replace:true})
//     // }
//   }
//    },[isAuth,token])
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path='/signup' element={<Signup />} />
          <Route path='/cart' element={<RequiredAuth><Cart /></RequiredAuth>} />
          <Route path='/watches' element={<Watches />} />
          {/* <Route path='/wirelessSpeakers' element={<WirelessSpeakers />} /> */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/thanks" element={<Thanks />} />
      </Routes>
      <Footer />
      <br />
    </div>
  );
}

export default App;

// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "./swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./styles.css";

// // import required modules
// import { Autoplay, Pagination, Navigation } from "swiper";

// export default function App() {
//   return (
//     <>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

