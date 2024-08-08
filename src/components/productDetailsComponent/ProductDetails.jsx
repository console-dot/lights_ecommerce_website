import React, { useContext, useEffect, useState } from "react";
import { benner1, benner, benner2 } from "../../assets";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "../../App.css";
import { FaRegHeart } from "react-icons/fa";
export const ProductDetails = () => {
  const imageData = [
    { image: benner },
    { image: benner1 },
    { image: benner2 },
    { image: benner1 },
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

  const nextImage = () => {
    setCurrentImage(currentImage + (1 % imageData.length));
  };
  const prevImage = () => {
    setCurrentImage(currentImage - 1);
  };

  return (
    <div className="pt-[72px]">
      <div className="flex flex-col md:flex-row w-full">
        <div className=" w-full flex flex-col  p-4">
          <div className="flex w-full flex-col md:flex-row justify-center items-center md:h-screen h-[400px]">
            <div className="md:w-[10%] w-full flex justify-center  items-center flex-row md:flex-col p-2 order-2 md:order-none h-[20%] md:h-full ">
              {imageData?.map((item, index) => (
                <div
                  className={`w-20 h-20 hover:border-blue-500  hover:border-2 cursor-pointer rounded-lg  p-2`}
                >
                  <img
                    src={item.image}
                    className="w-full h-full rounded-lg"
                    onClick={() => selectImage(item, index)}
                  />
                </div>
              ))}
            </div>
            <div className="md:w-[90%] h-[80%] md:h-full w-full flex order-1 md:order-none">
              <div className="hidden lg:w-[10%] lg:flex h-full">
                <h1 className="flex justify-center items-center w-full h-full">
                  <SlArrowLeft
                    className="bg-black bg-opacity-70 text-white rounded-full p-1 text-3xl"
                    onClick={prevImage}
                  />
                </h1>
              </div>
              <div className="w-full  flex justify-center items-center">
                <div className="w-full h-[90%] md:h-full p-2 ">
                  <img
                    src={showImage?.image || imageData[currentImage]?.image}
                    className="w-full h-full rounded-lg "
                    alt="Product"
                  />
                </div>
              </div>
              <div className="w-[10%] relative  justify-center items-center lg:flex hidden">
                <div className="absolute top-10 flex flex-col gap-3 z-10">
                  <div className="w-8 h-8 rounded-full bg-[#F8F8F8] flex justify-center items-center">
                    <FaRegHeart />
                  </div>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                  <SlArrowRight
                    className="bg-black bg-opacity-70 text-white rounded-full p-1 text-3xl"
                    onClick={nextImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
