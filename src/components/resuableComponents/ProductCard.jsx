import React, { useContext, useEffect, useState } from "react";
import { benner, benner2 } from "../../assets";
import AddCardContext from "../../context/addCart/AddCardContext";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegEye, FaShoppingCart } from "react-icons/fa";
import { ProductDetailsModal } from "./ProductDetailsModal";
import { useIsMobile } from "../../hooks/useIsMobile";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const updateMatch = () => setMatches(mediaQueryList.matches);

    mediaQueryList.addEventListener("change", updateMatch);
    return () => mediaQueryList.removeEventListener("change", updateMatch);
  }, [query]);

  return matches;
};

export const ProductCard = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productDetail, setProductDetail] = useState(null);
  const isMdOrLarger = useMediaQuery("(min-width: 768px)");
  const [imageIcon, setImageIcon] = useState(false);
  const navigate = useNavigate();
  const cart = useContext(AddCardContext);

  useEffect(() => {
    setImageIcon(!isMdOrLarger);
  }, [isMdOrLarger]);

  const isMobile = useIsMobile();

  const openModal = () => {
    setProductDetail(data);
    setIsModalOpen(true); // Open the modal
  };
  return (
    <>
      <div
        className="lg:w-[300px] w-[150px] md:w-[240px] group p-2 md:p-1 relative lg:h-[470px] h-[300px] sm:h-[400px] md:[290px] cursor-pointer   bg-opacity-30 backdrop-blur-md rounded-xl border-2 border-white border-opacity-10 "
        onMouseEnter={isMdOrLarger ? () => setImageIcon(true) : undefined}
        onMouseLeave={isMdOrLarger ? () => setImageIcon(false) : undefined}
      >
        <div className="flex-col flex w-full h-full">
          <div
            className="relative w-full h-[80%] "
            onClick={() => navigate(`/productDetails/${data?._id}`)}
          >
            <img
              src={`data:image/png;base64,${data?.avatar?.image}`}
              className="relative w-full rounded-lg h-full inset-0 transition-opacity ease-in-out bg-[#e0dddd] duration-1000 group-hover:opacity-0"
              alt="Image 1"
            />
            <img
              src={`data:image/png;base64,${data?.bgImage?.image}`}
              className="absolute z-40 inset-0 w-full rounded-lg h-full transition-opacity ease-in-out duration-1000  opacity-0 group-hover:opacity-100"
              alt="Image 2"
            />
          </div>
          <div className="md:absolute  md:top-24 md:right-5  z-40 py-1 ">
            {imageIcon && (
              <div className=" ">
                <div className="flex md:flex-col justify-center items-center flex-row gap-2">
                  <div
                    className="bg-black hidden md:flex md:w-10 w-5 h-5 md:h-10 rounded-full justify-center items-center hover:bg-amber-600"
                    onClick={() => openModal(data)}
                  >
                    <FaRegEye className="text-white" />
                  </div>
                  <div>{/* <FaHeart className="text-white" /> */}</div>
                  <div
                    className="bg-black md:w-10 w-8 h-8 md:h-10 rounded-full flex justify-center items-center hover:bg-amber-600"
                    onClick={() => cart.addToCart(data)}
                  >
                    <FaShoppingCart className="text-white" />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className={`md:${
              imageIcon ? "hidden" : "flex"
            } md:absolute right-2 top-2 z-40 md:hidden flex justify-center items-center`}
          >
            <div className="flex items-center justify-center md:mt-2.5 md:mb-5 py-1">
              {/* Rating stars here */}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center h-[20%]">
            <h1 className="font-semibold  md:py-2 text-[#CCCCCC] heading">
              {isMobile
                ? data?.name.length > 14
                  ? data?.name
                      ?.split(" ")
                      .map(
                        (word) =>
                          word.charAt(0).toUpperCase() +
                          word.slice(1).toLowerCase()
                      )
                      .join(" ")
                      .substring(0, 14)
                      .concat("...")
                  : data?.name
                      ?.split(" ")
                      .map(
                        (word) =>
                          word.charAt(0).toUpperCase() +
                          word.slice(1).toLowerCase()
                      )
                      .join(" ")
                : data?.name
                    ?.split(" ")
                    .map(
                      (word) =>
                        word.charAt(0).toUpperCase() +
                        word.slice(1).toLowerCase()
                    )
                    .join(" ") || data?.title}
            </h1>
            <h1 className="font-semibold inline  text-amber-500 ">
              PKR : {data?.price}
            </h1>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="z-50 fixed top-0 flex items-end h-screen w-full">
          {productDetail && (
            <ProductDetailsModal data={data} setIsModal={setIsModalOpen} />
          )}
        </div>
      )}
    </>
  );
};
