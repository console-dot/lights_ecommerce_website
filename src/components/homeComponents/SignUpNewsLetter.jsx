import React from "react";
import { newLetterImage } from "../../assets";
import { CiMail } from "react-icons/ci";

export const SignUpNewsLetter = () => {
  return (
    <div className="flex justify-center items-center flex-col md:flex-row w-full pb-10 bg-[#171717]">
      <div className="md:w-1/2 ">
        <img src={newLetterImage} />
      </div>
      <div className="md:w-1/2 md:px-10  px-4 flex justify-center flex-col pt-5 ">
        <div className="flex flex-row lg:flex-col items-center lg:items-start gap-2">
          <CiMail className="text-white text-4xl text-extrabold font-extrabold" />
          <h1 className="text-white md:text-xl lg:text-4xl text-extrabold py-2">
            {" "}
            SIGN UP FOR NEWLETTER
          </h1>
        </div>
        <h1 className="text-[#CCCCCC]  lg:text-xl">
          Sign up with us and get latest deals, offers & updates about store
        </h1>
        <div className=" border-b border-white relative lg:pt-5 pt-2 pb-1">
          <input
            type="text"
            placeholder="enter your email"
            className="input input-bordered text-white input-primary w-full  focus:outline-none border-none bg-transparent"
          />
          <div className="absolute bottom-1 right-0">
            <button className="shop-button px-2 py-1 bg-[#F99106] text-black rounded-full">
              <span>Subscribe</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
