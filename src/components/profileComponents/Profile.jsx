import React, { useContext, useEffect, useState } from "react";
import { user1, user3 } from "../../assets";
import { MdAddAPhoto } from "react-icons/md";
import AddCardContext from "../../context/addCart/AddCardContext";
import { getUser, updateUser } from "../../api/user";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate()
  const cart = useContext(AddCardContext);
  const [edit, setEdit] = useState(false);
  const [fromdata, setFromdata] = useState();
  const getProfileCall = async () => {
    const userId = localStorage.getItem("user_Id");
    const token = localStorage.getItem("access_token");
    const res = await getUser({ id: userId, token });
    setFromdata(res);
    if (res.error === 401) {
      toast.warn("Session Expired");
      localStorage.clear();
      navigate(`/`)
    }
  };
  useEffect(() => {
    getProfileCall();
  }, []);

  return (
    <div className="border border-[#636363] flex items-start  rounded-lg w-full h-full p-5 flex-col ">
      <div className="w-full flex justify-between">
        <h1 className="heading text-white text-2xl">Profile Setting</h1>
      </div>

      <div className="w-full flex justify-center items-center mt-5"></div>
      <div className="mt-5 w-full flex justify-center items-center">
        <table className="md:w-3/5 w-full flex justify-between my-auto">
          <tr className="text-white md:w-1/2 w-full  heading flex flex-col gap-5">
            <td className="">First Name </td>
            <td className="">Last Name </td>
            <td>Phone Number </td>
            <td>Email </td>
            <td>City </td>
            <td>Address </td>
            <td>State </td>
          </tr>
          <tr className="text-[#CCCCCC] md:w-1/2 w-full italic flex flex-col gap-5">
            {edit ? (
              <>
                <input
                  type="text"
                  className="bg-transparent border rounded-lg w-28 h-7 p-"
                  name="firstName"
                  onChange={(e) =>
                    setFromdata({
                      ...fromdata,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={fromdata.firstName}
                />
              </>
            ) : (
              <td className="w-full h-6">{fromdata?.firstName} </td>
            )}
            {edit ? (
              <>
                <input
                  type="text"
                  className="bg-transparent border rounded-lg w-28 h-6 p-0"
                  name="lastName"
                  onChange={(e) =>
                    setFromdata({
                      ...fromdata,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={fromdata?.lastName}
                />
              </>
            ) : (
              <td className="w-full h-6">{fromdata?.lastName} </td>
            )}
            {edit ? (
              <>
                <input
                  type="text"
                  className="bg-transparent border rounded-lg w-28 h-6 p-0"
                  name="phone"
                  onChange={(e) =>
                    setFromdata({
                      ...fromdata,
                      [e.target.name]: parseInt(e.target.value),
                    })
                  }
                  value={fromdata?.phone}
                />
              </>
            ) : (
              <td className="w-full h-6">{fromdata?.phone} </td>
            )}
            {edit ? (
              <>
                <input
                  type="text"
                  className="bg-transparent border rounded-lg w-28 h-6 p-0"
                  name="email"
                  onChange={(e) =>
                    setFromdata({
                      ...fromdata,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={fromdata?.email}
                />
              </>
            ) : (
              <td className="w-full h-6">{fromdata?.email} </td>
            )}
            {edit ? (
              <>
                <input
                  type="text"
                  className="bg-transparent border rounded-lg w-28 h-6 p-0"
                  name="city"
                  onChange={(e) =>
                    setFromdata({
                      ...fromdata,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={fromdata?.city}
                />
              </>
            ) : (
              <td className="w-full h-6">{fromdata?.city} </td>
            )}
            {edit ? (
              <>
                <input
                  type="text"
                  className="bg-transparent border rounded-lg w-28 h-6 p-0"
                  name="address"
                  onChange={(e) =>
                    setFromdata({
                      ...fromdata,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={fromdata?.address}
                />
              </>
            ) : (
              <td className="w-full h-6">{fromdata?.address} </td>
            )}
            {edit ? (
              <>
                <input
                  type="text"
                  className="bg-transparent border rounded-lg w-28 h-6 p-0"
                  name="state"
                  onChange={(e) =>
                    setFromdata({
                      ...fromdata,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={fromdata?.state}
                />
              </>
            ) : (
              <td className="w-full h-6">{fromdata?.state} </td>
            )}
          </tr>
        </table>
      </div>
    </div>
  );
};
