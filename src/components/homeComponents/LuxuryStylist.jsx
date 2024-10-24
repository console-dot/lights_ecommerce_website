import React, { useEffect, useState } from "react";
import { blog1 } from "../../assets";
import { getLuxury } from "../../api/luxury";

export const LuxuryStylist = () => {
  const [luxuryStylishData, setLuxuryStylishData] = useState();

  const getluxuryCall = async () => {
    const res = await getLuxury();
    setLuxuryStylishData(res?.data[0]);
  };
  useEffect(() => {
    getluxuryCall();
  }, []);
  return (
    <div className="w-full flex justify-center items-center ">
      <div className="container h-[300px] sm:h-[400px]">
        <div className="w-full h-full flex md:flex-row flex-col">
          <div className="md:w-1/2 w-full h-full flex flex-col items-center justify-center bg-[#171717] order-2 md:order-none py-4 md:py-0">
            <div className="w-full lg:w-[70%] flex flex-col items-start justify-center px-5 sm:px-10">
              <div>
                <h1 className="text-white heading text-2xl md:text-5xl">
                  {luxuryStylishData?.luxuryh1}
                </h1>
              </div>
              <div className="w-full lg:ml-48 md:ml-32 h-[1px] my-5 bg-[#2F2F2F] z-30"></div>
              <div>
                <h1 className="text-lg italic text-[#C0C0BB]">
                  {luxuryStylishData?.luxuryh2}
                </h1>
              </div>
              <div className="mt-5">
                <button className="shop-button px-4 py-2 bg-transparent border border-[#f99106]  text-[#f99106] hover:text-white rounded-full">
                  <span>Read More</span>
                </button>
              </div>
            </div>
          </div>
          <div className=" hidden md:flex   md:w-1/2 w-full order-1 md:order-none">
            <img
              src={`data:image/png;base64,${luxuryStylishData?.imageId?.image}`}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
