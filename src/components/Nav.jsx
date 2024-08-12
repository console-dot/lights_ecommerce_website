import React, { useState } from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { logo } from "../assets";

export const Nav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleMouseEnter = (menu) => {
    setDropdownOpen(menu);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  return (
    <nav className="fixed h-32 mx-auto w-full bg-black text-white p-4 flex justify-between items-center z-50">
      <div className="flex flex-col items-center"><img src={logo} alt="" /></div>

      <ul className="flex space-x-6 text-xl">
        {["Torches", "Glow Plate", "Night Lamp", "Spotlight", "Floor Lamp"].map(
          (menu, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(menu)}
              // onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center">
                {menu}
                <RiArrowDropDownLine className="ml-1" />
              </button>
              {dropdownOpen === menu && (
                <ul className="absolute tetxt-md left-0 mt-8 bg-white text-black p-2 shadow-lg rounded">
                  <li className="p-2 hover:bg-gray-200">Option 1</li>
                  <li className="p-2 hover:bg-gray-200">Option 2</li>
                  <li className="p-2 hover:bg-gray-200">Option 3</li>
                </ul>
              )}
            </li>
          )
        )}
      </ul>

      <div className="flex items-center space-x-4">
        <FaSearch />
        <FaUser />
        <FaShoppingCart />
      </div>
    </nav>
  );
};
