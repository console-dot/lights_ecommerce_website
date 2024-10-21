import React, { useEffect, useState } from "react";
import { decorateLight1, decorateLight2, dignoalLines } from "../../assets";
import { getDecorate } from "../../api/decorate";

export const DecorateLight = () => {
  const [decorateLightData ,setDecorateLightData]= useState()

  const getDecorateLightCall =async ()=>{
    const res = await getDecorate()
    setDecorateLightData(res?.data[0])

  }
  useEffect(()=>{getDecorateLightCall()},[])
  return (
    <div className="container mx-auto  p-4  md:mt-20 w-[100%]">
      <div className="flex flex-col lg:flex-row items-center lg:items-start  gap-4  text-white w-[100%]">
        {/* Right Image */}
        <div className="flex lg:w-[60%] w-full items-center justify-center flex-col  md:flex-row md:order-2 lg:order-none pt-20 gap-5 ">
          <div className="md:w-[50%] h-[400px] w-full">
            <img
                src={`data:image/png;base64,${decorateLightData?.imageLeft?.image}`}
              alt="Light House 2"
              className=" relative md:top-[-50px] h-full top-0 w-full  hover:scale-105 transform transition-transform duration-500"
            />
          </div>
          {/* Text Section */}
          <div className="relative w-full flex flex-col md:items-end items-start md:ml-0 px-6 md:w-[50%] ">
            <h2 className="text-amber-500 heading md:text-5xl text-3xl md:text-end text-start tracking-tighter font-bold w-full ">
              {decorateLightData?.decorateLighth1}
            </h2>

            <div className="md:w-[80%] w-[60%]  md:mt-0 mt-1 h-[1px] bg-gray-600 absolute md:left-[-25%] z-20  md:top-[13%] top-8 "></div>
            <p className=" mt-6 italic text-lg md:text-end text-start w-full">
            {decorateLightData?.decorateLighth2}
            </p>
            <div className="md:h-16 h-8  w-[1px] my-4   bg-gray-600 md:mr-6 mr-0 md:ml-0 ml-6"></div>
            <button className="shop-button  w-28 px-2 py-3  bg-transparent border border-[#f99106]  text-[#f99106] hover:text-white rounded-full md:mb-0 mb-4">
              <span>Shop Now</span>
            </button>
          </div>
        </div>
        {/* Right Image with Diagonal Lines */}
        <div className="relative lg:w-[40%] w-full md:order-1 lg:order-none">
          <div className="absolute w-full h-full flex items-center justify-center ">
            <img
              src={dignoalLines}
              alt=""
              className="relative md:right-5 right-0 w-full h-full  object-cover "
            />
          </div>
          <div className="relative  flex items-center justify-center w-full  h-full md:top-[-20px] top-0">
            <img
             src={`data:image/png;base64,${decorateLightData?.imageRight?.image}`}
              alt="Light House 1"
              className="lg:w-[600px] md:w-[80%]  lg:h-[500px] hover:scale-105 transform transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
