import React, { useContext } from "react";
import { benner } from "../../assets";
import { ProductCard, ProductCardBanner } from "../resuableComponents";
import AddCardContext from "../../context/addCart/AddCardContext";
import { Link, useParams } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";

export const AllCategroy = () => {
  const cart = useContext(AddCardContext);
  const params = useParams();
  const name = params?.id;
  console.log(name);
  return (
    <div className="">
     <ProductCardBanner name={name}/>
      <div className="md:px-10 px-5 pt-5  md:pt-10">
        <nav class="flex" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li class="inline-flex items-center">
              <div class="inline-flex items-center text-sm font-medium text-gray-700 px-3 py-2 rounded-lg hover:text-white hover:bg-amber-500 dark:text-gray-400 dark:hover:text-white ">
                <svg
                  class="w-3 h-3 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                <Link to="/home">Home</Link>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <svg
                  class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <div class="ms-1 text-sm font-medium text-gray-700  px-3 py-2 rounded-lg hover:text-white hover:bg-amber-500 md:ms-2 dark:text-gray-400 dark:hover:text-white">
                <Link to="/product">Products</Link>
                </div>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg
                  class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                  {name}
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="md:p-10 p-5 grid lg:grid-cols-3 grid-cols-1  place-items-center  gap-5">
        {cart?.cards?.map((i, index) => (
          <ProductCard data={i} id={index} />
        ))}
      </div>
    </div>
  );
};
