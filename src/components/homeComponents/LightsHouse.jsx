import React, { useEffect, useState } from "react";
import {
  decorateLight1,
  dignoalLines,
  lightHouse,
  lightHouse2,
} from "../../assets";
import { getLightHouse } from "../../api/lightHouse";

export const LightsHouse = () => {
  const [lightHouseData, setLightHouseData] = useState();

  const getLightHouseCall = async () => {
    const res = await getLightHouse();
    setLightHouseData(res?.data[0]);
  };

  useEffect(() => {
    getLightHouseCall();
  }, []);

  return (
    <div className="container mxauto  mx-auto  p-4 md:mt-0  pt-5 md:pt-20">
      <div className="flex p-4 flex-col lg:flex-row items-center lg:items-start  gap-4  text-white w-[100%]">
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
              src={`data:image/png;base64,${lightHouseData?.imageLeft?.image}`}
              alt="Light House 1"
              className="lg:w-[600px] md:w-[80%]  lg:h-[500px] hover:scale-105 transform transition-transform duration-500"
            />
          </div>
        </div>
        {/* Right Image with Diagonal Lines */}
        <div className="flex lg:w-[60%] w-full items-center justify-center flex-col  md:flex-row md:order-2 lg:order-none pt-5 gap-5 ">
          {/* Text Section */}
          <div className="relative w-full flex flex-col md:items-end items-start md:ml-0 px-6 md:w-[50%] ">
            <h2
              className="  md:text-5xl heading inline  text-start tracking-tighter font-bold w-full text-amber-500"
              style={{ fontSize: "45px" }}
            >
              {lightHouseData?.lightHouseh1}
            </h2>

            <div className="md:w-[80%] w-[60%]  md:mt-0 mt-2 h-[1px] bg-gray-600 absolute md:right-[-25%] z-20 right-13 md:top-[14%] top-12 "></div>
            <p className="italic mt-6 text-lg  text-start w-full pl-4">
              {lightHouseData?.lightHouseh2}
            </p>
            <div className="md:h-16 h-8  w-[1px] my-4   bg-gray-600 md:mr-6 mr-0 md:ml-0 ml-6"></div>
            <button className="shop-button  w-28 px-2 py-3  bg-transparent border border-[#f99106]  text-[#f99106] hover:text-white rounded-full md:mb-0 mb-4">
              <span>Shop Now</span>
            </button>
          </div>

          <div className="md:w-[50%] h-[400px] w-full">
            <img
              src={`data:image/png;base64,${lightHouseData?.imageRight?.image}`}
              alt="Light House 2"
              className=" relative  top-0 w-full  h-full hover:scale-105 transform transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
