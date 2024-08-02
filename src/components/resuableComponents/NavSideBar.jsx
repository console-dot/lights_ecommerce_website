import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

export const NavSideBar = () => {
  const [isOpen, setIsOpen] = useState("");
  const handleToggle = (prop) => {
    console.log(prop)
    setIsOpen(prop);
  };
  return (
    <div className="relative lg:hidden">
      <div className="w-64 bg-gray-800 text-white h-screen p-4 z-40 fixed overflow-y-auto top-[68px]">
        <ul>
          <li>Home</li>
          <li >
            <div className=" hover:bg-gray-700 flex items-center">
            <div
              className="w-3/4 text-left flex justify-between items-center  relative"
              onClick={() => handleToggle("Light")}
            >
              <h1>Light</h1>{" "}
            </div>
              <div className="w-1/4 flex justify-end  items-center absoulte top-0 z-30">
                {isOpen === "Light" ? (
                  <RxCross1 onClick={() => handleToggle("light")} />
                ) : (
                  <RiArrowDropDownLine  onClick={() => handleToggle("Light")}/>
                )}
              </div>
              </div>
            {isOpen === "Light" && (
              <div className="p-2 transition-all duration-300 text-black bg-slate-50">
                <p>Sub Option 1.1</p>
                <p>Sub Option 1.2</p>
                <p>Sub Option 1.3</p>
              </div>
            )}
          </li>
          <li>
            <div
              className="w-full text-left  hover:bg-gray-700"
              onClick={() => handleToggle("furniture")}
            >
              furniture
            </div>
            {isOpen === "furniture" && (
              <div className="ml-4 mt-2 transition-all duration-300">
                <p>Sub Option 2.1</p>
                <p>Sub Option 2.2</p>
                <p>Sub Option 2.3</p>
              </div>
            )}
          </li>
          <li>
            <div
              className="w-full text-left  hover:bg-gray-700"
              onClick={() => handleToggle("table")}
            >
              table
            </div>
            {isOpen === "table" && (
              <div className="ml-4 mt-2 transition-all duration-300">
                <p>Sub Option 3.1</p>
                <p>Sub Option 3.2</p>
                <p>Sub Option 3.3</p>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
