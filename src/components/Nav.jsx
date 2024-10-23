import React, { useContext, useEffect, useState } from "react";
import {
  FaBars,
  FaChevronCircleDown,
  FaChevronUp,
  FaRegUser,
} from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  glowPlate1,
  glowPlate2,
  glowPlate3,
  glowPlate4,
  glowPlate5,
  logo,
  menuImg,
} from "../assets";
import { useWindowSize } from "../hooks";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import AddCardContext from "../context/addCart/AddCardContext";
import { CartModal } from "./resuableComponents";
import { getProductCategory } from "../api/productCategory";
import { getUser } from "../api/user";

export const Nav = () => {
  const cart = useContext(AddCardContext);
  const [modal, setModal] = useState(false);
  const [productCategoryData, setProductCategoryData] = useState();
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
  const getCategoryCall = async () => {
    const res = await getProductCategory();
    setProductCategoryData(res?.data);
  };

  useEffect(() => {
    getCategoryCall();
  }, []);

  const getProfile = async () => {
    console.log(1);
    const userId = localStorage.getItem("user_Id");
    const token = localStorage.getItem("access_token");
    const res = await getUser({ id: userId, token });
    console.log(res);
    if (res) {
      navigate(`/profile`);
    }
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
            {productCategoryData?.map((menu, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(menu.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center h-[70px]">
                  <div
                    className={`nav-link navHeading text-sm ${
                      cart.activeButton === menu.name
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
              {productCategoryData?.map((menu, index) => (
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
          <IoIosSearch className="md:text-2xl text-xl cursor-pointer" />
          <FaRegUser
            className="md:text-xl cursor-pointer"
            onClick={getProfile}
          />
          <AiOutlineShoppingCart
            className="md:text-2xl text-xl cursor-pointer"
            onClick={() => setModal(!modal)}
          />
          <div
            className="h-5 w-5 cursor-pointer rounded-full absolute top-[-5px] right-[-10px] bg-[#ffad2a] flex justify-center items-center"
            onClick={() => setModal(!modal)}
          >
            <h1 className="text-white font-bold">{cart?.cartData?.length}</h1>
          </div>
        </div>
        {modal && <CartModal setModal={setModal} />}
      </div>
    </nav>
  );
};
