import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BennerImage1, BennerImage2, BennerImage3 } from "../../assets";
import "../../App.css";
import "./Benner.css"

export const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

 const handleSlideChange = (swiper) => {
  setActiveIndex(swiper.activeIndex);
};

  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(".animate-slide-in");
      elements.forEach((el) => {
        el.classList.remove("animate-slide-in");
      });
    }, 1000); // Ensure this matches the animation duration
  
    return () => clearTimeout(timer);
  }, [activeIndex]);
  

  return (
    <div className="swiper-container md:h-[500px]">
      <Swiper
        effect="fade"
        autoplay={{
          delay: 3500,
        }}
        speed={1000}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        className="mySwiper w-full h-[100%]"
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide className="relative w-full h-full">
          <img
            className="w-full h-full object-cover"
            src={BennerImage1}
            alt="Banner"
          />
          <div
            className={` w-2/5  absolute top-[15%] lg:top-[20%] lg:right-[5%] right-0 flex  flex-col delay-700 transform duration-700  -translate-x-[2%] ease-in-out  md:p-4 ${
              activeIndex === 0 ? "animate-slideIn" : ""
            }`}
          >
            <h1 className="font-mono text-white text-[10px] md:text-2xl 2xl:text-5xl italic">
              pandant light
            </h1>
            <h1 className="text-white md:text-6xl  font-extrabold md:mt-5 2xl:text-9xl heading">
              Spring+
            </h1>
            <div className="flex md:mt-6">
              <h1 className="lg:border-r-2 heading md:text-5xl font-bold border-amber-500 text-amber-500 pr-3 2xl:text-9xl">
                Sale
              </h1>
              <div className="md:px-2 text-white hidden lg:flex flex-col justify-start items-start 2xl:text-5xl">
                <h1 className="italic">lorem ipsum eiusmod</h1>
                <button className="italic">Shop Now</button>
              </div>
            </div>
            <div className="md:pt-5">
              <button className="md:px-6 px-2 italic md:py-2 bg-amber-500 text-black font-bold text-[9px] md:text-xl 2xl:text-5xl">
                Save 20% OFF
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-full">
          <img
            className="w-full h-full object-cover"
            src={BennerImage2}
            alt="Banner"
          />
          <div
            className={` w-2/5  absolute top-[15%] lg:top-[20%] lg:right-[5%] right-0 flex  flex-col  delay-700 transform duration-700  -translate-x-[2%] ease-in-out md:p-4 ${
              activeIndex === 1 ? "animate-slideIn" : ""
            }`}
          >
            <h1 className="font-mono text-white text-[10px] md:text-2xl 2xl:text-5xl italic">
              pandant light
            </h1>
            <h1 className="text-white md:text-6xl heading font-extrabold md:mt-5  2xl:text-9xl">
              Spring+
            </h1>
            <div className="flex md:mt-6">
              <h1 className="lg:border-r-2 md:text-5xl font-bold heading border-amber-500 text-amber-500 pr-3 2xl:text-9xl">
                Sale
              </h1>
              <div className="md:px-2 text-white hidden lg:flex flex-col items-start 2xl:text-5xl">
                <h1 className="italic">lorem ipsum eiusmod</h1>
                <button className="italic">Shop Now</button>
              </div>
            </div>
            <div className="md:pt-5">
              <button className="md:px-6 px-2 italic md:py-2 bg-amber-500 text-black font-bold text-[9px] md:text-xl 2xl:text-5xl">
                Save 20% OFF
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-full">
          <img
            className="w-full h-full object-cover"
            src={BennerImage3}
            alt="Banner"
          />
          <div
            className={` w-2/5  absolute top-[15%] lg:top-[20%] left-[10%]  flex  flex-col delay-700 transform duration-700  -translate-x-[2%] ease-in-out  md:p-4 ${
              activeIndex === 2 ? "animate-slideIn" : ""
            }`}
          >
            <h1 className="font-mono text-white text-[10px] md:text-2xl 2xl:text-5xl italic">
              pandant light
            </h1>
            <h1 className="heading text-white md:text-6xl  font-extrabold md:mt-5 2xl:text-9xl">
              Spring+
            </h1>
            <div className="flex md:mt-6">
              <h1 className="lg:border-r-2 heading md:text-5xl font-bold border-amber-500 text-amber-500 pr-3 2xl:text-9xl">
                Sale
              </h1>
              <div className="md:px-2 text-white hidden lg:flex flex-col items-start 2xl:text-5xl">
                <h1 className="italic">lorem ipsum eiusmod</h1>
                <button className="italic">Shop Now</button>
              </div>
            </div>
            <div className="md:pt-5">
              <button className="md:px-6 italic px-2 md:py-2 bg-amber-500 text-black font-bold text-[9px] md:text-xl 2xl:text-5xl">
                Save 20% OFF
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
