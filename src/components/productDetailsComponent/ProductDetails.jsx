import React, { useState } from "react";
import { benner1, benner } from "../../assets";
import { ProductCard } from "../resuableComponents";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SlArrowDown, SlArrowLeft, SlArrowRight, SlArrowUp } from "react-icons/sl";
import '../../App.css'
export const ProductDetails = () => {
  const productData = [
    {
      image: benner,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: benner,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: benner,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: benner,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: benner,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: benner,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: benner,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: benner,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
  ];
  const [isOpen, setIsOpen] = useState("");
  const handleToggle = (prop) => {
    console.log(prop);
    setIsOpen(prop);
  };
  const zoom = (e) => {
    // console.log(e);
    // let offsetX, offsetY;
    // var zoomer = e?.currentTarget;
    // e.offsetX ? (offsetX = e?.offsetX) : (offsetX = e?.touches[0]?.pageX);
    // e.offsetY ? (offsetY = e?.offsetY) : (offsetX = e?.touches[0]?.pageX);
    // const x = (offsetX / zoomer.offsetWidth) * 100;
    // const y = (offsetY / zoomer.offsetHeight) * 100;
    // zoomer.style.backgroundPosition = x + "% " + y + "%";
  };
  return (
    <div className="pt-[72px]">
      <div className="flex w-full">
        <div className="w-[70%] flex flex-col">
          <div className="flex w-full h-screen">
            <div className="w-[10%] flex justify-center items-center flex-col p-2">
              <div className="w-20 h-20 hover:border-blue-500  hover:border-2 cursor-pointer rounded-lg  p-2">
                <img src={benner} className="w-full h-full"/>
              </div>
            </div>
            <div className="w-[90%] flex">
              <div className="w-[10%] h-full">
                <h1 className="flex justify-center items-center w-full h-full">
                <SlArrowLeft className="bg-black bg-opacity-70 text-white rounded-full p-1 text-3xl" />
                </h1>
              </div>
              <div className="w-[80%] flex justify-center items-center">
                <div
                  className="w-full h-[90%] p-2 "
                  onMouseMove={(e) => zoom(e)}
                >
                  <img
                    src={benner1}
                    className="w-full h-full rounded-lg"
                    alt="Product"
                  />
                </div>
              </div>
              <div className="w-[10%] relative flex justify-center items-center">
                <div className="absolute top-10 flex flex-col gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F8F8F8] flex justify-center items-center">
                    h
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#f8f8f8d7] flex justify-center items-center">
                    s
                  </div>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                <SlArrowRight className="bg-black bg-opacity-70 text-white rounded-full p-1 text-3xl" />
                </div>
              </div>
            </div>
          </div>
          {/* related product */}
          <div className="py-4">
            <h1 className="text-3xl font-semibold">Related Product</h1>
            <Swiper
              centeredSlides={true}
              // autoplay={{
              //   delay: 3500,
              //   disableOnInteraction: false,
              // }}
              speed={1000}
              navigation
              // pagination={{ clickable: true }}
              slidesPerView={3}
              spaceBetween={30}
              modules={[Navigation, Pagination]}
              className="mySwiper"
            >
              {productData?.map((product, index) => (
                <SwiperSlide key={index} className="w-full">
                  <ProductCard data={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* About this item */}
          <div>
            <div>
              <h1 className="text-3xl font-semibold p-5"> About this item </h1>
              <ul>
                <li className=" p-5 border-t ">
                  <div className=" flex items-center">
                    <div
                      className="w-3/4 text-left flex justify-between items-center  relative"
                      onClick={() => handleToggle("ProductDetails")}
                    >
                      <h1>ProductDetails</h1>{" "}
                    </div>
                    <div className="w-1/4 flex justify-end  items-center absoulte top-0 z-30">
                      {isOpen === "ProductDetails" ? (
                        <SlArrowDown onClick={() => handleToggle("light")} />
                      ) : (
                        <SlArrowUp
                          onClick={() => handleToggle("ProductDetails")}
                        />
                      )}
                    </div>
                  </div>
                  {isOpen === "ProductDetails" && (
                    <div className="p-2 transition-all duration-300 text-black bg-slate-50">
                      <p>Sub Option 1.1</p>
                      <p>Sub Option 1.2</p>
                      <p>Sub Option 1.3</p>
                    </div>
                  )}
                </li>
                <li className=" p-5 border-t">
                  <div className=" flex items-center">
                    <div
                      className="w-3/4 text-left flex justify-between items-center  relative"
                      onClick={() => handleToggle("Specifications")}
                    >
                      <h1>Specifications</h1>{" "}
                    </div>
                    <div className="w-1/4 flex justify-end  items-center absoulte top-0 z-30">
                      {isOpen === "Specifications" ? (
                        <SlArrowDown onClick={() => handleToggle("light")} />
                      ) : (
                        <SlArrowUp
                          onClick={() => handleToggle("Specifications")}
                        />
                      )}
                    </div>
                  </div>
                  {isOpen === "Specifications" && (
                    <div className="p-2 transition-all duration-300 text-black bg-slate-50">
                      <p>Sub Option 1.1</p>
                      <p>Sub Option 1.2</p>
                      <p>Sub Option 1.3</p>
                    </div>
                  )}
                </li>
                <li className=" p-5 border-y">
                  <div className=" flex items-center">
                    <div
                      className="w-3/4 text-left flex justify-between items-center  relative"
                      onClick={() => handleToggle("Directions")}
                    >
                      <h1>Directions</h1>{" "}
                    </div>
                    <div className="w-1/4 flex justify-end  items-center absoulte top-0 z-30">
                      {isOpen === "Directions" ? (
                        <SlArrowDown onClick={() => handleToggle("light")} />
                      ) : (
                        <SlArrowUp onClick={() => handleToggle("Directions")} />
                      )}
                    </div>
                  </div>
                  {isOpen === "Directions" && (
                    <div className="p-2 transition-all duration-700 text-black bg-slate-50">
                      <p>Sub Option 1.1</p>
                      <p>Sub Option 1.2</p>
                      <p>Sub Option 1.3</p>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>


        {/* right side  */}
        <div className="w-[30%] flex flex-col  p-2">
          <div className="w-full flex justify-center gap-5 items-center">
            <div className="w-1/2 rounded-lg border flex justify-center items-center  p-4">
              <h1 className="text-[11px] ">100+ bought since yesterday</h1>
            </div>
            <div className="w-1/2 rounded-lg border flex justify-center items-center p-4">
              <h1 className="text-[11px]">In 200+ people's carts</h1>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="py-2 text-4xl">Name</h1>
            <h1 className="text-base  ">descriptions</h1>
            <div class="flex items-center mt-2.5 mb-5">
              <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                5.0
              </span>
            </div>
            <h1 className="text-base">Free 90-day returns</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="py-2 text-3xl">500$</h1>
            <h1 className="text-base">Price when purchased online</h1>
            <div className="py-3">
              <button className="bg-blue-600 text-white py-3 px-6 rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>
          {/* 1 box */}
          <div className="w-full bg-[#F8F8F8] rounded-lg mt-5  p-4">
            <div>
              <h1>Size:</h1>
              <div className="grid grid-cols-3 gap-3 place-items-center">
                <div className="w-full rounded-lg bg-white border-2 hover:border-black flex justify-center items-center p-2">
                  <h1>hello</h1>
                </div>
                <div className="w-full rounded-lg bg-white border-2 hover:border-black flex justify-center items-center p-2">
                  <h1>hello</h1>
                </div>
                <div className="w-full rounded-lg bg-white border-2 hover:border-black flex justify-center items-cente p-2">
                  <h1>hello</h1>
                </div>
                <div className="w-full rounded-lg bg-white border-2 hover:border-black flex justify-center items-center p-2">
                  <h1>hello</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-4">
              <h1>Actual Color :</h1>
              <div className="grid grid-cols-4 ">
                <div className="w-12 h-12 border rounded-full flex border-red-400 justify-center items-center">
                  <div className="w-full h-full border-2 border-white rounded-full  bg-black"></div>
                </div>
              </div>
            </div>
          </div>

          {/* 2  box*/}
          <div className="w-full bg-[#F8F8F8] rounded-lg  p-4 mt-8">
            <div>
              <h1>How do you want your item?</h1>
              <div className="flex items-center gap-4">
                <input type="checkbox" />
                <h1 className="text-[13px]">
                  {" "}
                  I want shipping & delivery savings with Walmart plus
                </h1>
              </div>
              <h1 className="text-[12px]">
                You get 30 days free! Choose a plan at checkout.
              </h1>

              <div className="grid grid-cols-3 gap-3 place-items-center">
                <div className="w-full rounded-lg bg-gray-500 flex justify-center items-center flex-col p-2">
                  <h1>hello</h1>
                  <h1>hello</h1>
                </div>
                <div className="w-full rounded-lg bg-gray-500 flex justify-center items-center flex-col p-2">
                  <h1>hello</h1>
                  <h1>hello</h1>
                </div>
                <div className="w-full rounded-lg bg-gray-500 flex justify-center items-cente flex-col p-2">
                  <h1>hello</h1>
                  <h1>hello</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-4">
              <div className="flex ">
                <h1 className="pr-2">Pickup fromSacramento Supercenter</h1>
                <h1 className=" border-l border-black px-2">Location</h1>
              </div>
              <h1>Delivery toSacramento, 95829</h1>

              <div className="flex gap-3 py-2 border-t border-black">
                <div>
                  <h1>Free 90-day returns</h1>
                </div>
                <div>
                  <h1>Free 90-day returns</h1>
                </div>
                <div>
                  <h1>Free 90-day returns</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="flex py-2 justify-center items-center gap-5">
            <button className="">Add to list </button>
            <button>Add to registry</button>
          </div>
        </div>
      </div>
    </div>
  );
};
