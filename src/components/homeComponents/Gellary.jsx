import React, { useState } from "react";
import {
  BennerImage1,
  BennerImage2,
  BennerImage3,
  categoryCardIamge,
  categoryCardIamge1,
  light1,
  light2,
  lightHouse,
} from "../../assets";
import "./Gellary.css";

export const Gellary = () => {
  const images = [
    { src: light1, name: "Light 1" },
    { src: light2, name: "Light 2" },
    { src: lightHouse, name: "Light House" },
    { src: light2, name: "Light 2" },
    { src: categoryCardIamge, name: "Category 1" },
    { src: categoryCardIamge1, name: "Category 2" },
    { src: BennerImage1, name: "Benner 1" },
    { src: BennerImage2, name: "Benner 2" },
    { src: BennerImage3, name: "Benner 3" },
  ];

  const getRandomHeight = () => {
    const minHeight = 200;
    const maxHeight = 350;
    return Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
  };

  return (
    <div className="flex justify-center items-center md:py-10">
      <div className="container p-4">
        <div className="flex justify-center items-center">
          <h1 className="heading text-center text-3xl md:text-5xl uppercase text-amber-500 tracking-wide py-10">
            Categories
          </h1>
        </div>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full relative  mb-4 overflow-hidden border border-black gallery-item"
              style={{ height: getRandomHeight() }}
            >
              <img
                src={image.src}
                alt={image.name}
                className="w-full h-full rounded-lg gellary transition-all ease-in-out overflow-hidden"
              />
              <div className="image-name heading absolute bottom-0 left-0 w-full text-center text-black py-2">
                {image.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
