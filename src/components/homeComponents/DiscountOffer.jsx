import React from "react";
import { parallax } from "../../assets";

export const DiscountOffer = () => {
  return (
    <div
      className="relative h-auto md:py-28 py-5 bg-fixed bg-center bg-cover flex items-center justify-center mx-auto"
      style={{
        backgroundImage: `url(${parallax})`,
      }}
    >
      <div className="absolute bg-black opacity-20 inset-0"></div>
      <div className="relative flex mx-auto w-full max-w-[1200px] justify-between px-4 md:px-8">
        <div className="relative text-start text-white p-6 flex flex-col justify-end">
          <h1 className="md:text-7xl text-4xl text-[#F99106] text-center font-bold mb-4">
            GET FLAT 50%
          </h1>
          <div className="w-[2px] bg-white h-10 mx-auto md:my-4 my-1"></div>
          <p className="text-lg text-[#CCCCCC] tracking-tighter italic mb-4 text-center">
            New Stylish Home Decorate Statues Accessories
          </p>
          <p className="text-xl font-semibold text-center">
            DEAL THIS WEEKEND
          </p>
          <div className="flex justify-center">
            <button className="shop-button mt-6 w-28 px-2 py-3 bg-[#F99106] text-black rounded-full">
              <span>Shop Now</span>
            </button>
          </div>
        </div>
        <div className="hidden md:block w-[50%]"></div>
      </div>
    </div>
  );
};
