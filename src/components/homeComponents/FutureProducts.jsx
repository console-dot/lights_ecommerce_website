import React, { useContext, useEffect } from "react";
import { ProductCard } from "../resuableComponents";
import { Link } from "react-router-dom";
import AddCardContext from "../../context/addCart/AddCardContext";

export const FutureProducts = () => {
  const cart = useContext(AddCardContext);
  useEffect(() => {
    console.log(cart.productsData);
  }, [cart.productsData]);
  return (
    <div className="flex justify-center items-center">
      <div className="container p-4">
        <div className="xl:px-48 xl:pb-10 flex justify-center items-center text-center flex-col">
          <div class="nine">
            <h1 class="heading text-center text-3xl md:text-5xl uppercase text-amber-500 tracking-wide">
              Future Products
            </h1>
          </div>
          <p className="py-4 md:text-lg  text-[10px] font-normal text-[#CCCCCC] italic">
            Decorate your home with chic table lamps and floor lamps. Look for
            designs made of ultra-slim metal for a contemporary feel and designs
            with exposed bulbs for an industrial feel. Shop colourful hues and
            patterns to give your space more life, or go classic with a neutral
            tone for a look that will never go out of style.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 md:p-0 p-2 gap-4 place-items-center">
          {cart.productsData
            ?.filter((item) => item.section === "feature")
            .map((i, index) => (
              <ProductCard data={i} id={index} />
            ))}
        </div>

        <div className="flex justify-center items-center pt-10 ">
          <button className="shop-button1 px-7 py-3  bg-transparent border border-[#f99106]  text-[#f99106] hover:text-white  rounded-lg">
            <span>
              <Link className="hover:text-white" to={`/${"Products"}`}>
                Veiw All Products
              </Link>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
