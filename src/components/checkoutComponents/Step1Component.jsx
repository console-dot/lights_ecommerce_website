import React, { useContext, useEffect } from "react";

import AddCardContext from "../../context/addCart/AddCardContext";
import { createCheckOut } from "../../api/checkOut";
import { toast } from "react-toastify";

export const Step1Component = ({ setStep, fromdata, setFromData }) => {
  const cart = useContext(AddCardContext);
  let result;

  const nextStep = async () => {
    setStep("2");
    const newCheckoutData = [];

    cart.cartData.forEach((product) => {
      const checkoutData = {
        productId: product.productId._id,
        quantity: product.quantity,
        price: product.productId.price * product.quantity,
      };

      console.log(checkoutData);
      newCheckoutData.push(checkoutData);
    });

    setFromData({ ...fromdata, products: newCheckoutData });
  };
  useEffect(() => {
    console.log(fromdata);
  }, [fromdata]);
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
                  name="firstName"
                  required
                  value={fromdata?.firstName}
                  onChange={(e) =>
                    setFromData({
                      ...fromdata,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex gap-2 mt-2 flex-col">
                <h1>Last Name *</h1>
                <input
                  className="bg-transparent w-full rounded-lg border border-[#232323] p-2"
                  placeholder="Last Name"
                  value={fromdata?.lastName}
                  name="lastName"
                  required
                  onChange={(e) =>
                    setFromData({
                      ...fromdata,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex gap-2 mt-2 flex-col">
                <h1>Address *</h1>
                <input
                  className="bg-transparent w-full rounded-lg border border-[#232323] p-2"
                  placeholder="Address"
                  name="address"
                  value={fromdata?.address}
                  required
                  onChange={(e) =>
                    setFromData({
                      ...fromdata,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex gap-4 mt-2">
                <div className="flex gap-2 mt-2 flex-col w-1/2">
                  <h1>City *</h1>
                  <input
                    className="bg-transparent w-full rounded-lg border border-[#232323] p-2"
                    placeholder="City Name"
                    name="city"
                    value={fromdata?.city}
                    required
                    onChange={(e) =>
                      setFromData({
                        ...fromdata,
                        [e.target.name]: e.target.value,
                      })
                    }
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
                  <h1>Zip Code*</h1>
                  <input
                    className="bg-transparent w-full rounded-lg border border-[#232323] p-2"
                    placeholder="Zip Code "
                    name="zip"
                    value={fromdata?.zip}
                    required
                    onChange={(e) =>
                      setFromData({
                        ...fromdata,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="flex gap-2 mt-2 flex-col">
                <h1>Email Address *</h1>
                <input
                  className="bg-transparent w-full rounded-lg border border-[#232323] p-2"
                  placeholder="Email Address"
                  name="email"
                  value={fromdata?.email}
                  required
                  onChange={(e) =>
                    setFromData({
                      ...fromdata,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex gap-2 mt-2 flex-col">
                <h1>Phone Number *</h1>
                <input
                  className="bg-transparent w-full rounded-lg border border-[#232323] p-2"
                  placeholder="Phone Number "
                  name="phone"
                  required
                  value={fromdata?.phone}
                  onChange={(e) =>
                    setFromData({
                      ...fromdata,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div className="w-2/5 flex flex-col gap-10">
            <div className="border-[5px] border-[#232323] p-4 h-[300px] overflow-y-scroll">
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
              {cart?.cartData?.map((i, index) => (
                <>
                  <div className="pl-2 pt-2  ">
                    <div className="flex justify-between items-center bg-transparent p-1 w-full h-16 ">
                      <div className="w-[20%] h-full flex items-center gap-2">
                        <img
                          src={`data:image/png;base64,${i?.productId?.avatar?.image}`}
                          className="w-full h-full bg-[#DBD4D4] heading"
                        />
                      </div>
                      <div className="w-[20%] text-center text-xs md:text-base flex justify-center items-center text-amber-500">
                        {i?.productId?.name || i?.title}
                      </div>
                      <div className=" justify-center items-center flex w-[20%] ">
                        <div className=" justify-center items-center flex gap-1 xxs:gap-2 md:gap-1">
                          <h1 className="text-amber-500">
                            {" "}
                            {i ? i?.quantity : cart?.quantity}
                          </h1>
                        </div>
                      </div>
                      <div className="w-[20%] flex justify-center items-center  text-amber-500 pl-2">
                        {i?.productId?.price * i?.quantity}
                      </div>
                    </div>
                  </div>
                </>
              ))}
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
                  onClick={nextStep}
                >
                  Confirm Order
                </button>
              </div>
              <hr className=" border-[#232323] mt-1" />

              <div className="mt-4 justify-between flex  p-2">
                <h1>SubTotal</h1>
                {
                  (result = cart.cartData.reduce(
                    (acc, obj) => acc + obj.productId.price * obj.quantity,
                    0
                  ))
                }
                <h1 className="text-amber-500 text-xl">
                  {result} <span className="text-sm">Rs</span>{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
