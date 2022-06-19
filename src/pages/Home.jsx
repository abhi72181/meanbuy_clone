// import React from "react";
import { Slideshow } from "./Slideshow";
import axios from "axios";
// import { useState } from "react";
import { useEffect } from "react";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Divider } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/navigation";
import "swiper/css/bundle";
import "./Home.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import {
  getDataApi,
  getDataBottles,
  getDataChargers,
  getDataElectronics,
  getDataMobile,
  getDataNewarrivals,
  getDataSpeakers,
  getDataToy,
  getDataWatches,
} from "../store/getData/action";
const Home = () => {
  const [dataHome, setDataHome] = useState([]);
  const dispatch = useDispatch();

  const { watchloading, watcherror, watchdata } = useSelector(
    (state) => state.getDataWatch.getDataWatches
  );
  const { electronicsloading, electronicserror, electronicsdata } = useSelector(
    (state) => state.getDataElectronics.getDataElectronics
  );
  const { mobileloading, mobileerror, mobiledata } = useSelector(
    (state) => state.getDataMobile.getDataMobile
  );
  const { toyloading, toyerror, toydata } = useSelector(
    (state) => state.getDataToy.getDataToy
  );
  const { bottlesloading, bottleserror, bottlesdata } = useSelector(
    (state) => state.getDataBottles.getDataBottles
  );
  const { speakersloading, speakerserror, speakersdata } = useSelector(
    (state) => state.getDataSpeakers.getDataSpeakers
  );
  const { chargersloading, chargerserror, chargersdata } = useSelector(
    (state) => state.getDataChargers.getDataChargers
  );

  const { newarrivalsloading, newarrivalserror, newarrivalsdata } = useSelector(
    (state) => state.getDataNewarrivals.getDataNewarrivals
  );



  useEffect(() => {
    if(electronicsdata.length==0){
      dispatch(getDataElectronics("electronics"));
    }
    
  }, []);

  useEffect(() => {
    if(watchdata.length==0){
      dispatch(getDataWatches("mensWatches"));
    }
    
  }, []);

  useEffect(() => {
    if(mobiledata.length==0){
      dispatch(getDataMobile("mobileAccess"));
    }
    
  }, []);

  useEffect(() => {
    if(toydata.length==0){
      dispatch(getDataToy("toy"));
    }
    
  }, []);

  useEffect(() => {
    if(bottlesdata.length==0){
      dispatch(getDataBottles("waterBottles"));
    }
    
  }, []);

  useEffect(() => {
    if(speakersdata.length==0){
      dispatch(getDataSpeakers("wirelessSpeakers "));
    }
   
  }, []);

  useEffect(() => {
    
    if(chargersdata.length==0){
      dispatch(getDataChargers("wirelessChargers "));
    }
    
  }, []);

  useEffect(() => {
    // if(newarrivalsdata.length==0){
      dispatch(getDataNewarrivals("newArrivals "));
    // }
    
  }, []);

  if (watchloading || electronicsloading || mobileloading ||toyloading||bottlesloading||speakersloading || chargersloading || newarrivalsloading) {
    return <h1>loading...</h1>;
  }
  if (watcherror || electronicserror || mobileerror||toyerror||bottleserror||speakerserror||newarrivalserror|| chargerserror) {
    return <h1>something went wrong...</h1>;
  }
  return (
    <div>
      <br />
      <Slideshow />
      {/* <div className="flexheaderslider"> */}
      <h2 className="headerslider">Watches</h2>
      <Divider />
      {/* </div> */}

      <>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          
          pagination={{
            clickable: true,
          }}
          // navigation={{clickable:true}}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}

          modules={[Pagination]}
          className="mySwiper"
        >
          {watchdata.map((e) => (
            <SwiperSlide>
              <div className="flexColumn">
                <img src={e.image} alt="" className="imgslider" />

                <div className="nameslider">{e.name}</div>

                <div className="ratingslider">
                  <div className="insideratingslider">{e.rating}/5</div>
                </div>

                <div className="flex">
                  <div className="priceslider">₹{e.price}</div>
                  <div className="paraslider">{e.para}</div>
                </div>
              </div>
              {/* <img src={e.image} alt="" /> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </>

      <h2 className="headerslider">Electronics</h2>
      <Divider />
      <>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          // navigation={{clickable:true}}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}

          modules={[Pagination]}
          className="mySwiper"
        >
          {electronicsdata.map((e) => (
            <SwiperSlide>
              <div className="flexColumn">
                <img src={e.image} alt="" className="imgslider" />

                <div className="nameslider">{e.name}</div>

                <div className="ratingslider">
                  <div className="insideratingslider">{e.rating}/5</div>
                </div>

                <div className="flex">
                  <div className="priceslider">₹{e.price}</div>
                  <div className="paraslider">{e.para}</div>
                </div>
              </div>
              {/* <img src={e.image} alt="" /> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </>

      


      <h2 className="headerslider">Mobile</h2>
      <Divider />
      <>
        <Swiper
        
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          // navigation={{clickable:true}}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}

          modules={[Pagination]}
          className="mySwiper"
        >
          {mobiledata.map((e) => (
            <SwiperSlide >
              <div className="flexColumn">
                <img src={e.image}  alt="" className="imgslider" />

                <div className="nameslider">{e.name}</div>

                <div className="ratingslider">
                  <div className="insideratingslider">{e.rating}/5</div>
                </div>

                <div className="flex">
                  <div className="priceslider">₹{e.price}</div>
                  <div className="paraslider">{e.para}</div>
                </div>
              </div>
              {/* <img src={e.image} alt="" /> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </>

    
      <h2 className="headerslider">Toys</h2>
      <Divider />
      <>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          // navigation={{clickable:true}}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}

          modules={[Pagination]}
          className="mySwiper"
        >
          {toydata.map((e) => (
            <SwiperSlide>
              <div className="flexColumn">
                <img src={e.image} alt="" className="imgslider" />

                <div className="nameslider">{e.name}</div>

                <div className="ratingslider">
                  <div className="insideratingslider">{e.rating}/5</div>
                </div>

                <div className="flex">
                  <div className="priceslider">₹{e.price}</div>
                  <div className="paraslider">{e.para}</div>
                </div>
              </div>
              {/* <img src={e.image} alt="" /> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </>

      <h2 className="headerslider">Water Bottles</h2>
      <Divider />
      <>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          // navigation={{clickable:true}}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}

          modules={[Pagination]}
          className="mySwiper"
        >
          {bottlesdata.map((e) => (
            <SwiperSlide>
              <div className="flexColumn">
                <img src={e.image} alt="" className="imgslider" />

                <div className="nameslider">{e.name}</div>

                <div className="ratingslider">
                  <div className="insideratingslider">{e.rating}/5</div>
                </div>

                <div className="flex">
                  <div className="priceslider">₹{e.price}</div>
                  <div className="paraslider">{e.para}</div>
                </div>
              </div>
              {/* <img src={e.image} alt="" /> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </>

      <h2 className="headerslider">Wireless Speakers</h2>
      <Divider />
      <>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          // navigation={{clickable:true}}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}

          modules={[Pagination]}
          className="mySwiper"
        >
          {speakersdata.map((e) => (
            <SwiperSlide>
              <div className="flexColumn">
                <img src={e.image} alt="" className="imgslider" />

                <div className="nameslider">{e.name}</div>

                <div className="ratingslider">
                  <div className="insideratingslider">{e.rating}/5</div>
                </div>

                <div className="flex">
                  <div className="priceslider">₹{e.price}</div>
                  <div className="paraslider">{e.para}</div>
                </div>
              </div>
              {/* <img src={e.image} alt="" /> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </>

      <h2 className="headerslider">Wireless Chargers</h2>
      <Divider />
      <>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          // navigation={{clickable:true}}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}

          modules={[Pagination]}
          className="mySwiper"
        >
          {chargersdata.map((e) => (
            <SwiperSlide>
              <div className="flexColumn">
                <img src={e.image} alt="" className="imgslider" />

                <div className="nameslider">{e.name}</div>

                <div className="ratingslider">
                  <div className="insideratingslider">{e.rating}/5</div>
                </div>

                <div className="flex">
                  <div className="priceslider">₹{e.price}</div>
                  <div className="paraslider">{e.para}</div>
                </div>
              </div>
              {/* <img src={e.image} alt="" /> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </>

      <h2 className="headerslider">New Arrivals</h2>
      <Divider />
      <>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          // navigation={{clickable:true}}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}

          modules={[Pagination]}
          className="mySwiper"
        >
          {newarrivalsdata.map((e) => (
            <SwiperSlide>
              <div className="flexColumn">
                <img src={e.image} alt="" className="imgslider" />

                <div className="nameslider">{e.name}</div>

                <div className="ratingslider">
                  <div className="insideratingslider">{e.rating}/5</div>
                </div>

                <div className="flex">
                  <div className="priceslider">₹{e.price}</div>
                  <div className="paraslider">{e.para}</div>
                </div>
              </div>
              {/* <img src={e.image} alt="" /> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </>
     <br /><br />
    </div>
  );
};

export default Home;
