import React, { useState } from "react";
import {
  benner,
  benner1,
  light1,
  light1Bg,
  light2,
  light2Bg,
} from "../../assets";
import { ProductCard } from "../resuableComponents";
import { Link } from "react-router-dom";

export const FutureProducts = () => {
  const productData = [
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
    <div className="flex justify-center items-center">
      <div className="container  lg:p-10 p-4">
        <div className="xl:px-48 xl:pb-10 flex justify-center items-center text-center flex-col">
          <div class="nine">
            <h1 class="text-center text-4xl md:text-5xl uppercase text-white tracking-wide font-playfair font-normal">
              Future Products
            </h1>
          </div>
          <p className="py-4 md:text-lg  text-[10px] font-semibold text-white">
            Decorate your home with chic table lamps and floor lamps. Look for
            designs made of ultra-slim metal for a contemporary feel and designs
            with exposed bulbs for an industrial feel. Shop colourful hues and
            patterns to give your space more life, or go classic with a neutral
            tone for a look that will never go out of style.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 md:p-5 p-2 gap-4 place-items-center">
          {productData.map((i, index) => (
            <ProductCard data={i} id={index} />
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
