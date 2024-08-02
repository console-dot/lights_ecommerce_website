import React from "react";
import { ProductCard } from "../resuableComponents";
import { benner } from "../../assets";

export const NewArrivals = () => {
  const newArrivalsData = [
    {
      image: benner,
      name: "wood",
      price: 3500,
      description: "lorem",
    },
    {
      image: benner,
      name: "wood",
      price: 3500,
      description: "lorem",
    },
    {
      image: benner,
      name: "wood",
      price: 3500,
      description: "lorem",
    },
    {
      image: benner,
      name: "wood",
      price: 3500,
      description: "lorem",
    },
    {
      image: benner,
      name: "wood",
      price: 3500,
      description: "lorem",
    },
    {
      image: benner,
      name: "wood",
      price: 3500,
      description: "lorem",
    },
    {
      image: benner,
      name: "wood",
      price: 3500,
      description: "lorem",
    },
    {
      image: benner,
      name: "wood",
      price: 3500,
      description: "lorem",
    },
  ];
  return (

  <div div className="flex justify-center items-center">
    <div className="container p-10">
      <div class="nine">
        <h1>
          New Arrivals<span>Tagline Keywords</span>
        </h1>
      </div>
      <div className="sm:grid flex flex-col xxs:grid-cols-2 lg:grid-cols-3 md:p-5 p-2 gap-4 place-items-center">
      {newArrivalsData.map((item, index) => (
        <div className="flex justify-start items-center">
          <ProductCard data={item} />
        </div>
      ))}
      </div>
    </div>
    </div>
  );
};
