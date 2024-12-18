import React, { useContext, useEffect, useState } from "react";
import AddCardContext from "../../context/addCart/AddCardContext";
import { MdDeleteSweep } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { createCarts, deleteCarts } from "../../api/cart";
import { toast } from "react-toastify";

export const CartModal = () => {
  const [updateQuantity, setUpdateQuantity] = useState();
  const [isUpdate, setIsUpdate] = useState();
  const navigate = useNavigate();
  const cart = useContext(AddCardContext);
  const changeAddQuantity = (product) => {
    console.log(product.productId?._id);
    setIsUpdate(product.productId?._id);
    cart.setCartData((prevCartData) =>
      prevCartData.map((item) =>
        item.productId._id === product.productId?._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  useEffect(() => {
    if (isUpdate) {
      updateCartFun(isUpdate);
    }
  }, [cart.cartData.map((item) => item.quantity)]);
  const changeSubtractQuantity = (product) => {
    setIsUpdate(product.productId?._id);
    cart.setCartData((prevCartData) =>
      prevCartData.map((item) =>
        item.productId._id === product.productId?._id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  const updateCartFun = async (id) => {
    let formData = {};
    const obj = cart.cartData.find((item) => item.productId._id === id);
    formData["userId"] = localStorage.getItem("user_Id");
    formData["cartId"] = localStorage.getItem("cartId");
    formData["product"] = { productId: id, quantity: obj?.quantity };
    const token = localStorage.getItem("access_token");
    const res = await createCarts({ cartData: formData, token });
    if (res.status === 200) {
    } else if (res.response.status === 401) {
      toast("section are expire");
      cart.setIsCartModal(false);
      cart.setIsModalOpen(true);
      localStorage.clear();
    }
  };

  const goToCheckOutPage = () => {
    if (cart?.cartData?.length > 0) {
      navigate(`/check-out`);
    } else {
      toast("add item in cart");
    }
  };

  return (
    <div className="absolute w-full">
      <div
        className="fixed w-full h-screen z-10  top-0 left-0 "
        onClick={() => cart.setIsCartModal(false)}
      ></div>
      <div className=" lg:w-[35%] md:top-[45px] top-[40px] w-full sm:w-3/5 md:1/2   bg-black h-96  absolute  md:right-10   overflow-y-scroll border-t-[2px] border-t-[#F99106] shadow-lg z-50 flex  flex-col justify-between right-[27px]">
        <div className="p-2 fixed lg:w-[35%] w-full sm:w-3/5 md:1/2 ">
          <div className="flex px-2 justify-between ">
            <h1 className="w-[20%]  heading flex justify-center items-center text-gray-400 text-xs md:text-xl font-semibold">
              Iamge
            </h1>
            <h1 className="w-[20%]  heading flex justify-center items-center text-gray-400 text-xs md:text-xl font-semibold">
              Name
            </h1>
            <h1 className="w-[20%]  heading flex justify-center items-center text-gray-400 text-xs md:text-xl font-semibold">
              Items
            </h1>
            <h1 className="w-[20%]  heading flex justify-center items-center text-gray-400 text-xs md:text-xl font-semibold">
              Price
            </h1>
            {/* {isUpdate ? (
              <h1 className="w-[20%] heading  flex justify-center items-center text-gray-400 text-xs md:text-xl font-semibold">
                Save
              </h1>
            ) : (
              <h1 className="w-[20%] heading  flex justify-center items-center text-gray-400 text-xs md:text-xl font-semibold">
                Delete
              </h1>
            )} */}
            <h1 className="w-[20%] heading  flex justify-center items-center text-gray-400 text-xs md:text-xl font-semibold">
              Delete
            </h1>
          </div>
        </div>
        <div className="mt-10">
          {cart?.cartData?.length === 0 && (
            <div className="w-full h-full flex justify-center items-center pt-28">
              <h1 className="text-[#CCCC] text-2xl italic">Empty Cart Items</h1>
            </div>
          )}
          {cart?.cartData?.map((product, index) => (
            <>
              <div className="pl-2 pt-2  ">
                <div className="flex justify-between items-center bg-black  p-2 w-full h-16 md:h-20">
                  <div className="w-[20%] h-full flex items-center gap-2">
                    <img
                      src={`data:image/png;base64,${product?.productId?.avatar?.image}`}
                      className="w-full h-full bg-[#DBD4D4] heading"
                    />
                  </div>
                  <div className="w-[20%] text-center text-xs md:text-base flex justify-center items-center text-amber-500">
                    {product?.productId?.name.substring(0, 10)}
                  </div>
                  <div className=" justify-center items-center flex w-[20%] ">
                    <div className=" justify-center items-center flex gap-1 xxs:gap-2 md:gap-1">
                      <h1
                        className="md:text-xl "
                        onClick={cart.subtractQuantity}
                      >
                        <GrFormSubtract
                          onClick={() => {
                            changeSubtractQuantity(product);
                          }}
                        />
                      </h1>

                      <input
                        type="text"
                        value={product?.quantity}
                        className="h-full  text-center p-0 xxs:w-6 w-5 bg-amber-500  border  "
                        onChange={(e) => setUpdateQuantity(e.target.value)}
                      />
                      <button
                        className="md:text-xl"
                        onClick={() => {
                          changeAddQuantity(product);
                        }}
                      >
                        <IoMdAdd />
                      </button>
                    </div>
                  </div>
                  <div className="w-[20%] flex justify-center items-center  text-amber-500 pl-2">
                    {product?.productId?.price * product?.quantity}
                  </div>
                  <div className="w-[20%] flex justify-center items-center hover:cursor-pointer">
                    {/* {isUpdate === product.productId?._id ? (
                      <TiTick
                        onClick={() => updateCartFun(product?.productId?._id)}
                      />
                    ) : (
                      <MdDeleteSweep
                        className="text-2xl ml-2 text-amber-500"
                        onClick={() =>
                          cart.deleteCartFun(product?.productId?._id)
                        }
                      />
                    )} */}
                    <MdDeleteSweep
                      className="text-2xl ml-2 text-amber-500"
                      onClick={() =>
                        cart.deleteCartFun(product?.productId?._id)
                      }
                    />
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="w-full flex justify-center py-2 underline ">
          <button className="text-white" onClick={goToCheckOutPage}>
            CheckOut
          </button>
        </div>
      </div>
    </div>
  );
};
