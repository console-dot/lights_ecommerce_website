import React from "react";

export const Step1Component = ({ setStep }) => {
  return (
    <>
      <div className="w-full flex justify-center mt-10">
        <div className="w-4/5 flex gap-10 justify-center">
          <div className=" border-[5px] border-[#232323] w-1/2 p-4 text-white ">
            <div className="flex gap-2 mt-2 justify-between items-center">
              <h1>BILLING INFORMATION</h1>
              <h1 className="text-[#696969]">* Required Field</h1>
            </div>
            <hr className=" border-[#232323]" />

            <div>
              <div className="flex gap-2 mt-2 flex-col">
                <h1>First Name*</h1>
                <input
                  className="bg-transparent w-full rounded-lg border border-[#232323] p-2"
                  placeholder="First Name"
                />
              </div>
              <div className="flex gap-2 mt-2 flex-col">
                <h1>Last Name *</h1>
                <input
                  className="bg-transparent w-full rounded-lg border border-[#232323] p-2"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex gap-2 mt-2 flex-col">
                <h1>Address *</h1>
                <input
                  className="bg-transparent w-full rounded-lg border border-[#232323] p-2"
                  placeholder="Address"
                />
              </div>
              <div className="flex gap-4 mt-2">
                <div className="flex gap-2 mt-2 flex-col w-1/2">
                  <h1>City *</h1>
                  <input
                    className="bg-transparent w-full rounded-lg border border-[#232323] p-2"
                    placeholder="City Name"
                  />
                </div>
                <div className="flex gap-2 mt-2 flex-col w-1/2">
                  <h1>State *</h1>
                  <input
                    className="bg-transparent w-full rounded-lg border border-[#232323] p-2"
                    placeholder="State Name"
                  />
                </div>
              </div>
              <div className="flex gap-4 mt-2">
                <div className="flex gap-2 mt-2 flex-col w-1/2">
                  <h1>Country *</h1>
                  <input
                    className="bg-transparent w-full rounded-lg border border-[#232323] p-2"
                    placeholder="Country Name"
                  />
                </div>
                <div className="flex gap-2 mt-2 flex-col w-1/2">
                  <h1>Zip/Postal Code *</h1>
                  <input
                    className="bg-transparent w-full rounded-lg border border-[#232323] p-2"
                    placeholder="Zip/Postal Code "
                  />
                </div>
              </div>

              <div className="flex gap-2 mt-2 flex-col">
                <h1>Email Address *</h1>
                <input
                  className="bg-transparent w-full rounded-lg border border-[#232323] p-2"
                  placeholder="Email Address"
                />
              </div>
              <div className="flex gap-2 mt-2 flex-col">
                <h1>Phone Number *</h1>
                <input
                  className="bg-transparent w-full rounded-lg border border-[#232323] p-2"
                  placeholder="Phone Number "
                />
              </div>
            </div>
          </div>
          <div className="w-2/5 flex flex-col gap-10">
            <div className="border-[5px] border-[#232323] p-4">
              <div className="flex justify-between ">
                <h1 className="w-[25%]  heading flex justify-center items-center text-gray-400 text-xs md:text-xl font-semibold">
                  Iamge
                </h1>
                <h1 className="w-[25%]  heading flex justify-center items-center text-gray-400 text-xs md:text-xl font-semibold">
                  Name
                </h1>
                <h1 className="w-[25%]  heading flex justify-center items-center text-gray-400 text-xs md:text-xl font-semibold">
                  Items
                </h1>
                <h1 className="w-[25%]  heading flex justify-center items-center text-gray-400 text-xs md:text-xl font-semibold">
                  Price
                </h1>
              </div>
            </div>
            <div className="border-[5px] border-[#232323] p-4 text-white">
              <div className="flex gap-2  justify-between items-center">
                <h1>PAYMENT DETAILS</h1>
              </div>
              <hr className=" border-[#232323] mt-1" />

              <div className="mt-4">
                <h1>Cash on Delivery</h1>
              </div>
            </div>

            <div className="border-[5px] border-[#232323] p-4 text-white">
              <div className="flex gap-2  justify-between items-center">
                <h1>Your Order</h1>
                <button
                  className="bg-white text-black px-2 py-1 rounded-lg mb-1"
                  onClick={() => setStep("2")}
                >
                  Confirm Order
                </button>
              </div>
              <hr className=" border-[#232323] mt-1" />

              <div className="mt-4 justify-between flex  p-2">
                <h1>SubTotal</h1>
                <h1 c>3234 Rs</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
