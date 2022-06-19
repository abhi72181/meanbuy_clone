import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slideshow.css";
import "swiper/css/bundle";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export const Slideshow=()=> {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://d64lkarmo2mrq.cloudfront.net/img/home/fathersdaybanner.webp" alt="slide1" /></SwiperSlide>
        <SwiperSlide><img src="https://d64lkarmo2mrq.cloudfront.net/img/home/womenswatches2022.webp" alt="slide2" /></SwiperSlide>
        <SwiperSlide><img src="https://d64lkarmo2mrq.cloudfront.net/img/home/flash-sale-banner-01.webp" alt="slide3" /></SwiperSlide>
        <SwiperSlide><img src="https://d64lkarmo2mrq.cloudfront.net/img/home/nordic2022.webp" alt="slide4" /></SwiperSlide>
        <SwiperSlide><img src="https://d64lkarmo2mrq.cloudfront.net/img/home/bluetooth2022.webp" alt="slide5" /></SwiperSlide>
       
      </Swiper>
    </>
  );
}
