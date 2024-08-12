import React from "react";
import { benner } from "../../assets";
import { FaGreaterThan } from "react-icons/fa";
import "../../App.css";

export const ProductCardBanner = ({ name }) => {
  return (
    <div className="">
      {" "}
      <div className="w-full h-[200px] md:h-[400px]  ">
        <div
          style={{ backgroundImage: `url(${benner})` }}
          className="w-full h-full flex flex-col justify-center items-center relative "
        >
          {/* products */}
          <div className="bg-black opacity-90 w-1/2 flex flex-col justify-center items-center h-3/5 absolute top-[70%] rounded-lg">
            {" "}
            <h1 className="glow-text  text-center  text-4xl md:text-5xl uppercase text-amber-500 tracking-wide font-playfair font-semibold ">
              About Us
            </h1>
            <p className="text-white text-center p-7">
              Sharing your organisation’s story. Best practice for content
              creation. Calls to action. Using multimedia to bring your message
              to life.
            </p>
          </div>
          {/* <div className={`flex gap-2 py-2 ${name ? "flex" : "hidden"}` }>
            <h1 className="text-2xl font-semibold text-white items-end flex">
              Category <FaGreaterThan className="ml-2" /> <FaGreaterThan />{" "}
            </h1>
            <h1 className="text-2xl font-semibold text-amber-500">{name}</h1>
          </div> */}
        </div>
      </div>
    </div>
  );
};
