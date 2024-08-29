import React, { useState } from "react";
import { categoryCardIamge, categoryCardIamge1 } from "../../assets";

export const CategoryCard = () => {
  const [isOpen, setIsOpen] = useState("");
  const handel = (props) => {
    setIsOpen(props);
  };
  return (
    <div className="flex w-full justify-center items-center ">
      <div
        className="container p-4 h-auto xl:h-auto md:h-auto  gap-5 md:gap-10 flex-col md:flex-row"
        style={{ display: "flex" }}
      >
        <div
          className="md:w-1/2 border-solid  border-[10px] h-full border-[#232323] cursor-pointer relative"
          onMouseEnter={() => handel("Light")}
          onMouseLeave={() => handel("light")}
        >
          <div className="">
            <img src={categoryCardIamge} />
          </div>
          <div className=" absolute flex flex-col justify-center items-center top-6 md:top-10 xl:top-24  lg:top-14 left-5 md:left-10">
            <h1 className="text-amber-500 lg:text-xl font-semibold italic">
              Big Deals
            </h1>
            <h1 className="md:text-xl heading lg:text-3xl py-1  md:pb-2 font-semibold text-white lg:py-3 ">
              Desk lamps
            </h1>
            <button className="shop-button px-2 py-1 lg:px-4 lg:py-2 bg-[#F99106] text-black rounded-full flex justify-center items-center">
              <span className="text-[10px] md:text-base">Shop Now</span>
            </button>
          </div>
          <div
            className={`absolute top-0 w-full  bg-white overflow-hidden transition-all duration-500 delay-75 ease-in-out ${
              isOpen === "Light" ? "opacity-[0.006] h-full" : "opacity-20 h-0"
            }`}
          ></div>
        </div>
        <div
          className="md:w-1/2 border-solid border-[10px] h-full border-[#232323] cursor-pointer relative"
          onMouseEnter={() => handel("Light1")}
          onMouseLeave={() => handel("light")}
        >
          <div className="">
            <img src={categoryCardIamge1} />
          </div>
          <div className=" absolute flex flex-col justify-center items-center top-6 md:top-10 xl:top-24  lg:top-14 left-5 md:left-10">
            <h1 className="text-amber-500 italic lg:text-2xl md:xl font-semibold">
              Ceiling Decore's
            </h1>
            <h1 className="lg:text-3xl md:xl heading font-semibold text-white lg:py-3 py-1 md:py-2  flex flex-col items-center justify-center">
              Decorating <span>Lamps</span>
            </h1>
          </div>
          <div
            className={`absolute top-0 w-full  bg-white overflow-hidden transition-all duration-500 delay-75 ease-in-out ${
              isOpen === "Light1" ? "opacity-[0.006] h-full" : "opacity-20 h-0"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};
