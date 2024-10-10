import React, { useContext, useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import AddCardContext from "../../context/addCart/AddCardContext";
import { ProductDetailImage } from "../../assets";

export const AboutThisItem = ({ data }) => {
  const [isOpen, setIsOpen] = useState("ProductDetails");
  const cart = useContext(AddCardContext);
  const handleToggle = (prop) => {
    setIsOpen(prop);
  };
  return (
    <>
      {/* About this item */}
     
      <div className=" flex justify-center items-center  md:pt-10">
        <div className="container p-5">
          <div className="flex justify-center items-center border-b border-[#414141] w-full">
            <h1 className="text-3xl font-semibold p-5 text-amber-500 heading">
              {" "}
              Description
            </h1>
          </div>
          <div className="flex flex-col md:flex-row py-5 w-full ">
            <div className="md:w-[60%] w-full">
              <img src={ProductDetailImage} className="w-full" />
            </div>
            <div className="md:w-[40%] w-full flex flex-col">
              <div className="flex justify-center items-center">
                <h1 className="text-amber-500 text-3xl font-bold heading">Infromation</h1>
              </div>
              <div className="flex flex-col justify-center p-5 ">
                <div className="flex justify-between py-4 border-b font-bold">
                  <h1 className="text-[#CCCCCC] italic">Energy:</h1>
                  <h1 className="text-[#CCCCCC] italic">200g</h1>
                </div>
                <div className="flex justify-between py-4 border-b font-bold">
                  <h1 className="text-[#CCCCCC] italic">Calories:</h1>
                  <h1 className="text-[#CCCCCC] italic">520,00 kcal</h1>
                </div>
                <div className="flex justify-between py-4 border-b font-bold">
                  <h1 className="text-[#CCCCCC] italic">Total Fat:</h1>
                  <h1 className="text-[#CCCCCC] italic">20,00g</h1>
                </div>
                <div className="flex justify-between py-4 border-b font-bold">
                  <h1 className="text-[#CCCCCC] italic">Salt:</h1>
                  <h1 className="text-[#CCCCCC] italic">40,00 g</h1>
                </div>
                <div className="flex justify-between py-4 border-b font-bold">
                  <h1 className="text-[#CCCCCC] italic">Carbohydrates:</h1>
                  <h1 className="text-[#CCCCCC] italic">S, M, L, XL</h1>
                </div>
                <div className="flex justify-between py-4  font-bold">
                  <h1 className="text-[#CCCCCC] italic">Sugars:</h1>
                  <h1 className="text-[#CCCCCC] italic">55,00g</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5 flex justify-start w-full "id="review">
            <button className="shop-button px-4 py-3  bg-transparent border border-[#f99106]  text-[#f99106] hover:text-white rounded-full">
              <span>Review (0)</span>
            </button>
          </div>
          <div className="flex flex-col w-full justify-start ">
            <h1 className="text-[#CCCCCC] italic">
              There are no reviews for this product.
            </h1>
          </div>
          <div className="flex flex-co l w-full" >
            <div className="border-b border-[#414141] w-full">
              <h1 className="text-white py-3 text-bold">Write a review</h1>
            </div>
          </div>
          <div className="w-full pt-5">
            <label
              for="message"
              class="block mb-4 text-sm font-medium text-white dark:text-white"
            >
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered text-white input-primary w-full  focus:outline-none rounded-none focus:border-[#414141] border-[#414141] bg-transparent placeholder:text-[#CCCCCC]"
            />
          </div>
          <div className="w-full pt-5">
            <label
              for="message"
              class="block mb-4 text-sm font-medium text-white dark:text-white"
            >
              Your Review
            </label>
            <textarea
              className="textarea textarea-success w-full bg-transparent border border-[#414141] focus:border-[#414141] text-white placeholder:text-[#CCCC] min-h-40
             rounded-none  focus:outline-none outline-gray-500"
              placeholder="Bio "
            ></textarea>
            <h1 className="text-white">
              <span className="text-red-900">Notes: </span>HTML is not
              translate!
            </h1>
          </div>
          <div className="flex md:gap-4 gap-2 items-center justify-start w-full py-5">
            <h1 className="font-bold text-white text-[14px] md:text-base">
              Rating
            </h1>
            <h1 className="text-[#CCCCCC] text-[14px] md:text-base">Bad</h1>
            <div className="flex gap-2 md:gap-4 items-center">
              <input
                type="radio"
                name="radio-1"
                className="radio h-4 w-4 checked:bg-blue-600 "
              />
              <input
                type="radio"
                name="radio-1"
                className="radio h-4 w-4 checked:bg-blue-600"
              />
              <input
                type="radio"
                name="radio-1"
                className="radio h-4 w-4 checked:bg-blue-600"
              />
              <input
                type="radio"
                name="radio-1"
                className="radio h-4 w-4 checked:bg-blue-600"
              />
              <input
                type="radio"
                name="radio-1"
                className="radio h-4 w-4 checked:bg-blue-600"
              />
            </div>
            <h1 className="text-[#CCCCCC] text-[14px] md:text-base">Good</h1>
          </div>

          <div className="w-full justify-start border-b border-[#414141]">
            <h1 className="text-white text-lg font-semibold pb-3">Captcha</h1>
          </div>
          <div className="flex flex-col md:flex-row w-full justify-start py-5 items-start gap-3  md:items-center">
            <h1 className="md:w-1/4 text-white italic">
              Enter the code in the box below
            </h1>
            <input
              type="text"
              className="input input-bordered text-white input-primary md:w-3/5  focus:outline-none rounded-none focus:border-[#414141] border-[#414141] bg-transparent placeholder:text-white"
            />
          </div>
          <div className="w-full flex justify-end">
            <button className="shop-button px-4 py-2  bg-transparent border border-[#f99106]  text-[#f99106] hover:text-white rounded-full">
              <span>Continue</span>
            </button>
          </div>
        </div>
      </div>
     
    </>
  );
};
