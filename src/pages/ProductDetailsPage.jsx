import React, { useState } from "react";
import { Layout } from "../themes";
import {
  AboutThisItem,
  BreadCrumbsDetailPage,
  ProductDetails,
  RelatedProduct,
  RightSide,
} from "../components";
import {  light1, light1Bg, light2, light2Bg } from "../assets";
import { useParams } from "react-router-dom";
export const ProductDetailsPage = () => {
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
  const params = useParams();
  const index = params?.id;
  const [data, setData] = useState(productData[index]);
  return (
    <Layout >
      <BreadCrumbsDetailPage />
      <div className="flex justify-center items-center pt-[20px] ">
        <div
          className="flex flex-col md:flex-row container"
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <div className="w-full md:w-[50%] lg:w-[40%] ">
            <ProductDetails data={data} />
          </div>
          <div className="w-full md:w-[50%] lg:w-[60%]">
            <RightSide data={data} />
          </div>
        </div>
      </div>
      <AboutThisItem data={data} />
      <RelatedProduct productData={productData} />
    </Layout>
  );
};
