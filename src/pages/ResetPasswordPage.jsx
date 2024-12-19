import React, { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { useLocation, useNavigate } from "react-router-dom";
import { resetPasswordFun } from "../api/resetPassword";
import { toast } from "react-toastify";

export const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current URL
  const [resetPassword, setResetPassword] = useState(true);
  const [updatedPassword, setUpdatedPassword] = useState({
    key: "",
    password1: "",
    password2: "",
  });
  const [error, setError] = useState("");
  const [key, setKey] = useState(""); // To store the key

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setKey(params.get("key"));
  }, [location]);
  useEffect(() => {
    if (key.length > 0) {
      setUpdatedPassword({ ...updatedPassword, key: key });
    }
  }, [key]);
  const updatePasswordCall = async (e) => {
    e.preventDefault();
    const res = await resetPasswordFun({ fromdata: updatedPassword });
    if (res.status === 401 || 500) {
      toast.error(res?.message);
    }
    if (res.status === 201) {
      navigate(`/`);
    }
  };

  return (
    <div className="w-full h-screen bg-black">
      {resetPassword && (
        <dialog id="my_modal_1" className="modal w-full" open>
          <div className="modal-box relative z-50 bg-black rounded-none w-full md:max-w-4xl md:h-[450px] h-[450px] p-2 md:p-5 md:w-2/5">
            <div className="w-full h-full flex relative">
              <div className="w-full flex justify-center items-center">
                <div className="w-full flex flex-col">
                  <h1 className="heading text-4xl font-semibold text-amber-500 text-center pb-5">
                    Reset Password
                  </h1>
                  <div className="xl:space-y-5">
                    <form onSubmit={updatePasswordCall}>
                      <div className="md:space-y-5 space-y-2 pb-5">
                        <label className="heading text-2xl font-semibold text-amber-500 tracking-wide">
                          Password
                        </label>
                        <input
                          className="w-full text-base px-4 py-3 border text-white border-gray-300 placeholder:text-[#727272] rounded-lg bg-transparent focus:outline-none focus:border-amber-500"
                          name="password1"
                          type="password"
                          onChange={(e) =>
                            setUpdatedPassword({
                              ...updatedPassword,
                              [e.target.name]: e.target.value,
                            })
                          }
                          required
                          placeholder="password"
                        />
                      </div>
                      <div className="md:space-y-5 space-y-2 pb-5">
                        <label className="heading text-2xl font-semibold text-amber-500 tracking-wide">
                          Confirm Password
                        </label>
                        <input
                          className="w-full text-base px-4 py-3 border text-white border-gray-300 placeholder:text-[#727272] rounded-lg bg-transparent focus:outline-none focus:border-amber-500"
                          name="password2"
                          type="password"
                          onChange={(e) =>
                            setUpdatedPassword({
                              ...updatedPassword,
                              [e.target.name]: e.target.value,
                            })
                          }
                          required
                          placeholder="confirm Password"
                        />
                      </div>
                      {error && <p className="text-red-500">{error}</p>}
                      <div className="w-full flex justify-center items-center mt-2">
                        <button
                          type="submit"
                          className="flex justify-center px-3 bg-amber-500 text-gray-100 py-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
                        >
                          Save Password
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};
