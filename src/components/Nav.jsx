import React, { useState } from "react";
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

export const Nav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const size = useWindowSize();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      category: "Indore Lights",
      items: ["Battery Torch", "Brazing Torch", "Propane Torch", "Reflector"],
    },
    {
      category: "Wall Lights",
      items: ["Cottage Lamp", "Modern Lamp", "Piano Lamps", "Table Lamps"],
    },
    {
      category: "Commercial Lights",
      items: [
        "Fresnel Commercial Lights",
        "Industrial Lamp",
        "LED Commercial Lights",
        "Ceiling Lamp",
      ],
    },
    {
      category: "Table Lamps",
      items: [
        "Bedside Lamp",
        "Desk Lamp",
        "Lava Lamp",
        "Novelty Lamp",
        "Study Lamp",
      ],
    },
    {
      category: "PENDANT",
      items: [
        "Bowl Pendant",
        "Bulb Pendant",
        "Drum Pendant",
        "Globe Pendant",
        "Mini Pendant",
      ],
    },
    {
      category: "SUPPOSITORIES",
      items: [
        "Multiple Pendants",
        "Table Lamps",
        "Torchiere",
        "Wall Lights",
        "Restaurant Lights",
      ],
    },
  ];

  const glowPlateData = [
    {
      img: glowPlate1,
      title: "Black Festive",
      price: "$3,600",
    },
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
    "Bedside Lamp",
    "Desk Lamp",
    "Lava Lamp",
    "Novelty Lamp",
    "Study Lamp",
  ];

  const spotlightData = [
    "LED Commercial Lights",
    "Mission Style",
    "Fresnel Commercial Lights",
    "Industrial Lamp",
  ];

  const menuItems = [
    { name: "Indore Lights", data: torchesData },
    { name: "Wall Lights", data: glowPlateData },
    { name: "Table Lamps", data: nightLampData },
    { name: "Commercial Lights", data: spotlightData },
    { name: "Restaurant Lights", data: [] }, // No dropdown
    { name: "Multipurpose Lights", data: [] }, // No dropdown
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
            className="md:h-10 md:w-auto h-7 w-32 ml-4"
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
                  <div className="nav-link">{menu.name}</div>
                  {menu.data &&
                    menu.data.length > 0 &&
                    menu.name !== "Restaurant Lights" && (
                      <RiArrowDropDownLine size={20} className="ml-1" />
                    )}
                </button>

                {/* Desktop dropdowns */}
                {activeDropdown === menu.name &&
                  menu.name === "Indore Lights" && (
                    <div className="absolute top-full left-0 bg-[#080808] border-t-[2px] border-t-[#F99106] shadow-lg z-10">
                      <ul className="py-2 text-sm text-gray-400">
                        <div className="w-[700px] flex p-8 justify-start items-center">
                          <div className="w-full flex justify-start items-start flex-wrap">
                            {menu.data.map((section, i) => (
                              <div key={i} className="flex flex-col w-[33%]">
                                <h2 className="text-white text-lg py-1 font-bold">
                                  {section.category}
                                </h2>
                                {section.items.map((item, j) => (
                                  <li key={j}>
                                    <a
                                      href="#"
                                      className="block py-1 hover:text-white"
                                    >
                                      {item}
                                    </a>
                                  </li>
                                ))}
                              </div>
                            ))}
                          </div>
                          <div>
                            <img
                              src={menuImg}
                              alt=""
                              className="h-auto w-auto"
                            />
                          </div>
                        </div>
                      </ul>
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
                      <ul className="p-2 w-44 text-sm text-gray-400">
                        {menu.data.map((item, l) => (
                          <li key={l}>
                            <a href="#" className="block py-2 hover:text-white">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {activeDropdown === menu.name &&
                  menu.name === "Commercial Lights" && (
                    <div className="absolute top-full left-0 bg-[#080808] border-t-[2px] border-t-[#F99106] shadow-lg z-10">
                      <ul className="p-2 w-44 text-sm text-gray-400">
                        {menu.data.map((item, m) => (
                          <li key={m}>
                            <a href="#" className="block py-2 hover:text-white">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
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

        <div className="flex items-center md:gap-6 gap-3  ">
          <IoIosSearch className="md:text-2xl text-xl" />
          <FaRegUser className="md:text-xl " />
          <AiOutlineShoppingCart className="md:text-2xl text-xl" />
        </div>
      </div>
    </nav>
  );
};
