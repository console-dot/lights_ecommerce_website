import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { benner2 } from "../../assets";
import { TestimonialsCard } from "../resuableComponents";
export const Testimonials = () => {
  const testimonialsData = [
    {
      description:
        "Flowbite is just awesome. It contains tons of predesignedcomponents and pages starting from login screen to complexdashboard. Perfect choice for your next SaaS application.",
      image: benner2,
      name: "hello ",
    },
    {
      description:
        "Flowbite is just awesome. It contains tons of predesignedcomponents and pages starting from login screen to complexdashboard. Perfect choice for your next SaaS application.",
      image: benner2,
      name: "hello ",
    },
    {
      description:
        "Flowbite is just awesome. It contains tons of predesignedcomponents and pages starting from login screen to complexdashboard. Perfect choice for your next SaaS application.",
      image: benner2,
      name: "hello ",
    },
    {
      description:
        "Flowbite is just awesome. It contains tons of predesignedcomponents and pages starting from login screen to complexdashboard. Perfect choice for your next SaaS application.",
      image: benner2,
      name: "hello ",
    },
  ];

  return (
    <div div className="bg-slate-100 p-4 md:p-10 flex justify-center items-center">
      <div className="container ">
        <div class="ten pb-10">
          <h1 class="text-center text-4xl md:text-5xl uppercase text-gray-800 tracking-wide font-playfair font-normal">
            Testimonials
          </h1>
        </div>

        <div className="w-full h-full">
          <Swiper
            breakpoints={{
              10: {
                slidesPerView: 1,
                centeredSlides: true,
              },

              320: {
                slidesPerView: 1,
                navigation: false, // Hide navigation for viewports <= 640px
              },
              640: {
                centeredSlides: false,
                slidesPerView: 1,
                navigation: false, // Hide navigation for viewports <= 640px
              },
              1024: {
                slidesPerView: 2,
                navigation: true, // Hide navigation for viewports <= 640px
              },
              1100: {
                slidesPerView: 3,
                navigation: true, // Hide navigation for viewports <= 640px
              },
            }}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            speed={1000}
            slidesPerView={3}
            spaceBetween={30}
            className="mySwiper"
          >
            {testimonialsData?.map((item, index) => (
              <SwiperSlide
                key={index}
                className="w-[500px] "
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TestimonialsCard data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
