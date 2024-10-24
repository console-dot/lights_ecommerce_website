import React, { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { blog1, blog2, blog3 } from "../../assets";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { getBlogs } from "../../api/blogs";

export const Blogs = () => {
  const [blogsData, setBlogsData] = useState();

  const getBlogsCall = async () => {
    const res = await getBlogs();
    setBlogsData(res?.data);
  };

  useEffect(() => {
    getBlogsCall();
  }, []);

  return (
    <div className="md:pb-10  flex justify-center items-center">
      <div className="container  p-4">
        <div className="flex justify-center items-center ">
          <h1 className="heading text-center text-3xl md:text-5xl uppercase text-amber-500 tracking-wide  md:py-10">
            Latest News
          </h1>
        </div>

        <div className="w-full py-10 cursor-pointer relative ">
          <Swiper
            breakpoints={{
              10: {
                slidesPerView: 1,
              },

              320: {
                slidesPerView: 1,
                // Hide navigation for viewports <= 640px
              },
              640: {
                centeredSlides: false,
                slidesPerView: 1,
                // Hide navigation for viewports <= 640px
              },
              1024: {
                slidesPerView: 2,
                // Hide navigation for viewports <= 640px
              },
              1100: {
                slidesPerView: 2,
                // Hide navigation for viewports <= 640px
              },
            }}
            navigation={true}
            // centeredSlides={true}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {blogsData?.map((item) => (
              <SwiperSlide
                className={`w-full   md:py-4 relative flex flex-col `}
                style={{ display: "flex" }}
              >
                <div className="lg:w-4/5 w-full border-[10px] border-[#232323] overflow-hidden cursor-pointer ">
                  <img
                    src={`data:image/png;base64,${item.imageId?.image}`}
                    className="w-full hover:scale-110 h-[300px] transition hover:ease-in ease-out duration-500  overflow-hidden"
                  />
                </div>
                <div className="lg:absolute w-full lg:w-80 bottom-0 right-0 bg-black flex justify-center items-center flex-col py-3">
                  <h1 className="text-white text-lg font-semibold ">
                    {item?.blogsh1}
                  </h1>
                  <div className="flex justify-center items-center text-center">
                    {" "}
                    <p className="text-[#CCCC] py-3 italic">{item?.blogsh2}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
