import React, { useContext, useEffect, useState } from "react";
import { getCheckOut } from "../../api/checkOut";
import { FaRegEye } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { CheckOutModal } from "./CheckOutModal";
import AddCardContext from "../../context/addCart/AddCardContext";
import { order } from "../../assets";

export const Order = () => {
  const [checkOutData, setCheckOutData] = useState();
  const [checkOutId, setCheckOutId] = useState();
  const cart = useContext(AddCardContext);

  useEffect(() => {
    const cartUserId = localStorage.getItem("cartId");
    if (cartUserId?.length > 0) {
      cart.getCartsCall(cartUserId);
    }
  }, []);

  const getCheckOutCall = async () => {
    const res = await getCheckOut();
    setCheckOutData(res?.data);
  };

  useEffect(() => {
    getCheckOutCall();
  }, []);


  const userId = localStorage.getItem("user_Id");

  return (
    <div className="h-screen">
      <div className="border border-[#636363] flex items-start  rounded-lg w-full  p-5 flex-col h-full  overflow-y-scroll no-scrollbar">
        <div className="w-full flex justify-between">
          <h1 className="heading text-white text-2xl">Your Order</h1>
        </div>

        {checkOutData?.checkout
          ?.filter((i) => i.userId === userId)
          .map((item) => (
            <div className="w-full  border border-[#636363] rounded-lg mt-4">
              <div className="relative w-full h-[300px] flex justify-center items-center">
                <div
                  style={{ backgroundImage: `url(${order})` }}
                  alt=""
                  className="w-[60%] h-full flex opacity-5 bg-cover"
                />
                <div className="absolute flex w-full h-full p-4">
                  <div className="w-1/2  flex flex-col   h-full">
                    <div className=" flex justify-start ">
                      <h1 className="text-amber-500 text-2xl heading">
                        Order Details
                      </h1>
                    </div>
                    <div className="flex-col flex justify-start items-start mt-4">
                      <div className="flex text-white  gap-3">
                        <h1>Order Id :</h1>
                        <h1 className="text-[#7c7c7c]">{item?._id}</h1>
                      </div>
                      <div className="flex text-white  gap-3">
                        <h1>Customer Name :</h1>
                        <h1 className="text-[#7c7c7c]">
                          {item?.firstName}
                          {item?.lastName}
                        </h1>
                      </div>
                      <div className="flex text-white  gap-3">
                        <h1>Email :</h1>
                        <h1 className="text-[#7c7c7c]">{item?.email}</h1>
                      </div>
                      <div className="flex text-white  gap-3">
                        <h1>Phone :</h1>
                        <h1 className="text-[#7c7c7c]">{item?.phone}</h1>
                      </div>
                      <div className="flex text-white  gap-3">
                        <h1>City :</h1>
                        <h1 className="text-[#7c7c7c]">{item?.city}</h1>
                      </div>
                      <div className="flex text-white  gap-3">
                        <h1>status :</h1>
                        <h1 className="text-[#7c7c7c]">{item?.status}</h1>
                      </div>
                      <div className="flex text-white  gap-3">
                        <h1>Item :</h1>
                        <h1 className="text-[#7c7c7c]">
                          {item?.products?.length}
                        </h1>
                      </div>
                      <div className="flex text-white  gap-3">
                        <h1>Order Time :</h1>
                        <h1 className="text-[#7c7c7c]">{item?.checkoutDate}</h1>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 overflow-y-scroll ">
                    <div className=" flex justify-start ">
                      <h1 className="text-amber-500 text-2xl heading pl-8">
                        Product Details
                      </h1>
                    </div>
                    <div className="flex w-full text-white justify-between mt-4">
                      <h1 className="w-[30%]  flex pl-8">Image</h1>
                      <h1 className="w-[30%] flex justify-center">Name</h1>
                      <h1 className="w-[30%] flex justify-center">Quantity</h1>
                    </div>
                    {item.products.map((i) => (
                      <div className="flex justify-between items-center ">
                        <div className="w-[30%] h-16 flex justify-start">
                          <img src={`data:image/png;base64,${i?.productId.avatar?.image}`} className="w-[80%] h-full" alt="" />
                        </div>
                        <div className="w-[30%] flex justify-center">
                          <h1 className="text-[#7c7c7c]">{i?.productId?.name}</h1>
                        </div>
                        <div className="w-[30%] flex justify-center">
                          <h1 className="text-[#7c7c7c]">{i?.quantity}</h1>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        {/* <div className="w-full border border-[#636363] mt-10">
          <table className={`w-full `}>
            <thead>
              <tr className=" text-start text-white">
                <th className="py-4">Order Id</th>
                <th className="pb-2">Customer</th>
                <th className="pb-2">Items</th>
                <th className="pb-2">Order Status</th>
                <th className="pb-2">Action</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {checkOutData?.checkout
                ?.filter((i) => i.userId === userId)
                .map((item) => (
                  <tr className="border-t border-[#232323] shadow-slate-50 ">
                    <th>
                      <div>
                        <h1 className="font-normal text-sm">{item._id}</h1>
                      </div>
                    </th>

                    <th className="text-base  font-normal ">
                      {item?.firstName}
                   
                    </th>

                    <th className="text-base  font-normal">
                      {item.products.length}
                    </th>
                    <th className="text-base  font-normal">
                      <div className="flex justify-center items-center">
                        <h1 className="w-20 rounded-lg  text-white">
                          {item.status}
                        </h1>
                      </div>
                    </th>

                    <th>
                      <div className="flex justify-center items-center gap-5 text-white">
                        <FaRegEye
                          className="cursor-pointer text-lg hover:text-amber-500 "
                          onClick={() => {
                            document.getElementById("my_modal_1").showModal();
                            setCheckOutId(item?._id);
                          }}
                        />
                        <MdDelete className="cursor-pointer text-lg hover:text-amber-500 " />
                      </div>
                    </th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div> */}
      </div>
      <dialog id="my_modal_1" className="modal flex items-end">
        <CheckOutModal id={checkOutId} />
      </dialog>
    </div>
  );
};
