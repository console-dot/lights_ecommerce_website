import React, { useState } from "react";
import { Layout } from "../themes";
import {
  AboutThisItem,
  ProductDetails,
  RelatedProduct,
  RightSide,
} from "../components";
import { BennerImage1 } from "../assets";
import { useParams } from "react-router-dom";
export const ProductDetailsPage = () => {
  const productData = [
    {
      image: BennerImage1,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: BennerImage1,
      name: "whello",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: BennerImage1,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: BennerImage1,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: BennerImage1,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: BennerImage1,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: BennerImage1,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: BennerImage1,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
  ];
  const params = useParams();
  const index = params?.id;
  const [data, setData] = useState(productData[index]);
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row ">
        <div className="lg:w-[70%]">
          <ProductDetails />
          <div className="lg:hidden">
            <RightSide productData={productData} data={data} />
          </div>

          <AboutThisItem data={data} />
        </div>
        <div className="lg:w-[30%] lg:pt-[72px] lg:flex hidden">
          <RightSide productData={productData} />
        </div>
      </div>
      <RelatedProduct productData={productData} />
    </Layout>
  );
};
