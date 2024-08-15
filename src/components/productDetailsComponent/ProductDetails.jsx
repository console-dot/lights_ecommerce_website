import React, { useContext, useEffect, useState } from "react";
import { BennerImage1, BennerImage2, BennerImage3, light2 } from "../../assets";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "../../App.css";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ProductDetails = () => {
  const imageData = [
    { image: light2 },
    { image: BennerImage2 },
    { image: BennerImage3 },
    { image: BennerImage3 },
    { image: BennerImage3 },
  ];

  const [showImage, setShowImage] = useState();
  const [currentImage, setCurrentImage] = useState(0);
  const selectImage = (item, index) => {
    setCurrentImage(index);
    setShowImage(item);
  };

  useEffect(() => {
    setShowImage(imageData[currentImage]?.image);
  }, [currentImage]);


  return (
    <div>
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full  flex justify-center items-center px-5 ">
          <div className="w-full h-[600px]  ">
            <img
              src={showImage?.image || imageData[currentImage]?.image}
              className="w-full h-full  "
              alt="Product"
            />
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center gap-3  items-center flex-row pt-5  md:pt-14  ">
        <div className="carousel carousel-center space-x-4 p-4 max-w-full md:max-w-full lg:max-w-sm touch-auto ">
          {imageData?.map((item, index) => (
            <div
              key={index}
              className="md:w-24 w-20 h-28 md:h-32 hover:border-blue-500 border cursor-pointer p-1 carousel-item touch-auto"
            >
              <img
                src={item.image}
                className="w-full h-full"
                onClick={() => selectImage(item, index)}
                alt={`Image ${index}`}
              />
            </div>
          ))}
          </div>
      </div>
    </div>
  );
};
