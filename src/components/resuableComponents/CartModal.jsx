import React, { useContext } from "react";
import AddCardContext from "../../context/addCart/AddCardContext";
import { MdDeleteSweep } from "react-icons/md";

export const CartModal = () => {
  const cart = useContext(AddCardContext);
  console.log(cart);
  return (
    <div className=" lg:w-[40%] w-full sm:w-3/5 md:1/2  min-h-80 bg-slate-50 h-96  absolute z-50 top-14 md:right-24  rounded-lg overflow-y-scroll">
      <div className="p-2 fixed lg:w-[40%] w-full sm:w-3/5 md:1/2 ">
        <div className="flex px-2 justify-between ">
          <h1 className="w-[20%] flex justify-center items-center text-gray-400 text-xs md:text-xl font-semibold">
            Iamge
          </h1>
          <h1 className="w-[20%] flex justify-center items-center text-gray-400 text-xs md:text-xl font-semibold">
            Name
          </h1>
          <h1 className="w-[20%] flex justify-center items-center text-gray-400 text-xs md:text-xl font-semibold">
            Quantity
          </h1>
          <h1 className="w-[20%] flex justify-center items-center text-gray-400 text-xs md:text-xl font-semibold">
            Price
          </h1>
          <h1 className="w-[20%] flex justify-center items-center text-gray-400 text-xs md:text-xl font-semibold">
            Delete
          </h1>
        </div>
      </div>
      <div className="mt-10">
        {cart?.cartData?.map((i, index) => (
          <div className="p-2  ">
            <div className="flex justify-between items-center bg-amber-400 rounded-lg p-2 w-full h-16 md:h-20">
              <div className="w-[20%] h-full flex items-center gap-2">
                <img src={i?.image} className="w-full h-full rounded-lg" />
              </div>
              <div className="w-[20%] text-xs md:text-base flex justify-center items-center">
                {i?.name}
              </div>
              <div className=" justify-center items-center flex w-[20%] ">
                <div className=" justify-center items-center flex gap-1 xxs:gap-2">
                  <h1 className="md:text-2xl " onClick={cart.subtractQuantity}>
                    -
                  </h1>

                  <input
                    type="text"
                    value={cart.quantity}
                    className="h-full text-center p-0 xxs:w-10 w-5 border rounded-md md:rounded-lg "
                    onChange={(e) => cart.onChange(e)}
                  />
                  <button className="md:text-2xl" onClick={cart.addQuantity}>
                    +
                  </button>
                </div>
              </div>
              <div className="w-[20%] flex justify-center items-center ">
                {i?.price}
              </div>
              <div
                className="w-[20%] flex justify-center items-center hover:cursor-pointer"
                onClick={() => cart.deleteProduct(index)}
              >
                <MdDeleteSweep className="text-2xl" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
