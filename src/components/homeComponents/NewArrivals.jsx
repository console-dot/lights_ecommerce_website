import React from "react";
import { ProductCard } from "../resuableComponents";
import { BennerImage1, BennerImage2, light1, light1Bg, light2, light2Bg } from "../../assets";
import { Link } from "react-router-dom";

export const NewArrivals = () => {
  const newArrivalsData = [
    {
      image: light1,
      imageBackground: light1Bg,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: light2,
      imageBackground: light2Bg,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: light1,
      imageBackground: light1Bg,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: light2,
      imageBackground: light2Bg,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: light1,
      imageBackground: light1Bg,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: light2,
      imageBackground: light2Bg,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: light1,
      imageBackground: light1Bg,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: light2,
      imageBackground: light2Bg,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
  ];
  return (
    <div div className="flex justify-center items-center">
      <div className="container p-4 md:p-10">
        <div class="nine">
          <h1 class="text-center text-4xl md:text-5xl uppercase text-amber-400 tracking-wide font-playfair font-normal">
            New Arrivals
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 md:p-5 p-2 gap-4 place-items-center pt-5 md:pt-10">
          {newArrivalsData.map((item, index) => (
            <div className="flex justify-start items-center">
              <ProductCard data={item} />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center pt-10 ">
          <button className="px-7 py-3 bg-[#fa9105] border-[#fa9105] hover:bg-white hover:text-[#fa9105] font-semibold  border text-white  rounded-lg">
            <Link to="/product">Veiw All Products</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
