import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { user1, user2, user3 } from "../../assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdFormatQuote } from "react-icons/md";
import AddCardContext from "../../context/addCart/AddCardContext";
import { getAllFile } from "../../api/file";
import { getTestimonial } from "../../api/testmonials";

export const TestimonialsCard = () => {
  const [allFile, setAllFile] = useState();
  const [testimonialData, setTestmonialsData] = useState();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    getTestimonial().then((res) => {
      if (res) {
        setTestmonialsData(res?.data);
      }
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          speed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          infinite: true,
          speed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: true,
          speed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          arrows: false,
        },
      },
    ],
  };
  console.log(testimonialData);
  return (
    <div className="w-full h-auto p-5 cursor-pointer">
      <Slider {...settings}>
        {testimonialData?.map((item, index) => (
          <div key={index}>
            <div className="flex  md:flex-row flex-col justify-center items-center w-full md:px-10 px-3 md:gap-0 gap-4 pb-3">
              <div className="flex flex-col justify-center items-center text-center md:w-[30%] w-full ">
                <div className="h-32 w-32 mb-4 border-4 border-white rounded-full overflow-hidden">
                  <img
                    className="w-full h-full rounded-full"
                    src={`data:image/png;base64,${item?.avatar?.image}`}
                  />
                </div>
                <h5 className="font-semibold text-amber-500 heading">
                  {item.name}
                </h5>
                <p className="text-sm text-[#CCCCCC] italic">{item.rating}</p>
              </div>
              <div className="hidden md:block  w-[5%]">
                <div className="bg-gray-700 rounded-full w-[1px] h-40 ">
                  <div className="w-12 h-12 rounded-full border-[1px] border-gray-700 flex justify-center bg-gray-800 relative right-6 top-14 ">
                    <div className="rotate-180 flex justify-center  items-center text-3xl text-[#F99106]">
                      <MdFormatQuote />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-[65%] w-full">
                <p className="text-lg text-[#CCCCCC] md:text-start text-center italic">
                  {item.review}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
