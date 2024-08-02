import React from "react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import '../../App.css'
// Import Swiper styles
import "swiper/css";

import { benner } from "../../assets";

export const Banner = () => {
  return (
    <div>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        speed={1000}
        navigation
        pagination={{ clickable: true }} // Enable pagination dots
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="w-full ">
          <div className="w-full h-full">
            <img className="w-full h-full" src={benner} alt="Banner" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full ">
          <div className="w-full h-full">
            <img className="w-full h-full" src={benner} alt="Banner" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full ">
          <div className="w-full h-full">
            <img className="w-full h-full" src={benner} alt="Banner" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full ">
          <div className="w-full h-full">
            <img className="w-full h-full" src={benner} alt="Banner" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
