import React, { useContext } from "react";
import { RxExit } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import AddCardContext from "../../context/addCart/AddCardContext";

export const SideComponent = () => {
  const navigate = useNavigate();
  const cart = useContext(AddCardContext);
  const logoutFunc = () => {
    localStorage.clear();
    navigate(`/`);
  };

  return (
    <div className="w-full ">
      <ul className="flex w-full h- flex-col gap-2 border rounded-lg border-[#636363] p-2 bg-transparent">
        <li
          className="cursor-pointer hover:bg-[#CCCCCC] rounded-lg p-2"
          onClick={() => cart.handleComponentChange("profile")}
        >
          <h1>Profile</h1>
        </li>
        <li
          className="cursor-pointer hover:bg-[#CCCCCC] rounded-lg p-2"
          onClick={() => cart.handleComponentChange("order")}
        >
          <h1>Your Order</h1>
        </li>

        {/* <li
          className="cursor-pointer  rounded-lg p-2 flex items-center gap-2"
          onClick={logoutFunc}
        >
          <RxExit className="rotate-180" />
          <h1> LogOut</h1>
        </li> */}
      </ul>
    </div>
  );
};
