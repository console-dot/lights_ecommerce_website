import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BennerImage1, BennerImage2, BennerImage3 } from "../../assets";
import "../../App.css"; // Make sure this imports the CSS with the Swiper container styles

export const Banner = () => {
  return (
    <div className="swiper-container">
      <Swiper
        centeredSlides={true}
        effect={"fade"}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={700}
        pagination={{ clickable: true }}
        modules={[EffectFade, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              className="w-full h-full object-cover"
              src={BennerImage1}
              alt="Banner"
            />
            <div className="absolute w-1/2 h-full top-0 right-0 z-30 flex justify-center items-center">
              <div className="w-[35%] relative " style={{ animation: "mymove 5s infinite"}}>
                <h1 className="text-4xl text-white font-serif">
                  pendant light
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover"
              src={BennerImage2}
              alt="Banner"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover"
              src={BennerImage3}
              alt="Banner"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
