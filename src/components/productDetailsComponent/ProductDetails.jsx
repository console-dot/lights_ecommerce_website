import React, { useContext, useEffect, useState } from "react";
import { BennerImage1, BennerImage2, BennerImage3, light2 } from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../App.css";
import AddCardContext from "../../context/addCart/AddCardContext";
import { useParams } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";

export const ProductDetails = ({ data }) => {
  const cart = useContext(AddCardContext);

  const [showImage, setShowImage] = useState();
  const [currentImage, setCurrentImage] = useState(0);

  const selectImage = (index) => {
    setCurrentImage(index);
    setShowImage(data.gallery[index].image);
  };

  useEffect(() => {
    setShowImage(data?.imageBackground);
  }, [currentImage, data?.image]);

  const params = useParams();
  const id = params?.id;

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="flex flex-col md:flex-row w-full h-full ">
        <div className="w-full flex justify-center items-center px-5">
          <div className="w-full h-full">
            <img
              src={`data:image/png;base64,${data?.avatar?.image}`}
              className="w-full h-full object-cover bg-contain"
              alt="Product"
            />
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 justify-center gap-3 items-center flex-row pt-5 md:pt-14">
        {data?.gallery?.map((item, index) => (
          <div
            className=" cursor-pointer p-1 md:w-[380px] md:h-[380px]" 
            
          >
            <img
              src={`data:image/png;base64,${item.image}`}
              className="w-full h-full object-cover object-center "
              alt={`Image ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
