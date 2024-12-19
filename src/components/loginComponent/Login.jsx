import React, { useContext, useState } from "react";
import { decorateLight2, dignoalLines } from "../../assets";
import { ImCross } from "react-icons/im";
import { toast } from "react-toastify";
import { userLogin } from "../../api/user";
import AddCardContext from "../../context/addCart/AddCardContext";
import { forgetPassword } from "../../api/resetPassword";
export const Login = () => {
  const [fromdata, setFromdata] = useState({});
  const [resetdata, setResetdata] = useState({});

  const data = useContext(AddCardContext);

  const login = async (e) => {
    e.preventDefault();
    if (fromdata) {
      try {
        const res = await userLogin({ fromdata });
        if (res.status === 200) {
          setFromdata({
            email: " ",
            password: " ",
          });
          if (res.status === 200) {
            toast.success("Login successfully");
            data?.setCheckProfile(true);
          }
          data?.setIsModalOpen(false);
          localStorage.setItem("access_token", res?.accessToken);
          localStorage.setItem("refreshToken", res?.refreshToken);
          localStorage.setItem("user_Id", res?.user?._id);

          if (res?.user?.cartId) {
            localStorage.setItem("cartId", res?.user?.cartId);
          }
        } else {
          toast.error(res?.response?.data?.message);
        }
      } catch (error) {
        console.error("login error:", error);
        toast.error(`${error.response.data.message}`);
      }
    }
  };

  const forgetPasswordCall = () => {
    data?.setIsFrogetModal(true);
    data?.setIsModalOpen(false);
  };

  const frogetPasswordFun = async () => {
    const res = await forgetPassword({ fromdata: resetdata });
    if (res.status === 201) {
      toast.info("send message in email");
      data?.setIsFrogetModal(false);
    }
  };

  const donotAccount = () => {
    data?.setIsModalOpen(false);
    data.setSignUpModal(true);
  };

  return (
    <>
      <div>
        {data.isModalOpen && (
          <dialog id="my_modal_1" className="modal w-full" open>
            <div className="modal-box relative z-50  bg-black rounded-none max-w-4xl md:h-[500px] h-[450px] border-[10px] p-2 md:p-5  border-[#5a5656]">
              <div className="w-full  top-0 right-0 flex justify-end absolute z-50  p-4">
                <ImCross
                  className="text-[#CCCCCC] cursor-pointer"
                  onClick={() => data.setIsModalOpen(false)}
                />
              </div>
              <div className="w-full h-full flex relative">
                <div className="w-full md:w-1/2 flex justify-center items-center">
                  <div className="w-full flex flex-col">
                    <h1 className="heading text-4xl font-semibold text-amber-500 text-center pb-5">
                      LOGIN
                    </h1>
                    <form onSubmit={login}>
                      <div class=" xl:space-y-5">
                        <div class="md:space-y-5 space-y-2 pb-5">
                          <label class="heading text-2xl font-semibold text-amber-500 tracking-wide">
                            Email
                          </label>
                          <input
                            class=" w-full text-base px-4 py-3 border text-white  border-gray-300 placeholder:text-[#727272] rounded-lg bg-transparent focus:outline-none focus:border-amber-500"
                            name="email"
                            required
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
                        <div class="md:space-y-5 space-y-2 pb-5">
                          <label class="heading md:mb-5 text-2xl font-semibold text-amber-500 tracking-wide">
                            Password
                          </label>
                          <input
                            class="w-full text-white content-center text-base px-4 py-3 border placeholder:text-[#727272]  border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 bg-transparent"
                            name="password"
                            required
                            onChange={(e) =>
                              setFromdata({
                                ...fromdata,
                                [e.target.name]: e.target.value,
                              })
                            }
                            type="password"
                            placeholder="Enter your password"
                          />
                        </div>
                        <div class="flex items-center justify-between gap-5 pt-2">
                          <div class="md:text-sm text-[12px] text-end">
                            <div
                              onClick={forgetPasswordCall}
                              class=" font-semibold cursor-pointer  heading tracking-wide text-amber-500"
                            >
                              Forgot password?
                            </div>
                          </div>
                          <div class="flex items-center" onClick={donotAccount}>
                            <label
                              for=""
                              class="ml-2 cursor-pointer heading block md:text-sm underline text-[10px] text-white hover:text-amber-500"
                            >
                              Don't have account
                            </label>
                          </div>
                        </div>
                        <div className="w-full flex justify-center items-center mt-2 ">
                          <button
                            type="submit"
                            class=" flex justify-center px-5 bg-amber-500    text-gray-100 py-2 rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                          >
                            Login
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="w-1/2 md:flex justify-center items-center hidden">
                  <div className=" relative w-4/5 h-4/5 flex justify-center items-center">
                    <div className="absolute w-full h-full flex items-center justify-center ">
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
                        className=" hover:scale-105 w-full h-full transform transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dialog>
        )}
        {data.isForgetModal && (
          <dialog id="my_modal_1" className="modal w-full" open>
            <div className="modal-box relative z-50  bg-black rounded-none w-full md:max-w-4xl md:h-[300px] h-[300px] border-[10px] p-2 md:p-5  border-[#5a5656] md:w-2/5">
              <div className="w-full  top-0 right-0 flex justify-end absolute z-50  p-4">
                <ImCross
                  className="text-[#CCCCCC] cursor-pointer"
                  onClick={() => data.setIsFrogetModal(false)}
                />
              </div>
              <div className="w-full h-full flex relative">
                <div className="w-full flex justify-center items-center">
                  <div className="w-full flex flex-col">
                    <h1 className="heading text-2xl md:text-4xl font-semibold text-amber-500 text-center pb-5">
                      Reset Password
                    </h1>
                    <div class=" xl:space-y-5">
                      <div class="md:space-y-5 space-y-2 pb-5">
                        <label class="heading text-xl md:text-2xl font-semibold text-amber-500 tracking-wide">
                          Email
                        </label>
                        <input
                          class=" w-full text-base px-4 py-3 border text-white  border-gray-300 placeholder:text-[#727272] rounded-lg bg-transparent focus:outline-none focus:border-amber-500"
                          name="email"
                          onChange={(e) =>
                            setResetdata({
                              ...resetdata,
                              [e.target.name]: e.target.value,
                            })
                          }
                          type=""
                          placeholder="mail@gmail.com"
                        />
                      </div>
                      <div className="w-full flex justify-center items-center mt-2 ">
                        <button
                          onClick={frogetPasswordFun}
                          type="submit"
                          class=" flex justify-center px-3 bg-amber-500    text-gray-100 py-3 rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                        >
                          Reset Password
                        </button>
                      </div>
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
