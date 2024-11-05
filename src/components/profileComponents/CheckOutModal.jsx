import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { getCheckOutByID } from "../../api/checkOut";

export const CheckOutModal = ({ id }) => {
  const [singleCheckOutData, setSingleCheckOutData] = useState();
  const getCheckOutByIdCall = async () => {
    const res = await getCheckOutByID({ id: id });
    setSingleCheckOutData(res?.data);
  };
  useEffect(() => {
    if (!id) {
    } else {
      getCheckOutByIdCall();
    }
  }, [id]);
  const data = [];


  const setCheckOutDate = {
    checkoutDate: singleCheckOutData?.checkoutDate,
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true, // Use 12-hour format
    };
    return date.toLocaleString("en-US", options);
  };

  return (
    <div className="w-full z-50 flex justify-center items-center flex-col relative">
      <div className="fixed z-50 top-36 right-[26%] ">
        <form method="dialog" className="modal-backdrop">
          <button className="border-none focus:border-none">
            <ImCross className="text-white" />
          </button>
        </form>
      </div>
      <div
        className="modal-box bg-black  rounded-none flex"
        style={{ maxWidth: "50%", height: "calc(100vh - 8rem)" }}
      >
        <div className="w-full flex flex-col px-2">
          <div className="flex justify-center ">
            <h1 className="text-amber-500 heading font-semibold text-2xl pb-2 border-b border-[#414141] ">
              View Order Details
            </h1>
          </div>

          <div className="mt-10">
            <h1 className="text-amber-500 heading font-semibold text-2xl pb-2 border-[#414141] ">
              User Details
            </h1>
            <div className="w-full  mt-2">
              <div className="flex  font-semibold py-1">
                <h1 className="text-white heading w-32">Customer Name:</h1>
                <h1 className="text-[#b1b1b1] px-2 italic">
                  {singleCheckOutData?.firstName}
                  {singleCheckOutData?.lastName}
                </h1>
              </div>
              <div className="flex  font-semibold py-1">
                <h1 className="text-white heading w-32">Email :</h1>
                <h1 className="text-[#b1b1b1] px-2 italic">
                  {singleCheckOutData?.email}
                </h1>
              </div>
              <div className="flex  font-semibold py-1">
                <h1 className="text-white heading w-32">Phone :</h1>
                <h1 className="text-[#b1b1b1] px-2 italic">
                  {singleCheckOutData?.phone}
                </h1>
              </div>
              <div className="flex  font-semibold py-1">
                <h1 className="text-white heading w-32">City :</h1>
                <h1 className="text-[#b1b1b1] px-2 italic">
                  {singleCheckOutData?.city}
                </h1>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <h1 className="text-amber-500 heading font-semibold text-2xl pb-2 border-[#414141] ">
              Product Details
            </h1>
            <div className="flex text-white p-2">
              <div className="w-1/2">Product Name</div>
              <div className="w-1/2">Quantity</div>
            </div>
            <div className="flex flex-col max-h-52 overflow-y-scroll">
              {singleCheckOutData?.products.map((item) => (
                <div className="flex text-[#b1b1b1] border border-[#b1b1b1] rounded-md p-2 mb-2">
                  <div className="w-1/2">{item.productId.name}</div>
                  <div className="w-1/2">{item.quantity}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-2">
            <h1 className="text-amber-500 heading font-semibold text-2xl pb-2 border-[#414141] ">
              Order Details
            </h1>
            <div className="w-full  mt-2">
              <div className="flex  font-semibold py-1">
                <h1 className="text-white heading w-32 ">Order Id :</h1>
                <h1 className="text-[#b1b1b1] px-2 italic">
                  {singleCheckOutData?._id}
                </h1>
              </div>

              <div className="flex  font-semibold py-1">
                <h1 className="text-white heading w-32">Status :</h1>
                <h1 className="text-[#b1b1b1] px-2 italic">
                  {singleCheckOutData?.status}
                </h1>
              </div>
              <div className="flex  font-semibold py-1">
                <h1 className="text-white heading w-32">Item :</h1>
                <h1 className="text-[#b1b1b1] px-2 italic">
                  {singleCheckOutData?.products?.length}
                </h1>
              </div>
              <div className="flex  font-semibold py-1">
                <h1 className="text-white heading w-32">Order Time :</h1>
                <h1 className="text-[#b1b1b1] px-2 italic">
                {formatDate(setCheckOutDate?.checkoutDate)}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
