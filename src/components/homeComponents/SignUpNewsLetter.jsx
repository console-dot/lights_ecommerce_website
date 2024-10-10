import React from "react";
import { newLetterImage } from "../../assets";
import { CiMail } from "react-icons/ci";

export const SignUpNewsLetter = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="container p-4 ">
        <div className="flex justify-center items-center flex-col md:flex-row w-full  bg-[#171717] overflow-hidden ">
          <div className="md:w-1/2 overflow-hidden">
            <img
              src={newLetterImage}
              className="hover:scale-110 transition hover:ease-in ease-out duration-500  overflow-hidden cursor-pointer"
            />
          </div>
          <div className="md:w-1/2 md:px-10  px-4 flex justify-center flex-col pt-5 ">
            <div className="flex flex-row lg:flex-col items-center lg:items-start gap-2">
              <CiMail className="text-[#CCCCCC] text-3xl  font-extrabold " />
              <h1 className="text-amber-500 heading  md:text-xl lg:text-3xl text-extrabold py-2">
                {" "}
                SIGN UP FOR NEWLETTER
              </h1>
            </div>
            <h1 className="text-[#CCCCCC] italic  ">
              Sign up with us and get latest deals, offers & updates about store
            </h1>
            <div className=" border-b border-white relative lg:pt-5 pt-2 pb-1">
              <input
                type="text"
                placeholder="enter your email"
                className="input input-bordered text-white input-primary w-full  focus:outline-none border-none bg-transparent"
              />
              <div className="absolute bottom-2.5 right-0">
                <button className="shop-button px-2 py-1   bg-transparent border border-[#f99106]  text-[#f99106] hover:text-white rounded-full">
                  <span className="text-white ">Subscribe</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
