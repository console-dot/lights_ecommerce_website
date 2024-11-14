import React, { useContext, useState } from "react";
import { decorateLight2, dignoalLines, logo } from "../../assets";
import { ImCross } from "react-icons/im";
import { toast } from "react-toastify";
import { createUser } from "../../api/user";
import AddCardContext from "../../context/addCart/AddCardContext";
export const SignUp = () => {
  const [fromdata, setFromdata] = useState({});
  const data = useContext(AddCardContext);
  const CreateUserCall = async (e) => {
    e.preventDefault();
    const res = await createUser({ fromdata });
    if (res.status === 201) {
      data?.setSignUpModal(false);
      toast("User Create Sucessfully");
    } else if (res) {
      toast(res?.response?.data?.message);
    }
    console.log(res);
  };

  return (
    <>
      <div>
        {data?.signUpModal && (
          <dialog id="my_modal_1" className="modal w-full" open>
            <div className="modal-box relative z-50  bg-black rounded-none max-w-5xl md:min-h-[500px] min-h-[450px] border-[10px] p-2 md:p-5  border-[#5a5656]">
              <div className="w-full  top-0 right-0 flex justify-end absolute z-50  p-4">
                <ImCross
                  className="text-[#CCCCCC] cursor-pointer"
                  onClick={() => data.setSignUpModal(false)}
                />
              </div>
              <div className="w-full h-full flex relative gap-4">
                <div className="w-full md:w-3/5 flex justify-center items-center">
                  <div className="w-full flex flex-col">
                    <h1 className="heading text-4xl font-semibold text-amber-500 text-center pb-5">
                      SignUp
                    </h1>
                    <div class=" xl:space-y-5">
                      <form onSubmit={CreateUserCall}>
                        <div className="flex gap-4">
                          <div class="w-1/2 flex flex-col gap-1">
                            <label class="heading text-xl font-semibold text-amber-500 tracking-wide">
                              First Name
                            </label>
                            <input
                              required
                              class=" w-full text-base px-2 py-2 border text-white  border-gray-300 placeholder:text-[#727272] rounded-lg bg-transparent focus:outline-none focus:border-amber-500"
                              name="firstName"
                              onChange={(e) =>
                                setFromdata({
                                  ...fromdata,
                                  [e.target.name]: e.target.value,
                                })
                              }
                              type="text"
                              placeholder="First Name"
                            />
                          </div>
                          <div class="w-1/2 flex flex-col gap-1">
                            <label class="heading text-xl font-semibold text-amber-500 tracking-wide">
                              Last Name
                            </label>
                            <input
                              required
                              class=" w-full text-base px-2 py-2 border text-white  border-gray-300 placeholder:text-[#727272] rounded-lg bg-transparent focus:outline-none focus:border-amber-500"
                              name="lastName"
                              onChange={(e) =>
                                setFromdata({
                                  ...fromdata,
                                  [e.target.name]: e.target.value,
                                })
                              }
                              type="text"
                              placeholder="Last Name"
                            />
                          </div>
                        </div>
                        <div class="mt-2 flex gap-2 flex-col">
                          <label class="heading text-xl font-semibold text-amber-500 tracking-wide">
                            Email
                          </label>
                          <input
                            required
                            class=" w-full text-base px-3 py-2 border text-white  border-gray-300 placeholder:text-[#727272] rounded-lg bg-transparent focus:outline-none focus:border-amber-500"
                            name="email"
                            onChange={(e) =>
                              setFromdata({
                                ...fromdata,
                                [e.target.name]: e.target.value,
                              })
                            }
                            type="email"
                            placeholder="mail@gmail.com"
                          />
                        </div>
                        <div className="flex gap-4 mt-2">
                          <div class="w-1/2 flex flex-col gap-1">
                            <label class="heading text-xl font-semibold text-amber-500 tracking-wide">
                              Password
                            </label>
                            <input
                              required
                              class=" w-full text-base px-2 py-2 border text-white  border-gray-300 placeholder:text-[#727272] rounded-lg bg-transparent focus:outline-none focus:border-amber-500"
                              name="password"
                              onChange={(e) =>
                                setFromdata({
                                  ...fromdata,
                                  [e.target.name]: e.target.value,
                                })
                              }
                              type="password"
                              placeholder="Password"
                            />
                          </div>
                          <div class="w-1/2 flex flex-col gap-1">
                            <label class="heading text-xl font-semibold text-amber-500 tracking-wide">
                              City
                            </label>
                            <input
                              required
                              class=" w-full text-base px-2 py-2 border text-white  border-gray-300 placeholder:text-[#727272] rounded-lg bg-transparent focus:outline-none focus:border-amber-500"
                              name="city"
                              onChange={(e) =>
                                setFromdata({
                                  ...fromdata,
                                  [e.target.name]: e.target.value,
                                })
                              }
                              type="text"
                              placeholder="City Name"
                            />
                          </div>
                        </div>
                        <div class="mt-2 flex gap-2 flex-col">
                          <label class="heading text-xl font-semibold text-amber-500 tracking-wide">
                            Phone Number
                          </label>
                          <input
                            required
                            class=" w-full text-base outline-none appearance-none px-3 py-2  border text-white  border-gray-300 placeholder:text-[#727272] rounded-lg bg-transparent focus:outline-none focus:border-amber-500"
                            name="phone"
                            onChange={(e) =>
                              setFromdata({
                                ...fromdata,
                                [e.target.name]: parseInt(e.target.value),
                              })
                            }
                            type="number"
                            placeholder="Phone Number"
                          />
                        </div>
                        <div className="flex gap-4 mt-2">
                          <div class="w-1/2 flex flex-col gap-1">
                            <label class="heading text-xl font-semibold text-amber-500 tracking-wide">
                              Address
                            </label>
                            <input
                              required
                              class=" w-full text-base px-3 py-2 border text-white  border-gray-300 placeholder:text-[#727272] rounded-lg bg-transparent focus:outline-none focus:border-amber-500"
                              name="address"
                              onChange={(e) =>
                                setFromdata({
                                  ...fromdata,
                                  [e.target.name]: e.target.value,
                                })
                              }
                              type="text"
                              placeholder="Address"
                            />
                          </div>
                          <div class="w-1/2 flex flex-col gap-1">
                            <label class="heading text-xl font-semibold text-amber-500 tracking-wide">
                              State
                            </label>
                            <input
                              required
                              class=" w-full text-base px-2 py-2 border text-white  border-gray-300 placeholder:text-[#727272] rounded-lg bg-transparent focus:outline-none focus:border-amber-500"
                              name="state"
                              onChange={(e) =>
                                setFromdata({
                                  ...fromdata,
                                  [e.target.name]: e.target.value,
                                })
                              }
                              type="text"
                              placeholder="State Name"
                            />
                          </div>
                        </div>
                        <div class="flex items-center justify-between gap-5 pt-2">
                          <div class="flex items-center">
                            <input
                              id="remember_me"
                              name="remember_me"
                              type="checkbox"
                              class="md:h-5 cursor-pointer md:w-5 h-3 w-3  checked:bg-amber-500 border-gray-300 "
                            />
                            <label
                              for="remember_me"
                              class="ml-2 cursor-pointer heading block md:text-base text-[12px] text-amber-500"
                            >
                              Remember me
                            </label>
                          </div>
                          <div class="md:text-sm text-[12px] text-end">
                            <a
                              href="#"
                              class=" font-semibold  heading tracking-wide text-amber-500"
                            >
                              Forgot password?
                            </a>
                          </div>
                        </div>
                        <div className="w-full flex justify-center items-center mt-2 ">
                          <button
                            type="submit"
                            class=" flex justify-center px-2 bg-amber-500    text-gray-100 py-3 rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                          >
                            Create Account
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="w-2/5 md:flex justify-center items-center hidden">
                  <div className=" relative w-full pr-4 h-4/5 flex justify-center items-center">
                    <div className="absolute right-4 w-full h-full flex items-center justify-center ">
                      <img
                        src={dignoalLines}
                        alt=""
                        className="relative  left-5 top-[-20px] w-full h-full  object-cover "
                      />
                    </div>
                    <div className="relative  flex items-center justify-center w-full  h-full  top-0">
                      <img
                        src={decorateLight2}
                        alt="Light House 1"
                        className=" hover:scale-105  w-full h-full transform transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dialog>
        )}
      </div>
    </>
  );
};
