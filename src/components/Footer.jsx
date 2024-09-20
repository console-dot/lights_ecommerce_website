import React, { useState } from "react";
import { logo } from "../assets";
import { FaLocationDot, FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare, FaPhoneAlt, FaTwitterSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { TfiYoutube } from "react-icons/tfi";
import { FcGoogle } from "react-icons/fc";
import { RxCross1 } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
export const Footer = () => {
  const [isOpen, setIsOpen] = useState("");
  const handleToggle = (prop) => {
    console.log(prop);
    setIsOpen(prop);
  };
  return (
    <>
      <div className="flex justify-center items-center py-5 md:py-20 border-b  ">
        <div
          className="container lg:px-4 lg:flex-row gap-3 lg:gap-0"
          style={{
            display: "flex",

            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <div className="lg:w-1/4 flex items-start justify-start flex-col px-5">
            <div className="w-32 h-10">
              <img src={logo} className="" />
            </div>
            <div className="md:pt-10 pt-5">
              <h1 className="text-[#CCCC] italic">
                Lorem ipsum dolor sit ameur adipiscing elit, sed do eiusmodmpor
                dolore
              </h1>
            </div>
          </div>
          <div className="lg:w-1/4 w-full flex flex-col px-5 ">
            <div className="w-full lg:hidden">
              <div
                className=" text-left flex justify-between items-center  relative"
                // onClick={() => handleToggle("Light")}
              >
                <h1 className="text-white font-semibold text-xl heading ">
                  Information
                </h1>
                <div className="flex justify-end  items-center absoulte right-0 top-0 z-50 text-white">
                  {isOpen === "Light" ? (
                    <RxCross1 onClick={() => handleToggle("light")} />
                  ) : (
                    <RiArrowDropDownLine
                      className="text-2xl"
                      onClick={() => handleToggle("Light")}
                    />
                  )}
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 delay-75 ease-in-out ${
                  isOpen === "Light" ? "opacity-100 h-[136px]" : "opacity-0 h-0"
                }`}
              >
                <div className="p-2 w-full h-ful bg-transparent italic ">
                  <h1 className="text-[#CCCC]">About Us</h1>
                  <h1 className="text-[#CCCC]">Delivery Information</h1>
                  <h1 className="text-[#CCCC]">Privacy Policy</h1>
                  <h1 className="text-[#CCCC]">Terms & Conditions</h1>
                  <h1 className="text-[#CCCC]">Contact Us</h1>
                </div>
              </div>
            </div>
            <div className="hidden justify-start items-start lg:flex ">
              <h1 className="text-white font-semibold text-2xl  heading">
                Information
              </h1>
            </div>
            <div className=" flex-col pt-5 gap-2 hidden lg:flex italic" >
              <h1 className="text-[#CCCC]">About Us</h1>
              <h1 className="text-[#CCCC]">Delivery Information</h1>
              <h1 className="text-[#CCCC]">Privacy Policy</h1>
              <h1 className="text-[#CCCC]">Terms & Conditions</h1>
              <h1 className="text-[#CCCC]">Contact Us</h1>
            </div>
          </div>
          <div className="lg:w-1/4 w-full flex flex-col px-5 ">
            <div className="w-full lg:hidden">
              <div className=" text-left flex justify-between items-center  relative">
                <h1 className="text-white font-semibold text-xl heading">
                  My Account
                </h1>
                <div className="flex justify-end  items-center absoulte right-0 top-0 z-50 text-white">
                  {isOpen === "My Account" ? (
                    <RxCross1 onClick={() => handleToggle("light")} />
                  ) : (
                    <RiArrowDropDownLine
                      className="text-2xl"
                      onClick={() => handleToggle("My Account")}
                    />
                  )}
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 delay-75 ease-in-out ${
                  isOpen === "My Account"
                    ? "opacity-100 h-[136px]"
                    : "opacity-0 h-0"
                }`}
              >
                <div className="p-2 w-full h-ful bg-transparent italic">
                  <h1 className="text-[#CCCC]">My Account</h1>
                  <h1 className="text-[#CCCC]">Order History</h1>
                  <h1 className="text-[#CCCC]">Wish List</h1>
                  <h1 className="text-[#CCCC]">Affiliates</h1>
                  <h1 className="text-[#CCCC]">Newsletter</h1>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex justify-start items-start  ">
              <h1 className="text-white font-semibold text-2xl heading">My Account</h1>
            </div>
            <div className="hidden lg:flex flex-col pt-5 gap-2 italic">
              <h1 className="text-[#CCCC]">My Account</h1>
              <h1 className="text-[#CCCC]">Order History</h1>
              <h1 className="text-[#CCCC]">Wish List</h1>
              <h1 className="text-[#CCCC]">Affiliates</h1>
              <h1 className="text-[#CCCC]">Newsletter</h1>
            </div>
          </div>
          <div className="lg:w-1/4 w-full flex flex-col px-5 ">
            <div className="w-full lg:hidden">
              <div
                className=" text-left flex justify-between items-center  relative"
                // onClick={() => handleToggle("Light")}
              >
                <h1 className="text-white font-semibold text-xl heading">
                  Store Information
                </h1>
                <div className="flex justify-end  items-center absoulte right-0 top-0 z-50 text-white">
                  {isOpen === "Store Information" ? (
                    <RxCross1 onClick={() => handleToggle("light")} />
                  ) : (
                    <RiArrowDropDownLine
                      className="text-2xl"
                      onClick={() => handleToggle("Store Information")}
                    />
                  )}
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 delay-75 ease-in-out ${
                  isOpen === "Store Information"
                    ? "opacity-100 h-[136px]"
                    : "opacity-0 h-0"
                }`}
              >
                <div className="p-2 w-full h-ful bg-transparent italic ">
                  <div className="flex gap-2 items-center">
                    <FaLocationDot className="text-[#CCCC]" />
                    <h1 className="text-[#CCCC] pr-20">
                      Ceiling - Lighting Store United States
                    </h1>
                  </div>
                  <div className="flex gap-2 items-center">
                    <FaPhoneAlt className="text-[#CCCC]" />
                    <h1 className="text-[#CCCC] pr-5">(+00) 123-456-789</h1>
                  </div>
                  <div className="flex gap-2 items-center">
                    <IoIosMail className="text-[#CCCC]" />
                    <h1 className="text-[#CCCC] pr-5">demo@company.com</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:flex hidden justify-start items-start ">
              <h1 className="text-white font-semibold text-2xl heading">
                Store Information
              </h1>
            </div>
            <div className="lg:flex hidden flex-col pt-5 gap-2 justify-start items-start italic ">
              <div className="flex gap-2 items-center">
                <FaLocationDot className="text-[#CCCC]" />
                <h1 className="text-[#CCCC] pr-20">
                  Ceiling - Lighting Store United States
                </h1>
              </div>
              <div className="flex gap-2 items-center">
                <FaPhoneAlt className="text-[#CCCC]" />
                <h1 className="text-[#CCCC] pr-5">(+00) 123-456-789</h1>
              </div>
              <div className="flex gap-2 items-center">
                <IoIosMail className="text-[#CCCC]" />
                <h1 className="text-[#CCCC] pr-5">demo@company.com</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-5 italic">
        <div className="container">
          <div>
            <h1 className="text-[#CCCC] text-center ">
              Powered By ConsoleDot - Lighting Store © 2024
            </h1>
          </div>
          <div className="flex items-center gap-4 pt-5">
            <FaSquareFacebook className="text-blue-700 bg-white  text-2xl" />
            <FaTwitterSquare className="text-blue-700 bg-white text-2xl" />
            <TfiYoutube className="text-red-700 bg-white text-2xl p-[1px]" />
            <FcGoogle className="bg-white"/>
            <FaInstagramSquare className="text-pink-700 bg-white text-2xl" />
          </div>
        </div>
      </div>
    </>
  );
};
