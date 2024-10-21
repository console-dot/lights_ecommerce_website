import React, { useEffect, useState } from "react";
import { categoryCardIamge, categoryCardIamge1 } from "../../assets";
import { getCategoryCardDesign } from "../../api/category";

export const CategoryCard = () => {
  const [isOpen, setIsOpen] = useState("");
  const handel = (props) => {
    setIsOpen(props);
  };
  const [categoryCardDesignData, setCategoryCardDesignData] = useState();
  const getCategoryDesignCall = async () => {
    const res = await getCategoryCardDesign();
    setCategoryCardDesignData(res?.data);
  };

  useEffect(() => {
    getCategoryDesignCall();
  }, []);
  return (
    <div className="flex w-full justify-center items-center ">
      <div
        className="container p-4 h-auto xl:h-auto md:h-auto  gap-5 md:gap-10 flex-col md:flex-row"
        style={{ display: "flex" }}
      >
        {categoryCardDesignData?.map((item, index) => (
          <div
            className="md:w-1/2 border-solid  border-[10px] h-full border-[#232323] cursor-pointer relative"
            onMouseEnter={() => handel(index)}
            onMouseLeave={() => handel("light")}
          >
            <div className="">
              <img src={`data:image/png;base64,${item.imageId?.image}`} className="h-[300px] w-full" />
            </div>
            <div className=" absolute flex flex-col justify-center items-center top-6 md:top-10 xl:top-24  lg:top-14 left-5 md:left-10">
              <h1 className="text-amber-500 lg:text-xl font-semibold italic">
                {item?.categoryCardDesignh1}
              </h1>
              <h1 className="md:text-xl heading lg:text-3xl py-1  md:pb-2 font-semibold text-white lg:py-3 ">
                {item?.categoryCardDesignh2}
              </h1>
              <button className="shop-button px-2 py-1 lg:px-4 lg:py-2   bg-transparent border border-[#f99106]  text-[#f99106] hover:text-white font-semibold  rounded-full flex justify-center items-center">
                <span className="text-[10px] md:text-base">Shop Now</span>
              </button>
            </div>
            <div
              className={`absolute top-0 w-full  bg-white overflow-hidden transition-all duration-500 delay-75 ease-in-out ${
                isOpen === index ? "opacity-[0.006] h-full" : "opacity-20 h-0"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};
