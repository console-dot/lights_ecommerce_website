import React from "react";
import { ProductCard } from "../resuableComponents";
import { BennerImage1, BennerImage2 } from "../../assets";
import { Link } from "react-router-dom";

export const NewArrivals = () => {
  const newArrivalsData = [
    {
      image: BennerImage1,
      name: "wood",
      price: 3500,
      description: "lorem",
    },
    {
      image: BennerImage2,
      name: "wood",
      price: 3500,
      description: "lorem",
    },
    {
      image: BennerImage1,
      name: "wood",
      price: 3500,
      description: "lorem",
    },
    {
      image: BennerImage1,
      name: "wood",
      price: 3500,
      description: "lorem",
    },
    {
      image: BennerImage1,
      name: "wood",
      price: 3500,
      description: "lorem",
    },
    {
      image: BennerImage1,
      name: "wood",
      price: 3500,
      description: "lorem",
    },
    {
      image: BennerImage1,
      name: "wood",
      price: 3500,
      description: "lorem",
    },
    {
      image: BennerImage1,
      name: "wood",
      price: 3500,
      description: "lorem",
    },
  ];
  return (
    <div div className="flex justify-center items-center">
      <div className="container p-4 md:p-10">
        <div class="nine">
          <h1 class="text-center text-4xl md:text-5xl uppercase text-gray-800 tracking-wide font-playfair font-normal">
            New Arrivals
          </h1>
        </div>
        <div className="sm:grid flex flex-col xxs:grid-cols-2 lg:grid-cols-3 md:p-5 p-2 gap-4 place-items-center">
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
