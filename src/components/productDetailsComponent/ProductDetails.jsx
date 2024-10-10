import React, { useContext, useEffect, useState } from "react";
import { BennerImage1, BennerImage2, BennerImage3, light2 } from "../../assets";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../../App.css";
import AddCardContext from "../../context/addCart/AddCardContext";
import { useParams } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";

export const ProductDetails = ({ data }) => {
  const imageData = [
    { image: light2 },
    { image: BennerImage2 },
    { image: BennerImage3 },
    { image: BennerImage3 },
    { image: BennerImage3 },
  ];
  const cart = useContext(AddCardContext);

  const [showImage, setShowImage] = useState();
  const [currentImage, setCurrentImage] = useState(0);

  const selectImage = (index) => {
    setCurrentImage(index);
    setShowImage(imageData[index].image);
  };

  useEffect(() => {
    setShowImage(data?.imageBackground);
  }, [currentImage, data?.image]);

  const params = useParams();
  const id = params?.id;
  console.log(id);

  return (
    <div>
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full flex justify-center items-center px-5">
          <div className="w-full h-[400px] lg:h-[600px]">
            <img
              src={showImage}
              className="w-full h-full object-cover"
              alt="Product"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center gap-3 items-center flex-row pt-5 md:pt-14">
        <Swiper
          slidesPerView={3}
          spaceBetween={5} 
          centeredSlides={false}
          modules={[Pagination, Navigation]}
          onSlideChange={(swiper) => setCurrentImage(swiper.activeIndex)}
          className="w-4/5  max-w-full flex justify-center items-center"
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
          }}
        >
          {imageData.map((item, index) => (
            <SwiperSlide key={index} className=" justify-center items-center " style={{ width: 'auto', height: 'auto',display:"flex" }}>
              <div
                className={`w-4/5 h-28 md:w-11/12  md:h-32 cursor-pointer border p-1 ${
                  index === currentImage ? 'border-blue-500' : ''
                }`}
                onClick={() => selectImage(index)}
              >
                <img
                  src={item.image}
                  className="w-full h-full object-cover object-center "
                  alt={`Image ${index}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
