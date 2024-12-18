import React, { useContext, useEffect, useState } from "react";
import {
  FaBars,
  FaChevronCircleDown,
  FaChevronUp,
  FaRegUser,
} from "react-icons/fa";
import { logo } from "../assets";
import { useWindowSize } from "../hooks";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import AddCardContext from "../context/addCart/AddCardContext";
import { CartModal } from "./resuableComponents";

export const Nav = () => {
  const cart = useContext(AddCardContext);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const size = useWindowSize();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = (menu) => {
    if (size.width > 1024) {
      setActiveDropdown(menu);
    }
  };

  const handleMouseLeave = () => {
    if (size.width > 1024) {
      setActiveDropdown(null);
    }
  };
  useEffect(() => {}, [cart.activeButton]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileDropdown = (menu) => {
    setActiveMobileDropdown(activeMobileDropdown === menu ? null : menu);
  };

  const signUpCall = () => {
    cart.setSignUpModal(true);
  };
  return (
    <nav className="fixed h-[80px] mx-auto  w-full bg-[#080808] text-white px-7 flex justify-center items-center z-50">
      <div className="w-[1280px] flex justify-between items-center h-full">
        <div className="flex items-center">
          <div className="lg:hidden block">
            <div className=" flex items-center justify-center rounded-full   h-8 w-8">
              <FaBars
                onClick={toggleMobileMenu}
                className="cursor-pointer block xl:hidden text-xl text-[#F99106]"
              />
            </div>
          </div>
          <img
            src={logo}
            alt="Logo"
            className="md:h-[60px] md:w-[200px] h-7 w-32 ml-4 cursor-pointer"
            onClick={() => navigate(`/`)}
          />
        </div>

        {size.width > 1024 ? (
          <ul className="flex justify-center space-x-10 text-md mx-auto">
            {cart.productCategoryData?.map((menu, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(menu.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center h-[70px]">
                  <div
                    className={`nav-link navHeading text-sm ${
                      cart.activeButton ===
                      menu.name.split(" ").join("").toLowerCase()
                        ? "text-amber-400"
                        : "text-white"
                    }`}
                    onClick={() => cart.cardButton(menu?.name, menu?._id)}
                  >
                    <h1>{menu.name.toUpperCase()}</h1>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          mobileMenuOpen && (
            <ul className="absolute top-full left-0 w-full bg-[#080808]  border-b-2  border-amber-500  opacity-90  flex flex-col py-4">
              {cart.productCategoryData?.map((menu, index) => (
                <li key={index} className="text-left">
                  <button
                    className="flex justify-between items-center h-12 w-full px-4 navHeading text-sm"
                    onClick={() => toggleMobileDropdown(menu.name)}
                  >
                    {menu.name}
                    {menu.data &&
                      menu.data.length > 0 &&
                      (activeMobileDropdown === menu.name ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronCircleDown />
                      ))}
                  </button>
                </li>
              ))}
            </ul>
          )
        )}

        <div className="flex items-center md:gap-6 gap-3 relative ">
          {localStorage.getItem("user_Id") ? (
            <FaRegUser
              className="md:text-xl cursor-pointer"
              onClick={() => cart.handleComponentChange("profile")}
            />
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
                SignUp
              </h1>
            </div>
          )}
          {localStorage.getItem("cartId") && (
            <>
              <AiOutlineShoppingCart
                className="md:text-2xl text-xl cursor-pointer"
                onClick={() => cart.setIsCartModal(!cart.isCartModal)}
              />
              <div
                className="h-5 w-5 cursor-pointer rounded-full absolute top-[-5px] right-[-10px] bg-[#ffad2a] flex justify-center items-center"
                onClick={() => cart.setIsCartModal(!cart.isCartModal)}
              >
                <h1 className="text-white font-bold">
                  {cart?.cartData?.length}
                </h1>
              </div>
            </>
          )}
        </div>
        {cart.isCartModal && <CartModal  />}
      </div>
    </nav>
  );
};
