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
import { FaSpinner } from "react-icons/fa";
export const ProductDetailsPage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const setButton = useContext(AddCardContext);
  const params = useParams();

  useEffect(() => {
    setButton.setActiveButton(" ");
  }, [setButton]);

  const getSingleProductCall = async () => {
    try {
      setIsLoading(true); // Start loading
      const id = params?.id;
      const res = await getSingleProduct({ id });
      setData(res?.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    if (params?.id) {
      getSingleProductCall();
    }
  }, [params?.id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-semibold text-amber-500 animate-spin">
          <FaSpinner size={40}/>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-medium text-red-500">
          Product not found.
        </div>
      </div>
    );
  }
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
              {<ProductDetails data={data} />}
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
