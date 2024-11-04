import React, { useContext } from "react";
import "../../App.css";
import AddCardContext from "../../context/addCart/AddCardContext";
import { useParams } from "react-router-dom";

export const ProductCardBanner = () => {
  const cart = useContext(AddCardContext);
  const params = useParams();
  const name = params?.id;
  const filterCategoryData = cart.productCategoryData?.filter(
    (i) => i.name.split(" ").join("").toLowerCase() === name
  );
  return (
    <>
      {filterCategoryData?.map((i) => (
        <div className="w-full h-[150px] md:h-[400px]  ">
          <div
            style={{
              backgroundImage: `url(data:image/png;base64,${i?.bgImage?.image})`,
            }}
            className="w-full h-full flex flex-col justify-center bg-center bg-cover bg-no-repeat items-center relative "
          >
            {/* products */}
            <div className=" w-[90%] md:w-2/5 h-full  md:h-3/5 absolute top-[50%] md:top-[70%] rounded-lg ">
              <div className="relative w-full h-full flex flex-col justify-center items-center">
                {" "}
                <div className="absolute bg-black w-full h-full opacity-50 rounded-lg"></div>
                <div className="w-full h-full  p-4 z-10 flex flex-col items-center justify-center">
                  <h1 className="glow-text w-full  heading cursor-pointer z-30 text-center  text-3xl md:text-4xl uppercase text-amber-500 tracking-wide font-playfair font-semibold ">
                    {i.name || "About Us"}
                  </h1>
                  <p className="text-white italic z-10 text-[10px] sm:text-base text-center p-2 md:pt-7">
                    {filterCategoryData[0]?.description ||
                      "  Sharing your organisation’s story. Best practice for content creation. Calls to action. Using multimedia to bring yourmessage to life."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      ;
    </>
  );
};
