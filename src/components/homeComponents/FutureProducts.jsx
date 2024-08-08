import React from "react";
import { benner } from "../../assets";
import { ProductCard } from "../resuableComponents";
import { Link } from "react-router-dom";

export const FutureProducts = () => {
  const productData = [
    {
      image: benner,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: benner,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: benner,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: benner,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: benner,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: benner,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: benner,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: benner,
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
            <h1  class="text-center text-4xl md:text-5xl uppercase text-gray-800 tracking-wide font-playfair font-normal">
             Future Products
            </h1>
          </div>
          <p className="py-4 md:text-lg  text-[10px] font-semibold">
            Decorate your home with chic table lamps and floor lamps. Look for
            designs made of ultra-slim metal for a contemporary feel and designs
            with exposed bulbs for an industrial feel. Shop colourful hues and
            patterns to give your space more life, or go classic with a neutral
            tone for a look that will never go out of style.
          </p>
        </div>
        <div className="sm:grid flex flex-col xxs:grid-cols-2 lg:grid-cols-3 md:p-5 p-2 gap-4 place-items-center">
          {productData.map((i,index) => (
            <ProductCard data={i} id={index} />
          ))}
        </div>

        <div className="flex justify-center items-center pt-10 ">
          <button className="px-7 py-3 bg-[#fa9105] border-[#fa9105] hover:bg-white hover:text-[#fa9105] font-semibold  border text-white  rounded-lg">
          <Link to='/product'>Veiw All Products</Link> 
          </button>
        </div>
      </div>
    </div>
  );
};
