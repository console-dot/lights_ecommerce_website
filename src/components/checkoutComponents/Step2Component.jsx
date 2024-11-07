import React, { useContext, useEffect } from "react";
import AddCardContext from "../../context/addCart/AddCardContext";
import { FaArrowLeft } from "react-icons/fa";
import { createCheckOut } from "../../api/checkOut";
import { toast } from "react-toastify";

export const Step2Component = ({
  setStep,
  fromdata,
  setFromData,
  setCheckOutData,
}) => {
  const cart = useContext(AddCardContext);
  let result;

  useEffect(() => {
    const userId = localStorage.getItem("user_Id");
    setFromData({ ...fromdata, userId: userId });
  }, []);

  const createCheckOutFun = async () => {
    delete fromdata.__v;
    delete fromdata._id;

    const token = localStorage.getItem("access_token");
    const res = await createCheckOut({ fromdata, token });
    console.log(res);
    if (res.status === 200) {
      // localStorage.removeItem("cartId");
      setCheckOutData(res?.data);
      setStep("3");
    }
    if (res.status === 401) {
      toast("section are expire");
      localStorage.clear();
    }
  };
  return (
    <>
      <div className="relative flex justify-center mt-10 px-2 md:px-0">
        <div className="fixed top-5 left-5 md:top-10 md:left-10">
          <FaArrowLeft
            className=" text-amber-500 text-3xl cursor-pointer"
            onClick={() => setStep("1")}
          />
        </div>
        <div className="border-[5px] border-[#232323] p-5 w-full  md:w-3/5">
          <div className="w-full flex flex-col md:flex-row gap-2 md:gap-20">
            <div className="md:w-1/2 text-white">
              <h1 className="text-amber-500 font-semibold">BILLING ADRESS</h1>
              <hr className="border-[#232323] border mt-1 " />
              <div className="mt-2">
                <h1>
                  {fromdata.firstName} {fromdata.lastName}
                </h1>
                <h1>{fromdata.address}</h1>
                <h1>{fromdata.phone}</h1>
                <h1>{fromdata.city}</h1>
              </div>
            </div>
            <div className="md:w-1/2 text-white">
              <h1 className="text-amber-500 font-semibold">PAYMENT DETAILS </h1>
              <hr className="border-[#232323] border mt-1" />
              <div className="mt-2">Cash On Delivery</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:gap-20 gap-5">
            <div className="w-full md:w-3/5 mt-5">
              <h1 className="text-amber-500 font-semibold">YOUR ORDER</h1>
              <hr className="border-[#232323] my-2" />
              <div className="  flex justify-between text-white">
                <h1>SubTotal</h1>

                <h1 className="text-amber-500 text-xl">
                  {
                    (result = cart.cartData.reduce(
                      (acc, obj) => acc + obj.productId.price * obj.quantity,
                      0
                    ))
                  }
                  <span className="text-sm">Rs</span>{" "}
                </h1>
              </div>
            </div>
            <div className="w-full md:w-2/5 flex justify-center items-center">
              <button
                className="bg-white  py-3 px-7 rounded-lg"
                onClick={createCheckOutFun}
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
