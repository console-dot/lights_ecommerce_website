import React, { useContext, useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import AddCardContext from "../../context/addCart/AddCardContext";

export const AboutThisItem = ({data}) => {
  const [isOpen, setIsOpen] = useState("ProductDetails");
  const cart =useContext(AddCardContext)
  const handleToggle = (prop) => {
    setIsOpen(prop);
  };
  return (
    <>
      {/* About this item */}
      <div className="p-4">
        <div>
          <h1 className="text-3xl font-semibold p-5"> About this item </h1>
          <ul>
            <li className="p-5 border-t">
              <div className="flex items-center relative">
                <div
                  className="w-3/4 text-left flex justify-between items-center relative"
                  onClick={() => handleToggle("ProductDetails")}
                >
                  <h1>ProductDetails</h1>
                </div>
                <div className="w-1/4 flex justify-end items-center absolute right-0 top-0 z-30">
                  {isOpen === "ProductDetails" ? (
                    <SlArrowDown onClick={() => handleToggle("light")} />
                  ) : (
                    <SlArrowUp onClick={() => handleToggle("ProductDetails")} />
                  )}
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-1000 delay-75 ease-in-out ${
                  isOpen === "ProductDetails"
                    ? "opacity-100 h-64"
                    : "opacity-0 h-0"
                }`}
              >
                <div className="p-2 w-full h-full text-black bg-slate-50 rounded-lg">
                  <p>
                    Create a dazzling display in your home's hall with our
                    "Radiant Rhapsody" multi-light chandelier for interior
                    lighting. The modern chandelier features multiple lights
                    that radiate a warm and inviting glow, perfect for welcoming
                    guests into your home. Its sleek and elegant style
                    complements any decor and adds a touch of sophistication to
                    your space. The chandelier's size and shape make it the
                    perfect addition to your home's hall, providing ample
                    lighting for socializing or hosting events.
                  </p>
                  <p>Sub Option 1.2</p>
                  <p>Sub Option 1.3</p>
                </div>
              </div>
            </li>
            <li className=" p-5 border-t relative">
              <div className=" flex items-center ">
                <div
                  className="w-3/4 text-left flex justify-between items-center  relative"
                  onClick={() => handleToggle("Specifications")}
                >
                  <h1>Specifications</h1>{" "}
                </div>
                <div className="w-1/4 flex justify-end  items-center absoulte top-0 z-30">
                  {isOpen === "Specifications" ? (
                    <SlArrowDown onClick={() => handleToggle("light")} />
                  ) : (
                    <SlArrowUp onClick={() => handleToggle("Specifications")} />
                  )}
                </div>
              </div>
              {isOpen === "Specifications" && (
                <div className="p-2 transition-all duration-300 text-black bg-slate-50">
                  <p>Sub Option 1.1</p>
                  <p>Sub Option 1.2</p>
                  <p>Sub Option 1.3</p>
                </div>
              )}
            </li>
            <li className=" p-5 border-y">
              <div className=" flex items-center">
                <div
                  className="w-3/4 text-left flex justify-between items-center  relative"
                  onClick={() => handleToggle("Directions")}
                >
                  <h1>Directions</h1>{" "}
                </div>
                <div className="w-1/4 flex justify-end  items-center absoulte top-0 z-30">
                  {isOpen === "Directions" ? (
                    <SlArrowDown onClick={() => handleToggle("light")} />
                  ) : (
                    <SlArrowUp onClick={() => handleToggle("Directions")} />
                  )}
                </div>
              </div>
              {isOpen === "Directions" && (
                <div className="p-2 transition duration-700 delay-500  text-black bg-slate-50">
                  <p>Sub Option 1.1</p>
                  <p>Sub Option 1.2</p>
                  <p>Sub Option 1.3</p>
                </div>
              )}
            </li>
          </ul>
          <div className="pt-10 flex justify-center items-center lg:hidden">
              <button
                className="bg-blue-600 text-white py-3 px-6  rounded-lg "
                onClick={() => {
                  cart.addToCart(data);
                }}
              >
                Add to Cart
              </button>
            </div>
        </div>
      </div>
    </>
  );
};
