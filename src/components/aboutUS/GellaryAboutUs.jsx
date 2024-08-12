import React from "react";
import { BennerImage1 } from "../../assets";
export const GellaryAboutUs = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="container ">
        <div className="flex w-full h-[200px] gap-5 p-2">
          <div className="w-1/4 h-full">
            <img src={BennerImage1} className="w-full h-full rounded-lg" />
          </div>
          <div className="w-2/4 h-full">
            <img src={BennerImage1} className="w-full h-full rounded-lg" />
          </div>
          <div className="w-1/4 h-full">
            <img src={BennerImage1} className="w-full h-full rounded-lg" />
          </div>
        </div>
        <div className="flex w-full h-[200px] gap-5 p-2 ">
          <div className="w-1/4 h-full">
            <img src={BennerImage1} className="w-full h-full rounded-lg" />
          </div>
          <div className="w-2/4 h-full">
            <img src={BennerImage1} className="w-full h-full rounded-lg" />
          </div>
          <div className="w-1/4 h-full">
            <img src={BennerImage1} className="w-full h-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};
