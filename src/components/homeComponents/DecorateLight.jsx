import React from "react";
import { decorateLight1, decorateLight2, dignoalLines } from "../../assets";

export const DecorateLight = () => {
  return (
    <div className="container mx-auto  py-4 md:mt-40 mt-10 w-[100%]">
      <div className="flex flex-col md:flex-row  gap-4  text-white w-[100%]">
        {/* Right Image */}
        <div className="w-[30%]">
          <img
            src={decorateLight1}
            alt="Light House 2"
            className=" relative md:top-[-50px] top-0 w-full  h-full hover:scale-105 transform transition-transform duration-500"
          />
        </div>
        {/* Text Section */}
        <div className="relative flex flex-col md:items-end items-start md:ml-0 px-6 w-[30%] ">
          <h2 className="  md:text-5xl text-3xl md:text-end text-start tracking-tighter font-bold ">
            DECORATE LIGHT
          </h2>

          <div className="md:w-[80%] w-[60%]  md:mt-0 mt-2 h-[1px] bg-gray-600 absolute md:right-[-25%] z-20 right-13 md:top-[12%] top-8 "></div>
          <p className=" mt-6 text-lg md:text-end text-start">
            Lorem Ipsum Eiusmod Dolor Adi Iusmod Incididunt. Eiusmod Tempor
            Eiusmod Incididunt.
          </p>
          <div className="md:h-16 h-8   w-[1px] my-4   bg-gray-600 md:mr-6 mr-0 md:ml-0 ml-6"></div>
          <button className="shop-button1  w-28 px-2 py-3 bg-white text-black rounded-full md:mb-0 mb-4">
            <span>Shop Now</span>
          </button>
        </div>

        {/* Right Image with Diagonal Lines */}
        <div className="relative md:w-[40%] w-auto">
          <div className="absolute    ">
            <img
              src={dignoalLines}
              alt=""
              className="relative md:right-10 right-0 md:w-[500px] w-full md:h-[500px] h-auto  object-cover "
            />
          </div>
          <div className="relative md:w-[500px] w-full md:h-[400px] h-full md:top-[-50px] top-0">
            <img
              src={decorateLight2}
              alt="Light House 1"
              className="w-[600px] h-[500px] hover:scale-105 transform transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
