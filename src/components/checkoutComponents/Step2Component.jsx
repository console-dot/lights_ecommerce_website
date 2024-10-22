import React from "react";

export const Step2Component = ({ setStep }) => {
  return (
    <>
      <div className=" flex justify-center mt-10">
        <div className="border-[5px] border-[#232323] p-5 w-3/5">
          <div className="w-full flex gap-20">
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
              <h1>PAYMENT DETAILS </h1>
              <hr className="border-[#232323] border mt-1" />
              <div className="mt-2">Cash On Delivery</div>
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
            <div className="w-2/5 flex justify-center items-center">
              <button
                className="bg-white  py-3 px-7 rounded-lg"
                onClick={() => setStep("3")}
              >
                Order Sumbit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
