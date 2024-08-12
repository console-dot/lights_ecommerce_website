import React, { useState } from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
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

export const Nav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Dropdown data
  const torchesData = [
    {
      category: "TORCHES",
      items: ["Battery Torch", "Brazing Torch", "Propane Torch", "Reflector"],
    },
    {
      category: "GLOW PLATE",
      items: ["Cottage Lamp", "Modern Lamp", "Piano Lamps", "Table Lamp"],
    },
    {
      category: "SPOTLIGHT",
      items: [
        "Fresnel Spotlight",
        "Industrial Lamp",
        "LED Spotlight",
        "Ceiling Lamp",
      ],
    },
    {
      category: "NIGHT LAMP",
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
        "Night Lamp",
        "Torchiere",
        "Glow Plate",
        "Floor Lamp",
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
    "LED Spotlight",
    "Mission Style",
    "Fresnel Spotlight",
    "Industrial Lamp",
  ];

  const menuItems = [
    { name: "Torches", data: torchesData },
    { name: "Glow Plate", data: glowPlateData },
    { name: "Night Lamp", data: nightLampData },
    { name: "Spotlight", data: spotlightData },
    { name: "Floor Lamp", data: [] }, // No dropdown
  ];

  return (
    <nav className="fixed h-32 mx-auto w-full bg-[#080808] text-white px-4 flex justify-between items-center z-50">
      <div className="flex flex-col items-center">
        <img src={logo} alt="Logo" />
      </div>

      <ul className="flex justify-center space-x-6 text-xl mx-auto">
        {menuItems.map((menu, index) => (
          <li
            key={index}
            className="relative"
            onMouseEnter={() => handleMouseEnter(menu.name)}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center h-32">
              <div className="nav-link">{menu.name}</div>
              {menu.data.length > 0 && menu.name !== "Floor Lamp" && (
                <RiArrowDropDownLine className="ml-1" />
              )}
            </button>

            {activeDropdown === menu.name && menu.name === "Torches" && (
              <div className="absolute top-full left-0 bg-[#080808] border-[1px] border-gray-800 border-t-[2px] border-t-[#FFC000] divide-y divide-gray-100 shadow-lg z-10">
                <ul className="py-2 text-sm text-gray-400">
                  <div className="w-[700px] flex p-8 justify-start items-center">
                    <div className="w-full flex justify-start items-start flex-wrap">
                      {menu.data.map((section, i) => (
                        <div key={i} className="flex flex-col   w-[33%]">
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
                      <img src={menuImg} alt="" />
                    </div>
                  </div>
                </ul>
              </div>
            )}

            {activeDropdown === menu.name && menu.name === "Glow Plate" && (
              <div className="absolute top-full left-[-100%] bg-[#080808] border-[1px] border-gray-800 border-t-[2px] border-t-[#FFC000] shadow-lg z-10">
                <div className="w-[700px] flex p-2 justify-around items-center">
                  {menu.data.map((item, k) => (
                    <a key={k} href="#" className="block py-2 hover:text-white">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="h-[150px] w-[120px]"
                      />
                      <div className="flex flex-col justify-center items-center mt-2">
                        <span className="text-white text-xl">{item.title}</span>
                        <span className="text-white text-2xl font-semibold">
                          {item.price}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {activeDropdown === menu.name && menu.name === "Night Lamp" && (
              <div className="absolute top-full left-0 bg-[#080808] border-[1px] border-gray-800 border-t-[2px] border-t-[#FFC000] shadow-lg z-10">
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

            {activeDropdown === menu.name && menu.name === "Spotlight" && (
              <div className="absolute top-full left-0 bg-[#080808] border-[1px] border-gray-800 border-t-[2px] border-t-[#FFC000] shadow-lg z-10">
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

      <div className="flex items-center space-x-4">
        <FaSearch />
        <FaUser />
        <FaShoppingCart />
      </div>
    </nav>
  );
};
