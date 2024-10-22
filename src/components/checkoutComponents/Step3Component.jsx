import React from "react";

export const Step3Component = ({ setStep }) => {
  return (
    <>
      <div className=" flex flex-col items-center justify-center mt-10">
        <div className="border-[5px] border-[#232323] p-5 w-3/5">
          <div>
            <h1 className="text-white">YOUR ORDER</h1>
            <hr className="border-[#232323] my-2" />
            <div className="  flex justify-between text-white">
              <h1 className="text-[#494949]">
                Thank you for purchasing Suze Orman's Personal Finacne One One .
                Please retain this receipt fro your records
              </h1>
            </div>
          </div>
          <div className="w-full flex gap-20 mt-10">
            <div className="w-1/2 text-white">
              <h1>BILLING ADRESS</h1>
              <hr className="border-[#232323] border mt-1 " />
              <div className="mt-2">
                <h1>First&Last Name</h1>
                <h1>Address</h1>
                <h1>Phone Number</h1>
                <h1>Country</h1>
              </div>
            </div>
            <div className="w-1/2 text-white">
              <h1>ORDER SUMMARY </h1>
              <hr className="border-[#232323] border mt-1" />
              <div className="mt-2">
                <div className="flex gap-1">
                  <h1>Order # :</h1>
                  <h1 className="text-[#494949]"> 434553732</h1>
                </div>
                <div className="flex gap-1">
                  <h1>Date :</h1>
                  <h1 className="text-[#494949]"> 12/03/2024</h1>
                </div>
                <div className="flex gap-1">
                  <h1>Order Total :</h1>
                  <h1 className="text-[#494949]"> 334 Rs</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-20 ">
            <div className="w-3/5 mt-5">
              <h1 className="text-white">YOUR ORDER</h1>
              <hr className="border-[#232323] my-2" />
              <div className="  flex justify-between text-white">
                <h1>Subtotal</h1>
                <h1>4743 Rs</h1>
              </div>
            </div>
            <div className="w-2/5 flex flex-col justify-center items-center">
              <h1 className="text-white">Order Total</h1>
              <div className="flex ">
                <h1 className="text-7xl text-amber-500">345</h1>
                <h1 className="flex items-end text-amber-500">Rs</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            className="bg-white  py-3 px-7 rounded-lg"
            onClick={() => setStep("1")}
          >
            Check Out
          </button>
        </div>
      </div>
    </>
  );
};
