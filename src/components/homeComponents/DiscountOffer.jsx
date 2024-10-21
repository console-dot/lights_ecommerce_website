import React, { useEffect, useState } from "react";
import { parallax } from "../../assets";
import { getDiscounteOffer } from "../../api/dicounteOffer";

export const DiscountOffer = () => {
  const [dicounteOfferData, setDiscounteOfferData] = useState();
  const getDiscounteOfferCall = async () => {
    const res = await getDiscounteOffer();
    setDiscounteOfferData(res?.data[0]);
  };

  useEffect(() => {
    getDiscounteOfferCall();
  }, []);
  return (
    <>
      <div
        className="relative h-auto md:py-28 py-5 bg-fixed bg-center bg-cover flex items-center justify-center mx-auto"
        style={{
          backgroundImage: `url(data:image/png;base64,${dicounteOfferData?.imageId.image})`,
        }}
      >
        <div className="absolute bg-black opacity-20 inset-0"></div>
        <div className="relative flex mx-auto w-full max-w-[1200px] justify-between px-4 md:px-8">
          <div className="relative text-start text-white p-6 flex flex-col justify-end">
            <h1 className="heading md:text-7xl text-4xl text-[#F99106] text-center font-bold mb-4">
              {dicounteOfferData?.discountOfferh1}
            </h1>
            <div className="w-[2px] bg-white h-10 mx-auto md:my-4 my-1"></div>
            <p className="text-lg text-[#CCCCCC] tracking-tighter italic mb-4 text-center">
              {dicounteOfferData?.discountOfferh2}
            </p>
            <p className="text-xl font-semibold text-center heading">
              {dicounteOfferData?.discountOfferh3}
            </p>
            <div className="flex justify-center">
              <button className="shop-button mt-6 w-28 px-2 py-3   bg-transparent border border-[#f99106]  text-[#f99106] hover:text-white  rounded-full">
                <span>Shop Now</span>
              </button>
            </div>
          </div>
          <div className="hidden md:block w-[50%]"></div>
        </div>
      </div>
    </>
  );
};
