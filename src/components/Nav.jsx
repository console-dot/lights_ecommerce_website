import React, { useContext, useState } from "react";
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

export const Nav = () => {
  const cart = useContext(AddCardContext);
  const [modal, setModal] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const size = useWindowSize();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = (menu) => {
    if (size.width > 768) {
      setActiveDropdown(menu);
    }
  };

  const handleMouseLeave = () => {
    if (size.width > 768) {
      setActiveDropdown(null);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileDropdown = (menu) => {
    setActiveMobileDropdown(activeMobileDropdown === menu ? null : menu);
  };

  const torchesData = [
    {
      img: glowPlate2,
      title: "Black Festive",
      price: "$3,600",
    },
    {
      img: glowPlate3,
      title: "Black Festive",
      price: "$3,600",
    },
    {
      img: glowPlate4,
      title: "Black Festive",
      price: "$3,600",
    },
    {
      img: glowPlate5,
      title: "Black Festive",
      price: "$3,600",
    },
  ];

  const glowPlateData = [
    {
      img: glowPlate2,
      title: "Black Festive",
      price: "$3,600",
    },
    {
      img: glowPlate3,
      title: "Black Festive",
      price: "$3,600",
    },
    {
      img: glowPlate4,
      title: "Black Festive",
      price: "$3,600",
    },
    {
      img: glowPlate5,
      title: "Black Festive",
      price: "$3,600",
    },
  ];

  const nightLampData = [
    {
      img: glowPlate2,
      title: "Black Festive",
      price: "$3,600",
    },
    {
      img: glowPlate3,
      title: "Black Festive",
      price: "$3,600",
    },
    {
      img: glowPlate4,
      title: "Black Festive",
      price: "$3,600",
    },
    {
      img: glowPlate5,
      title: "Black Festive",
      price: "$3,600",
    },
  ];

  const spotlightData = [
    {
      img: glowPlate2,
      title: "Black Festive",
      price: "$3,600",
    },
    {
      img: glowPlate3,
      title: "Black Festive",
      price: "$3,600",
    },
    {
      img: glowPlate4,
      title: "Black Festive",
      price: "$3,600",
    },
    {
      img: glowPlate5,
      title: "Black Festive",
      price: "$3,600",
    },
  ];
  const restaurantlightData = [
    {
      img: glowPlate2,
      title: "Black Festive",
      price: "$3,600",
    },
    {
      img: glowPlate3,
      title: "Black Festive",
      price: "$3,600",
    },
    {
      img: glowPlate4,
      title: "Black Festive",
      price: "$3,600",
    },
    {
      img: glowPlate5,
      title: "Black Festive",
      price: "$3,600",
    },
  ];
  const multiplylightData = [
    {
      img: glowPlate2,
      title: "Black Festive",
      price: "$3,600",
    },
    {
      img: glowPlate3,
      title: "Black Festive",
      price: "$3,600",
    },
    {
      img: glowPlate4,
      title: "Black Festive",
      price: "$3,600",
    },
    {
      img: glowPlate5,
      title: "Black Festive",
      price: "$3,600",
    },
  ];

  const menuItems = [
    { name: "Indore Lights", data: torchesData },
    { name: "Wall Lights", data: glowPlateData },
    { name: "Table Lamps", data: nightLampData },
    { name: "Commercial Lights", data: spotlightData },
    { name: "Restaurant Lights", data: restaurantlightData },
    { name: "Multi Lights", data: multiplylightData },
  ];

  return (
    <nav className="fixed md:h-24 h-20 mx-auto  w-full bg-[#080808] text-white px-7 flex justify-center items-center z-50">
      <div className="w-[1280px] flex justify-between items-center h-full">
        <div className="flex items-center">
          <div className="md:hidden block">
            <div className=" flex items-center justify-center rounded-full bg-[#F99106]  h-8 w-8">
              <FaBars
                onClick={toggleMobileMenu}
                className="cursor-pointer block md:hidden text-xl text-[#080808]"
              />
            </div>
          </div>
          <img
            src={logo}
            alt="Logo"
            className="md:h-10 md:w-auto h-7 w-32 ml-4 cursor-pointer"
            onClick={() => navigate(`/`)}
          />
        </div>

        {size.width > 768 ? (
          <ul className="flex justify-center space-x-3 text-md mx-auto">
            {menuItems.map((menu, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(menu.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center h-24">
                  <div
                    className="nav-link"
                    onClick={() =>
                      cart.cardButton(menu.name.split(" ").join(""))
                    }
                  >
                    {menu.name}
                  </div>
                  {menu.data && menu.data.length > 0 && (
                    <RiArrowDropDownLine size={20} className="ml-1" />
                  )}
                </button>

                {/* Desktop dropdowns */}
                {activeDropdown === menu.name &&
                  menu.name === "Indore Lights" && (
                    <div className="absolute top-full left-0 bg-[#080808] border-t-[2px] border-t-[#F99106] shadow-lg z-10">
                      <div className="w-[700px]  flex p-2 justify-around items-center">
                        {menu.data.map((item, k) => (
                          <a
                            key={k}
                            href="#"
                            className="block py-2 hover:text-white"
                          >
                            <img
                              src={item.img}
                              alt={item.title}
                              className="h-[150px] w-[120px]"
                            />
                            <div className="flex flex-col justify-center items-center mt-2">
                              <span className="text-white text-md">
                                {item.title}
                              </span>
                              <span className="text-[#F99106] text-lg font-semibold">
                                {item.price}
                              </span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                {activeDropdown === menu.name &&
                  menu.name === "Wall Lights" && (
                    <div className="absolute top-full left-[-130%] bg-[#080808] border-t-[2px] border-t-[#F99106] shadow-lg z-10">
                      <div className="w-[700px] flex p-2 justify-around items-center">
                        {menu.data.map((item, k) => (
                          <a
                            key={k}
                            href="#"
                            className="block py-2 hover:text-white"
                          >
                            <img
                              src={item.img}
                              alt={item.title}
                              className="h-[150px] w-[120px]"
                            />
                            <div className="flex flex-col justify-center items-center mt-2">
                              <span className="text-white text-md">
                                {item.title}
                              </span>
                              <span className="text-[#F99106] text-lg font-semibold">
                                {item.price}
                              </span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                {activeDropdown === menu.name &&
                  menu.name === "Table Lamps" && (
                    <div className="absolute top-full left-0 bg-[#080808] border-t-[2px] border-t-[#F99106] shadow-lg z-10">
                      <div className="w-[700px] flex p-2 justify-around items-center">
                        {menu.data.map((item, k) => (
                          <a
                            key={k}
                            href="#"
                            className="block py-2 hover:text-white"
                          >
                            <img
                              src={item.img}
                              alt={item.title}
                              className="h-[150px] w-[120px]"
                            />
                            <div className="flex flex-col justify-center items-center mt-2">
                              <span className="text-white text-md">
                                {item.title}
                              </span>
                              <span className="text-[#F99106] text-lg font-semibold">
                                {item.price}
                              </span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                {activeDropdown === menu.name &&
                  menu.name === "Commercial Lights" && (
                    <div className="absolute top-full right-[-300px] bg-[#080808] border-t-[2px] border-t-[#F99106] shadow-lg z-10">
                      <div className="w-[700px] flex p-2 justify-around items-center">
                        {menu.data.map((item, k) => (
                          <a
                            key={k}
                            href="#"
                            className="block py-2 hover:text-white"
                          >
                            <img
                              src={item.img}
                              alt={item.title}
                              className="h-[150px] w-[120px]"
                            />
                            <div className="flex flex-col justify-center items-center mt-2">
                              <span className="text-white text-md">
                                {item.title}
                              </span>
                              <span className="text-[#F99106] text-lg font-semibold">
                                {item.price}
                              </span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                {activeDropdown === menu.name &&
                  menu.name === "Restaurant Lights" && (
                    <div className="absolute top-full right-0 bg-[#080808] border-t-[2px] border-t-[#F99106] shadow-lg z-10">
                      <div className="w-[700px] flex p-2 justify-around items-center">
                        {menu.data.map((item, k) => (
                          <a
                            key={k}
                            href="#"
                            className="block py-2 hover:text-white"
                          >
                            <img
                              src={item.img}
                              alt={item.title}
                              className="h-[150px] w-[120px]"
                            />
                            <div className="flex flex-col justify-center items-center mt-2">
                              <span className="text-white text-md">
                                {item.title}
                              </span>
                              <span className="text-[#F99106] text-lg font-semibold">
                                {item.price}
                              </span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                {activeDropdown === menu.name &&
                  menu.name === "Multi Lights" && (
                    <div className="absolute top-full right-0 bg-[#080808] border-t-[2px] border-t-[#F99106] shadow-lg z-10">
                      <div className="w-[700px] flex p-2 justify-around items-center">
                        {menu.data.map((item, k) => (
                          <a
                            key={k}
                            href="#"
                            className="block py-2 hover:text-white"
                          >
                            <img
                              src={item.img}
                              alt={item.title}
                              className="h-[150px] w-[120px]"
                            />
                            <div className="flex flex-col justify-center items-center mt-2">
                              <span className="text-white text-md">
                                {item.title}
                              </span>
                              <span className="text-[#F99106] text-lg font-semibold">
                                {item.price}
                              </span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
              </li>
            ))}
          </ul>
        ) : (
          mobileMenuOpen && (
            <ul className="absolute top-full left-0 w-full bg-[#080808]  flex flex-col py-4">
              {menuItems.map((menu, index) => (
                <li key={index} className="text-left">
                  <button
                    className="flex justify-between items-center h-12 w-full px-4"
                    onClick={() => toggleMobileDropdown(menu.name)}
                  >
                    {menu.name}
                    {menu.data &&
                      menu.data.length > 0 &&
                      menu.name !== "Restaurant Lights" &&
                      (activeMobileDropdown === menu.name ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronCircleDown />
                      ))}
                  </button>
                  {activeMobileDropdown === menu.name &&
                    menu.name !== "Restaurant Lights" && (
                      <ul className="bg-[#080808]  text-gray-400 text-sm max-h-48 overflow-y-auto">
                        {menu.name === "Indore Lights" &&
                          menu.data.map((section, i) => (
                            <li
                              key={i}
                              className="px-4 py-2 border-t border-gray-700"
                            >
                              <h2 className="text-white text-md py-1 font-bold">
                                {section.category}
                              </h2>
                              <ul>
                                {section.items.map((item, j) => (
                                  <li key={j} className="py-1">
                                    <a
                                      href="#"
                                      className="block hover:text-white"
                                    >
                                      {item}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        {menu.name === "Wall Lights" &&
                          menu.data.map((item, k) => (
                            <li
                              key={k}
                              className="px-4 py-2 border-t border-gray-700"
                            >
                              <a
                                href="#"
                                className=" hover:text-white flex items-center"
                              >
                                <img
                                  src={item.img}
                                  alt={item.title}
                                  className="h-[100px] w-[80px] mr-2"
                                />
                                <div className="flex flex-col">
                                  <span className="text-white text-sm">
                                    {item.title}
                                  </span>
                                  <span className="text-white text-md font-semibold">
                                    {item.price}
                                  </span>
                                </div>
                              </a>
                            </li>
                          ))}
                        {menu.name === "Table Lamps" &&
                          menu.data.map((item, l) => (
                            <li
                              key={l}
                              className="px-4 py-2 border-t border-gray-700"
                            >
                              <a href="#" className="block hover:text-white">
                                {item}
                              </a>
                            </li>
                          ))}
                        {menu.name === "Commercial Lights" &&
                          menu.data.map((item, m) => (
                            <li
                              key={m}
                              className="px-4 py-2 border-t border-gray-700"
                            >
                              <a href="#" className="block hover:text-white">
                                {item}
                              </a>
                            </li>
                          ))}
                      </ul>
                    )}
                </li>
              ))}
            </ul>
          )
        )}

        <div className="flex items-center md:gap-6 gap-3 relative ">
          <IoIosSearch className="md:text-2xl text-xl" />
          <FaRegUser className="md:text-xl " />
          <AiOutlineShoppingCart
            className="md:text-2xl text-xl cursor-pointer"
            onClick={() => setModal(!modal)}
          />
          <div className="h-5 w-5 cursor-pointer rounded-full absolute top-[-5px] right-[-10px] bg-amber-500 flex justify-center items-center">
            <h1 className="text-white font-bold">{cart?.cartData?.length}</h1>
          </div>
        </div>
          {modal && <CartModal />}
      </div>
    </nav>
  );
};
