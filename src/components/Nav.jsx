import React, { useContext, useState } from "react";
import {
  FaBars,
  FaChevronCircleDown,
  FaChevronUp,
  FaRegUser,
} from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxExit } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import AddCardContext from "../context/addCart/AddCardContext";
import { CartModal } from "./resuableComponents";
import { logo } from "../assets";
import { useWindowSize } from "../hooks";

export const Nav = () => {
  const cart = useContext(AddCardContext);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const size = useWindowSize();
  const navigate = useNavigate();

  const handleMouseEnter = (menu) => {
    if (size.width > 1024) setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    if (size.width > 1024) setActiveDropdown(null);
  };

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const toggleMobileDropdown = (menu) => {
    setActiveMobileDropdown(activeMobileDropdown === menu ? null : menu);
  };

  const logoutFunc = () => {
    localStorage.clear();
    navigate(`/`);
  };

  const signUpCall = () => cart.setSignUpModal(true);

  return (
    <nav className="fixed h-[80px] w-full bg-[#080808] text-white px-7 flex items-center z-50">
      <div className="w-[1280px] flex justify-between items-center h-full mx-auto">
        {/* Logo and Mobile Menu Icon */}
        <div className="flex items-center">
          <FaBars
            onClick={toggleMobileMenu}
            className="lg:hidden block text-xl text-[#F99106] cursor-pointer"
          />
          <img
            src={logo}
            alt="Logo"
            className="md:h-[60px] md:w-[200px] h-7 w-32 ml-4 cursor-pointer"
            onClick={() => navigate(`/`)}
          />
        </div>

        {/* Navigation Links */}
        {size.width > 1024 ? (
          <ul className="flex justify-center space-x-10 text-md">
            {cart.productCategoryData?.map((menu, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(menu.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`nav-link navHeading text-sm ${
                    cart.activeButton ===
                    menu.name.split(" ").join("").toLowerCase()
                      ? "text-amber-400"
                      : "text-white"
                  }`}
                  onClick={() => cart.cardButton(menu?.name, menu?._id)}
                >
                  {menu.name.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          mobileMenuOpen && (
            <ul className="absolute top-full left-0 w-full bg-[#080808] border-b-2 border-amber-500 flex flex-col py-4 gap-4 pl-6">
             {cart.productCategoryData?.map((menu, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(menu.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`nav-link navHeading text-sm ${
                    cart.activeButton ===
                    menu.name.split(" ").join("").toLowerCase()
                      ? "text-amber-400"
                      : "text-white"
                  }`}
                  onClick={() => cart.cardButton(menu?.name, menu?._id)}
                >
                  {menu.name.toUpperCase()}
                </button>
              </li>
            ))}
            </ul>
          )
        )}

        {/* User Actions */}
        <div className="flex items-center gap-6 relative">
          {localStorage.getItem("user_Id") ? (
            <>
              <FaRegUser
                className="text-xl cursor-pointer"
                onClick={() => cart.handleComponentChange("profile")}
              />
            </>
          ) : (
            <div className="flex gap-1">
              <h1
                className="hover:text-amber-500 cursor-pointer"
                onClick={() => cart.setIsModalOpen(true)}
              >
                Login
              </h1>
              <span>/</span>
              <h1
                className="hover:text-amber-500 cursor-pointer"
                onClick={signUpCall}
              >
                Sign-Up
              </h1>
            </div>
          )}

          {localStorage.getItem("cartId") && (
            <>
              <AiOutlineShoppingCart
                className="text-2xl cursor-pointer"
                onClick={() => cart.setIsCartModal(!cart.isCartModal)}
              />
              <div
                className="absolute top-[-5px] right-[25%] h-5 w-5 rounded-full bg-[#ffad2a] flex justify-center items-center text-white font-bold"
                onClick={() => cart.setIsCartModal(!cart.isCartModal)}
              >
                {cart?.cartData?.length}
              </div>
            </>
          )}
          {localStorage.getItem("user_Id") && (
            <button className="flex items-center gap-2" onClick={logoutFunc}>
              <RxExit className="rotate-180" />
            </button>
          )}
        </div>

        {/* Cart Modal */}
        {cart.isCartModal && <CartModal />}
      </div>
    </nav>
  );
};
