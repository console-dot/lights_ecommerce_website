import React, { useContext, useEffect, useState } from "react";
import { BennerImage1 } from "../../assets";
import AddCardContext from "../../context/addCart/AddCardContext";
import { FaCross, FaRegHeart } from "react-icons/fa";
import { TbFlagCancel } from "react-icons/tb";
import { ImCross } from "react-icons/im";
import { getSingleProduct } from "../../api/products";

export const ProductDetailsModal = ({ data, setIsModal }) => {
  const [productData, setProductData] = useState();
  const cart = useContext(AddCardContext);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="w-full z-50 flex justify-center items-center flex-col relative">
      <div className="fixed z-50 top-44 right-[20%] ">
        <form method="dialog" className="modal-backdrop">
          <button
            className="border-none focus:border-none"
            onClick={() => setIsModal(false)}
          >
            <ImCross className="text-white" />
          </button>
        </form>
      </div>
      <div
        className="modal-box bg-black  rounded-none flex"
        style={{ maxWidth: "70%", height: "calc(100vh - 8rem)" }}
      >
        <div className=" w-3/5 xl:w-1/2">
          <img
            src={`data:image/png;base64,${data?.avatar?.image}`}
            className="h-[500px] px-2"
          />
        </div>
        <div className="w-2/5 xl:w-1/2 flex flex-col px-2 mt-10">
          <div className="p-4 border-[0.5px] rounded-xl ">
            <div>
              {" "}
              <h1 className="text-[#BFBFBF] text-lg">
                {data?.categoryId?.name
                  ?.split(" ")
                  .map(
                    (word) =>
                      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                  )
                  .join(" ")}
              </h1>{" "}
            </div>
            <div>
              <h1 className="text-amber-500 text-3xl pb-2  heading">
                {data?.name
                  ?.split(" ")
                  .map(
                    (word) =>
                      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                  )
                  .join(" ") || "Name Light"}
              </h1>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col  gap-5 py-5 ">
                {" "}
                <div className="flex  font-semibold ">
                  <h1 className="text-white  text-4xl flex gap-2">
                    <span className="heading ">Rs.</span>
                    {data?.price}
                  </h1>
                </div>
                <div className="flex  font-semibold ">
                  <h1 className="text-[#b1b1b1] w-32 heading">
                    Availabel Stock :
                  </h1>
                  {data?.stock === 0 ? (
                    <h1 className="text-red-500 md:px-10 italic">
                      Out Of Stock
                    </h1>
                  ) : (
                    <h1 className="text-[#b1b1b1] md:px-10 italic">
                      {data?.stock?.toString() + " Items Available"}
                    </h1>
                  )}
                </div>
                <div className="flex justify-start items-center">
                  <button
                    className="shop-button px-4 py-3  bg-transparent border border-[#f99106]  text-[#f99106] hover:text-white rounded-full"
                    onClick={() => cart.addToCart(data)}
                  >
                    <span>Add to Cart</span>
                  </button>
                </div>
                <div className="flex   ">
                  <h1 className="text-[#b1b1b1] text-lg italic">
                    {data?.description}
                  </h1>
                </div>
                {/* <div className="flex flex-col font-semibold mt-3">
                <h1 className="text-amber-500 text-xl heading ">
                  Shipping & Retrun
                </h1>
                <h1 className="text-[#b1b1b1] mt-2">
                  🚚 Delivery in Lahore: Free Shipping! For other cities, enjoy
                  our reliable shipping service with a client fee of RS 10,000.
                  Your order will be delivered within 10 to 14 days. Shop now
                  and experience convenience at your doorstep! 🌟
                </h1>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
