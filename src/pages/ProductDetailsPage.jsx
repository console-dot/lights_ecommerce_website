import React, { useContext, useEffect, useState } from "react";
import { Layout } from "../themes";
import {
  AboutThisItem,
  BreadCrumbsDetailPage,
  Login,
  ProductDetails,
  RelatedProduct,
  RightSide,
  SignUp,
} from "../components";

import { useParams } from "react-router-dom";
import AddCardContext from "../context/addCart/AddCardContext";
import { getSingleProduct } from "../api/products";
export const ProductDetailsPage = () => {
  const [data, setData] = useState();

  const setButton = useContext(AddCardContext);
  useEffect(() => {
    setButton.setActiveButton(" ");
  }, [setButton.activeButton]);
  const params = useParams();

  const getSingleProductCall = async () => {
    const id = params?.id;
    const res = await getSingleProduct({ id });
    setData(res?.data);
  };

  useEffect(() => {
    if (params?.id) {
      getSingleProductCall();
    }
  }, [params?.id]);
  return (
    <Layout>
      <div className="px-5 ">
        <BreadCrumbsDetailPage data={data} />
        <div className="flex justify-center items-center pt-[20px]  ">
          <div
            className="flex flex-col md:flex-row container relative"
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
            }}
          >
            <div className="w-full md:w-[50%] lg:w-[65%] h-full   ">
              <ProductDetails data={data} />
            </div>
            <div className="w-full md:w-[50%] lg:w-[35%] h-full sticky top-24">
              <RightSide data={data} />
            </div>
          </div>
        </div>
        <AboutThisItem data={data} />
        <RelatedProduct data={data} />
        <Login />
        <SignUp />
      </div>
    </Layout>
  );
};
