import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BennerImage1, BennerImage2, BennerImage3 } from "../../assets";
import "../../App.css";
import "./Benner.css";
import { getBanner } from "../../api/banner";

export const Banner = () => {
  const [bannerData, setBannerData] = useState();
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

  const getBannerCall = async () => {
    const res = await getBanner();
    setBannerData(res?.data);
    console.log(res);
  };
  useEffect(() => {
    getBannerCall();
  }, []);

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
        {bannerData?.map((i, index) => (
          <SwiperSlide className="relative flex w-full bg-[#162528] h-[500px]">
            <div className=" flex w-full h-full">
              <div
                className={`w-1/2 ${
                  index / 2 === 0 ? "order-2" : ""
                } flex justify-start items-center`}
              >
                <img
                  className="w-[90%] h-[90%] object-center"
                  src={`data:image/png;base64,${i.imageId?.image}`}
                  alt="Banner"
                />
              </div>
              <div
                className={` w-1/2   justify-center  flex  ${
                  index / 2 === 0 ? " order-1" : "  "
                } lg:top-[20%] flex  flex-col delay-700 transform duration-700  -translate-x-[2%] ease-in-out  md:p-4 ${
                  activeIndex === index ? "animate-slideIn" : ""
                }`}
              >
                <div className="flex flex-col ml-[15%]">
                  <h1 className="font-mono text-white text-[10px] md:text-2xl 2xl:text-5xl italic">
                    {i?.bannerh1}
                  </h1>
                  <h1 className="text-white md:text-6xl  font-extrabold md:mt-5 2xl:text-9xl heading">
                    {i?.bannerh2}
                  </h1>
                  <div className="flex md:mt-6">
                    <h1 className="lg:border-r-2 heading md:text-5xl font-bold border-amber-500 text-amber-500 pr-3 2xl:text-9xl">
                      Sale
                    </h1>
                    <div className="md:px-2 text-white hidden lg:flex flex-col justify-start items-start 2xl:text-5xl">
                      <h1 className="italic">{i.bannerh3}</h1>
                    </div>
                  </div>
                  <div className="md:pt-5">
                    <button className="md:px-6 px-2 italic md:py-2 bg-amber-500 text-black font-bold text-[9px] md:text-xl 2xl:text-5xl">
                      {i.bannerh4}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
