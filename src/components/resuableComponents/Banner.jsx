import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BennerImage1, BennerImage2, BennerImage3 } from "../../assets";
import "../../App.css"; // Make sure this imports the CSS with the Swiper container styles


export const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle slide change
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  useEffect(() => {
    // Remove animation class after animation ends
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(".animate-slide-in");
      elements.forEach((el) => {
        el.classList.remove("animate-slide-in");
      });
    }, 1000); // Match this duration with your animation duration

    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div className="swiper-container">
      <Swiper

        effect="fade"
        autoplay={{
          delay: 3500,
        }}
        speed={1000}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide className="relative w-full h-full">
          <img
            className="w-full h-full object-cover"
            src={benner}
            alt="Banner"
          />
          <div
            className={` w-2/5  absolute top-[8%] lg:top-[25%] lg:right-[5%] right-0 flex  flex-col delay-700 transform duration-700  -translate-x-[2%] ease-in-out  md:p-4 ${
              activeIndex === 0 ? "animate-slide-in" : ""
            }`}
          >
            <h1 className="font-mono text-white text-[10px] md:text-2xl">
              pandant light
            </h1>
            <h1 className="text-white md:text-6xl  font-extrabold md:mt-5 ">
              Spring+
            </h1>
            <div className="flex md:mt-10">
              <h1 className="lg:border-r-2 md:text-5xl font-bold border-amber-400 text-amber-400 pr-3">
                Sale
              </h1>
              <div className="md:px-2 text-white hidden lg:flex flex-col justify-start items-start">
                <h1 className="">lorem ipsum eiusmod</h1>
                <button className="">Shop Now</button>
              </div>
            </div>
            <div className="md:pt-5">
              <button className="md:px-6 px-2 md:py-2 bg-amber-400 text-black font-bold text-[9px] md:text-xl">
                Save 20% OFF
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-full">
          <img
            className="w-full h-full object-cover"
            src={benner1}
            alt="Banner"
          />
          <div
            className={` w-2/5  absolute top-[8%] lg:top-[25%] lg:right-[5%] right-0 flex  flex-col  delay-700 transform duration-700  -translate-x-[2%] ease-in-out md:p-4 ${
              activeIndex === 1 ? "animate-slide-in" : ""
            }`}
          >
            <h1 className="font-mono text-white text-[10px] md:text-2xl">
              pandant light
            </h1>
            <h1 className="text-white md:text-6xl  font-extrabold md:mt-5 ">
              Spring+
            </h1>
            <div className="flex md:mt-10">
              <h1 className="lg:border-r-2 md:text-5xl font-bold border-amber-400 text-amber-400 pr-3">
                Sale
              </h1>
              <div className="md:px-2 text-white hidden lg:flex flex-col items-start">
                <h1 className="">lorem ipsum eiusmod</h1>
                <button className="">Shop Now</button>
              </div>
            </div>
            <div className="md:pt-5">
              <button className="md:px-6 px-2 md:py-2 bg-amber-400 text-black font-bold text-[9px] md:text-xl">
                Save 20% OFF
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-full">
          <img
            className="w-full h-full object-cover"
            src={benner2}
            alt="Banner"
          />
          <div
            className={` w-2/5  absolute top-[8%] lg:top-[25%] left-[10%]  flex  flex-col delay-700 transform duration-700  -translate-x-[2%] ease-in-out  md:p-4 ${
              activeIndex === 2 ? "animate-slide-in" : ""
            }`}
          >
            <h1 className="font-mono text-white text-[10px] md:text-2xl">
              pandant light
            </h1>
            <h1 className="text-white md:text-6xl  font-extrabold md:mt-5 ">
              Spring+
            </h1>
            <div className="flex md:mt-10">
              <h1 className="lg:border-r-2 md:text-5xl font-bold border-amber-400 text-amber-400 pr-3">
                Sale
              </h1>
              <div className="md:px-2 text-white hidden lg:flex flex-col items-start">
                <h1 className="">lorem ipsum eiusmod</h1>
                <button className="">Shop Now</button>
              </div>
            </div>
            <div className="md:pt-5">
              <button className="md:px-6 px-2 md:py-2 bg-amber-400 text-black font-bold text-[9px] md:text-xl">
                Save 20% OFF
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
