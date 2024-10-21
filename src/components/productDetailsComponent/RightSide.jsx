import React, { useContext, useState } from "react";
import AddCardContext from "../../context/addCart/AddCardContext";
import { FaRegHeart } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";

export const RightSide = ({ data }) => {
  const cart = useContext(AddCardContext);
  return (
    <>
      <div className=" w-full flex flex-col px-5">
        <div>
          <h1 className="text-amber-500 font-semibold text-xl pb-2 border-b border-[#414141] heading">
            {data?.name || "Name Light"}
          </h1>
        </div>
        <div className="flex items-center gap-3 md:gap-5">
          <div className="py-3">
            <div class="flex items-center mt-2.5 mb-2.5">
              <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg
                  class="w-3 h-3 md:w-4 md:h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-3 h-3 md:w-4 md:h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-3 h-3 md:w-4 md:h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-3 h-3 md:w-4 md:h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-3 h-3 md:w-4 md:h-4 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
            </div>
          </div>
          <h1 className="text-white text-[12px] md:text-base italic">
            0 reviews
          </h1>
          <a href="#review">
            <div className="flex items-center gap-2 cursor-pointer">
              <MdModeEditOutline className="text-white" />
              <h1 className="text-white text-[12px] md:text-base italic">
                {" "}
                Write a review
              </h1>
            </div>
          </a>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col border-y gap-5 py-5 border-[#414141]">
            {" "}
            <div className="flex  font-semibold ">
              <h1 className="text-white w-32 heading">Brand :</h1>
              <h1 className="text-[#b1b1b1] md:px-10 italic">Name</h1>
            </div>
            <div className="flex  font-semibold ">
              <h1 className="text-white w-32 heading">Product Code :</h1>
              <h1 className="text-[#b1b1b1] md:px-10 italic">Product 21</h1>
            </div>
            <div className="flex  font-semibold ">
              <h1 className="text-white w-32 heading">SKU :</h1>
              <h1 className="text-[#b1b1b1] md:px-10 italic">test 1</h1>
            </div>
            <div className="flex  font-semibold ">
              <h1 className="text-white w-32 heading">Availabel Stock :</h1>
              <h1 className="text-[#b1b1b1] md:px-10 italic">954</h1>
            </div>
          </div>

          <div className=" flex flex-col">
            <h1 className="flex text-white text-2xl font-bold py-2">
              <span>$</span>300<span>.00</span>
            </h1>
            <h1 className=" text-[#CCCCCC] italic">
              Ex Tax: <span>$100.00</span>
            </h1>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg text-[#CCCCCC] font-semibold py-4 italic">
              Available Options
            </h1>
          </div>
          <div className="flex items-center justify-start gap-5 pt-5 ">
            <div>
              <button className="bg-white flex gap-4 p-3 text-xl ">
                <h1 onClick={cart.subtractQuantity}>-</h1>
                <h1 className="">{cart.quantity}</h1>
                <h1 className="" onClick={cart.addQuantity}>
                  +
                </h1>
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button
                className="shop-button px-4 py-3  bg-transparent border border-[#f99106]  text-[#f99106] hover:text-white rounded-full"
                onClick={() => cart.addToCart(data)}
              >
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
          <div className="flex py-2 justify-start items-center gap-5 ">
            <div className="flex justify-center items-center py-2 hover:border-b-2  gap-3 text-white">
              {" "}
              <div>
                <FaRegHeart />
              </div>{" "}
              Add to list{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
