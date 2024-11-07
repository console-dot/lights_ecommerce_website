import React, { useContext, useState } from "react";
import AddCardContext from "../../context/addCart/AddCardContext";
import { FaRegHeart } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";

export const RightSide = ({ data }) => {
  const cart = useContext(AddCardContext);
  return (
    <>
      <div className=" w-full flex flex-col md:px-5 sticky">
        <div>
          {" "}
          <h1 className="text-[#BFBFBF] text-lg">
            {data?.categoryId?.name}
          </h1>{" "}
        </div>
        <div>
          <h1 className="text-amber-500 text-3xl pb-2  heading">
            {data?.name || "Name Light"}
          </h1>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col  gap-5 py-5 ">
            {" "}
            <div className="flex  font-semibold ">
              <h1 className="text-white  text-4xl flex gap-2">
                <span className="heading ">Rs.</span>
                {data?.price}
              </h1>
            </div>
            <div className="flex  font-semibold ">
              <h1 className="text-[#b1b1b1] w-32 heading">Availabel Stock :</h1>
              <h1 className="text-[#b1b1b1] md:px-10 italic">
                {data?.inStock?.toString()}
              </h1>
            </div>
            <div className="flex justify-start items-center">
              <button
                className="shop-button px-4 py-3  bg-transparent border border-[#f99106]  text-[#f99106] hover:text-white rounded-full"
                onClick={() => cart.addToCart(data)}
              >
                <span>Add to Cart</span>
              </button>
            </div>
            <div className="flex   ">
              <h1 className="text-[#b1b1b1] text-lg italic">
                {data?.description}
              </h1>
            </div>
            <div className="flex flex-col font-semibold mt-3">
              <h1 className="text-amber-500 text-xl heading ">
                Shipping & Retrun
              </h1>
              <h1 className="text-[#b1b1b1] mt-2">
                🚚 Delivery in Lahore: Free Shipping! For other cities, enjoy
                our reliable shipping service with a client fee of RS 10,000.
                Your order will be delivered within 10 to 14 days. Shop now and
                experience convenience at your doorstep! 🌟
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
