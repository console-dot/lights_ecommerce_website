import React, { useContext } from "react";
import {
  BennerImage1,
  BennerImage2,
  BennerImage3,
  categoryCardIamge,
  categoryCardIamge1,
  commercialLight,
  commercialLightbg,
  indoorLight,
  indoorLightbg,
  light1,
  light2,
  lightHouse,
  multiLight,
  multiLightbg,
  restaurantLight,
  restaurantLight1,
  restaurantLight1bg,
  restaurantLightbg,
  table,
  table4,
  table4bg,
  table6,
  table6bg,
  tablebg,
  wallLight,
  wallLight1,
  wallLight1bg,
  wallLightbg,
} from "../../assets";
import "./Gellary.css";
import AddCardContext from "../../context/addCart/AddCardContext";
import { useIsMobile } from "../../hooks/useIsMobile";

export const Gellary = () => {
  const isMobileView = useIsMobile();

  const cart = useContext(AddCardContext);
  const getRandomHeight = () => {
    const minHeight = 250;
    const maxHeight = 350;
    return Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
  };

  return (
    <div className="flex justify-center items-center md:py-10">
      <div className="container p-4">
        <div className="flex justify-center items-center">
          <h1 className="heading text-center text-3xl md:text-5xl uppercase text-amber-500 tracking-wide py-10">
            Categories
          </h1>
        </div>
        <div className="columns-1  sm:columns-2 md:columns-3 lg:columns-4  gap-4 overflow-hidden">
          {isMobileView
            ? cart?.productsData?.slice(0, 13).map((image, index) => (
                <div
                  key={index}
                  className="w-full relative border-none  mb-4 overflow-hidden border  rounded-xl bg-[#E0DDDD]"
                  style={{ height: getRandomHeight() }}
                  onClick={() =>
                    cart.cardButton(
                      image.categoryId.name.split(" ").join(""),
                      image.categoryId?._id
                    )
                  }
                >
                  <img
                    src={image?.backgroundImage}
                    className=" inset-0 w-full h-full transition-opacity ease-in-out duration-1000 rounded-lg 
                 "
                    alt="Image 2"
                  />
                  <div className="absolute w-full h-full top-0 flex justify-center items-center">
                    <div className="relative w-full h-full ">
                      <div className="absolute top-0 bg-black opacity-50 w-full h-full flex justify-center  items-center "></div>
                      <div className="flex justify-center items-center w-full h-full ">
                        <h1 className="text-center text-xl from-zinc-50 font-semibold text-amber-500 z-50 ">
                          {image.name}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : cart?.productsData?.map((image, index) => (
                <div
                  key={index}
                  className="w-full relative border-none  mb-4 overflow-hidden border group gallery-item  rounded-xl bg-[#E0DDDD] cursor-pointer"
                  style={{ height: getRandomHeight() }}
                  onClick={() =>
                    cart.cardButton(
                      image.categoryId.name.split(" ").join(""),
                      image.categoryId?._id
                    )
                  }
                >
                  <img
                    src={`data:image/png;base64,${image?.avatar?.image}`}
                    alt={image.name}
                    className="w-full h-full rounded-lg gellary transition-all ease-in-out overflow-hidden"
                  />
                  <img
                    src={image?.backgroundImage}
                    className="absolute inset-0 w-full h-full transition-opacity ease-in-out duration-1000 rounded-lg opacity-0 group-hover:opacity-100"
                    alt="Image 2"
                  />
                  <div className="image-name heading  absolute bottom-0 left-0  text-amber-500 w-full text-center justify-center flex items-center py-2 font-bold text-xl">
                    <h1 className="flex justify-center items-center text-center">
                      {image.categoryId?.name}
                    </h1>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};
