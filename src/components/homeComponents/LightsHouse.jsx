import React from "react";
import { dignoalLines, lightHouse, lightHouse2 } from "../../assets";

export const LightsHouse = () => {
  return (
    <div className="mxauto   mx-auto  py-4 md:mt-0 mt-10">
      <div className="flex flex-col md:flex-row  gap-4  text-white">
        {/* Left Image with Diagonal Lines */}
        <div className="relative md:w-[50%] w-auto">
          <div className="absolute   left-10 ">
            <img
              src={dignoalLines}
              alt=""
              className="md:w-[600px] w-full md:h-[500px] h-auto  object-cover "
            />
          </div>
          <div className="relative md:w-[600px] w-full md:h-[500px] h-full top-[-50px] ">
            <img
              src={lightHouse}
              alt="Light House 1"
              className="w-[600px] h-[500px] hover:scale-105 transform transition-transform duration-500"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="relative md:ml-0 ml-5 ">
          <h2 className="  md:text-5xl text-3xl tracking-tighter font-bold ">
            LIGHT HOUSE
          </h2>

          <div className="md:w-[60%] w-[50%] md:mt-0 mt-2 h-[1px] bg-gray-600 absolute md:left-[-24%] lfet-0 md:top-[12%] "></div>
          <p className=" mt-8 text-lg">
            Lorem Ipsum Eiusmod Dolor Adi Iusmod Incididunt. Eiusmod Tempor
            Eiusmod Incididunt.
          </p>
          <div className="md:h-16 h-8   w-[1px] my-4   bg-gray-600 ml-10"></div>
          <button className="shop-button1  w-28 px-2 py-3 bg-white text-black rounded-full">
            <span>Shop Now</span>
          </button>
        </div>

        {/* Right Image */}
        <div className="">
          <img
            src={lightHouse2}
            alt="Light House 2"
            className=" relative md:top-[-50px] top-0 w-full  h-full hover:scale-105 transform transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};
