import React from "react";
import { benner } from "../../assets";
import { FaGreaterThan } from "react-icons/fa";

export const ProductCardBanner = ({name}) => {
  return (
    <div>
      {" "}
      <div className="w-full h-[200px] md:h-[300px]  ">
        <div
          style={{ backgroundImage: `url(${benner})` }}
          className="w-full h-full flex flex-col justify-end px-10 pb-10"
        >
          <div>
            {" "}
            <button className="bg-amber-500 text-white py-2 px-4 border-amber-500 border rounded-lg">
              Product
            </button>
          </div>
          <div className={`flex gap-2 py-2 ${name?"flex":"hidden"}`}>
            <h1 className="text-2xl font-semibold text-white items-end flex">
              Category <FaGreaterThan className="ml-2" /> <FaGreaterThan />{" "}
            </h1>
            <h1 className="text-2xl font-semibold text-amber-500">{name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
