import React, { useContext, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import AddCardContext from "../../context/addCart/AddCardContext";
import { useParams } from "react-router-dom";

export const RightSide = ({ productData ,data}) => {
 
  const cart = useContext(AddCardContext);
  return (
    <>
      {" "}
      {/* right side  */}
      <div className=" md:flex flex-col  lg:p-2  p-4">
        <div className="w-full flex justify-center gap-5 items-center">
          <div className="w-1/2 rounded-lg border flex justify-center items-center p-2  md:p-4 lg:p-2 xl:p-4">
            <h1 className="text-[8px] md:text-[10px] lg:text-[9px] xl:text-[10px]">
              100+ bought since yesterday
            </h1>
          </div>
          <div className="w-1/2 rounded-lg border flex justify-center items-center p-2  md:p-4 lg:p-2 xl:p-4">
            <h1 className="text-[8px]  md:text-[10px] lg:text-[9px] xl:text-[10px]">
              In 200+ people's carts
            </h1>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="py-2 text-4xl">{data?.name}</h1>
          <h1 className="text-base  ">{data?.description}</h1>
          <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
              <svg
                class="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              5.0
            </span>
          </div>
          <h1 className="text-base">Free 90-day returns</h1>
        </div>
        <div className="flex flex-col">
          <h1 className="py-2 text-3xl">
            {data?.price}
            <span className="text-red-700">$</span>
          </h1>
          <h1 className="text-base">Price when purchased online</h1>
          <div className="py-3 flex flex-col sm:flex-row lg:flex-col xl:flex-row justify-around">
            <div className="sm:w-[50%] lg:w-full xl:w-[50%]   items-center flex gap-5">
              <h1>Quantity:</h1>
              <button className="text-2xl" onClick={cart.subtractQuantity}>
                -
              </button>
              <div className="flex justify-center items-center">
                <input
                  type="text"
                  value={cart.quantity}
                  className="w-full h-full text-center p-2 rounded-lg border "
                  onChange={(e) => cart.onChange(e)}
                />
              </div>

              <button className="text-2xl" onClick={cart.addQuantity}>
                +
              </button>
            </div>
            <div className="p-1 hidden lg:flex">
              <button
                className="bg-blue-600 text-white xl:py-3 xl:px-6 p-2 rounded-lg "
                onClick={() => {
                  cart.addToCart(data);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        {/* 1 box */}
        <div className="w-full bg-[#F8F8F8] rounded-lg mt-5  p-4">
          <div>
            <h1 className="py-2">Size:</h1>
            <div className="grid grid-cols-3 gap-3 place-items-center">
              <div className="w-full rounded-lg bg-white border-2 hover:border-black flex justify-center items-center p-2">
                <h1>hello</h1>
              </div>
              <div className="w-full rounded-lg bg-white border-2 hover:border-black flex justify-center items-center p-2">
                <h1>hello</h1>
              </div>
              <div className="w-full rounded-lg bg-white border-2 hover:border-black flex justify-center items-cente p-2">
                <h1>hello</h1>
              </div>
              <div className="w-full rounded-lg bg-white border-2 hover:border-black flex justify-center items-center p-2">
                <h1>hello</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-4">
            <h1 className="py-2">Actual Color :</h1>
            <div className="grid grid-cols-4 ">
              <div className="w-12 h-12 border rounded-full flex border-red-400 justify-center items-center">
                <div className="w-full h-full border-2 border-white rounded-full  bg-black"></div>
              </div>
            </div>
          </div>
        </div>

        {/* 2  box*/}
        <div className="w-full bg-[#F8F8F8] rounded-lg  p-4 mt-8">
          <div>
            <h1 className="py-2">How do you want your item?</h1>
            <div className="flex items-center gap-4 py-2">
              <input type="checkbox" />
              <h1 className="text-[13px]">
                {" "}
                I want shipping & delivery savings with Walmart plus
              </h1>
            </div>
            <h1 className="text-[12px]">
              You get 30 days free! Choose a plan at checkout.
            </h1>

            <div className="grid grid-cols-3 flex-wrap gap-3 place-items-center py-3">
              <div className="w-full rounded-lg bg-white border-2 cursor-pointer hover:border-black flex justify-center items-center flex-col p-2">
                <h1>hello</h1>
                <h1>hello</h1>
              </div>
              <div className="w-full rounded-lg bg-white border-2 cursor-pointer hover:border-black flex justify-center items-center flex-col p-2">
                <h1>hello</h1>
                <h1>hello</h1>
              </div>
              <div className="w-full rounded-lg bg-white border-2 cursor-pointer hover:border-black flex justify-center items-cente flex-col p-2">
                <h1>hello</h1>
                <h1>hello</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-4">
            <div className="flex  py-3">
              <h1 className="pr-2 text-xs">
                Pickup fromSacramento Supercenter
              </h1>
              <h1 className=" border-l border-black px-2 text-xs">Location</h1>
            </div>
            <h1 className="py-2">Delivery toSacramento, 95829</h1>

            <div className="flex flex-wrap gap-3 py-2 border-t border-black">
              <div>
                <h1>Free 90-day returns</h1>
              </div>
              <div>
                <h1>Free 90-day returns</h1>
              </div>
              <div>
                <h1>Free 90-day returns</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex py-2 justify-center items-center gap-5">
          <div className="flex justify-center items-center py-2 hover:border-b-2 gap-3">
            {" "}
            <div>
              <FaRegHeart />
            </div>{" "}
            Add to list{" "}
          </div>
          <div className=" hover:border-b-2 py-2">Add to registry</div>
        </div>
      </div>
    </>
  );
};
