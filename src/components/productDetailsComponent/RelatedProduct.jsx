import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ProductCard } from "../resuableComponents";

export const RelatedProduct = ({productData}) => {
    
  return (
    <>
      {/* related product */}
      <div className="p-4 ">
        <h1 className="text-3xl font-semibold md:py-10">Related Product</h1>
        <Swiper
          breakpoints={{
            10: {
              slidesPerView: 1,
              centeredSlides: true,
            },

            320: {
              slidesPerView: 1,
              navigation: false // Hide navigation for viewports <= 640px
            },
            640: {
              centeredSlides: false,
              slidesPerView: 2,
              navigation: false // Hide navigation for viewports <= 640px
            },
            1024: {
              slidesPerView: 3,
              navigation: true // Hide navigation for viewports <= 640px
            },
            1100: {
              slidesPerView: 4,
              navigation: true // Hide navigation for viewports <= 640px
            },
          }}
          modules={[Navigation , Pagination]}
          className="mySwiper"
        >
          {productData?.map((product, index) => (
            <SwiperSlide key={index} className="w-full justify-center items-center p-4 md:py-4" style={
              {display:'flex'}
            }>
              <ProductCard data={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
