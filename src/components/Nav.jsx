import { useContext, useState } from "react";
import { FiAlignLeft } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CartModal, NavSideBar } from "./resuableComponents";
import { RxCross1 } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";
import AddCardContext from "../context/addCart/AddCardContext";
import { useNavigate } from "react-router-dom";

export const Nav = () => {
  const navigate = useNavigate();
  const [cartModal, setCartModal] = useState();
  const [accessoriesModal, setAccessoriesModal] = useState(false);
  const [funitureModal, setFunitureModal] = useState(false);
  const [lightModal, setLightModal] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [search, setSearch] = useState(false);

  const cart = useContext(AddCardContext);

  return (
    <div className="">
      <div
        className="px-8 w-full fixed z-50 grid py-3 gap-4 items-center"
        style={{ gridTemplateColumns: "auto auto 0fr" }}
      >
        <div className="fixed w-full min-h-[72px]  bg-black opacity-80"></div>
        <h1 className="lg:hidden z-50" onClick={() => setSideBar(!sideBar)}>
          {sideBar ? (
            <RxCross1 className="text-[#fa9105] text-xl " />
          ) : (
            <FiAlignLeft className="text-[#fa9105] text-xl " />
          )}
        </h1>
        <h1
          className="text-[#fa9105] z-50  font-semibold text-2xl lg:text-xl glow-text"
          onClick={() => navigate(`/home`)}
        >
          MAKINSA
        </h1>
        <ul className="text-white hidden lg:flex items-center relative   ">
          <li
            className="p-3 hover:text-[#fa9105] cursor-pointer lg:text-[12px] xl:text-base"
            onClick={() => navigate(`/home`)}
          >
            {" "}
            Home{" "}
          </li>
          <li
            className="p-3 flex items-center cursor-pointer hover:text-[#fa9105] "
            onMouseEnter={() => setAccessoriesModal(true)}
            onMouseLeave={() => setAccessoriesModal(false)}
          >
            <h1 className="lg:text-[12px] xl:text-base"> Accessories</h1>
            <i className="text-2xl ">
              <RiArrowDropDownLine />
            </i>{" "}
            {accessoriesModal && (
              <div
                className={`absolute left-16 top-12 grid grid-cols-3 z-50 w-1/2 rounded-lg bg-white p-4`}
              >
                <div className="">
                  <h1 className="text-black font-bold">Kitchen</h1>
                  <ul className="text-black">
                    <li className=" hover:text-[#fa9105]">Stool</li>
                    <li className=" hover:text-[#fa9105]">Tables</li>
                    <li className=" hover:text-[#fa9105]">Rocks</li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-black font-bold">Kitchen</h1>
                  <ul className="text-black">
                    <li className=" hover:text-[#fa9105]">Stool</li>
                    <li className=" hover:text-[#fa9105]">Tables</li>
                    <li className=" hover:text-[#fa9105]">Rocks</li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-black font-bold">Kitchen</h1>
                  <ul className="text-black">
                    <li className=" hover:text-[#fa9105]">Stool</li>
                    <li className=" hover:text-[#fa9105]">Tables</li>
                    <li className=" hover:text-[#fa9105]">Rocks</li>
                  </ul>
                </div>
              </div>
            )}
          </li>
          <li
            className="p-3 flex items-center cursor-pointer hover:text-[#fa9105] "
            onMouseEnter={() => setFunitureModal(true)}
            onMouseLeave={() => setFunitureModal(false)}
          >
            <h1 className="lg:text-[12px] xl:text-base">Funiture</h1>
            <i className="text-2xl">
              <RiArrowDropDownLine />
            </i>{" "}
            {funitureModal && (
              <div
                className={`absolute left-0 top-12 grid grid-cols-3 z-50 w-3/4 rounded-lg bg-white p-4`}
              >
                <div className="opacity-100">
                  <h1 className="text-black font-bold">Kitchen</h1>
                  <ul className="text-black">
                    <li className=" hover:text-[#fa9105]">Stool</li>
                    <li className=" hover:text-[#fa9105]">Tables</li>
                    <li className=" hover:text-[#fa9105]">Rocks</li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-black font-bold">Kitchen</h1>
                  <ul className="text-black">
                    <li className=" hover:text-[#fa9105]">Stool</li>
                    <li className=" hover:text-[#fa9105]">Tables</li>
                    <li className=" hover:text-[#fa9105]">Rocks</li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-black font-bold">Kitchen</h1>
                  <ul className="text-black">
                    <li className=" hover:text-[#fa9105]">Stool</li>
                    <li className=" hover:text-[#fa9105]">Tables</li>
                    <li className=" hover:text-[#fa9105]">Rocks</li>
                  </ul>
                </div>
              </div>
            )}
          </li>
          <li className="p-3 flex items-center lg:text-[12px] xl:text-base">
            Tiles{" "}
            <i className="text-2xl">
              <RiArrowDropDownLine />
            </i>{" "}
          </li>
          <li className="p-3 flex items-center lg:text-[12px] xl:text-base">
            {" "}
            Doors & Kitchen
            <i className="text-2xl">
              <RiArrowDropDownLine />
            </i>{" "}
          </li>
          <li
            className="p-3 flex items-center relative "
            onMouseEnter={() => setLightModal(true)}
            onMouseLeave={() => setLightModal(false)}
          >
            {" "}
            <h1
              className=" cursor-pointer lg:text-[12px] xl:text-base"
              onClick={() => cart.cardButton("light")}
            >
              Lights{" "}
            </h1>
            <i className="text-2xl">
              <RiArrowDropDownLine />
            </i>
            {lightModal && (
              <div
                className={`absolute top-10 z-50  rounded-lg opacity-100 bg-white p-4`}
              >
                <div className="">
                  <h1 className="text-black font-bold  ">Lights</h1>
                  <ul className="text-black ">
                    <li
                      className=" hover:text-[#fa9105] cursor-pointer"
                      onClick={() => cart.cardButton("stool")}
                    >
                      Stool
                    </li>
                    <li
                      className=" hover:text-[#fa9105]"
                      onClick={() => cart.cardButton("tabel")}
                    >
                      Tables
                    </li>
                    <li className=" hover:text-[#fa9105]">Rocks</li>
                  </ul>
                </div>
              </div>
            )}
          </li>
          <li className="p-3 lg:text-[12px] xl:text-base"> AboutUS </li>
          <li className="p-3 lg:text-[12px] xl:text-base"> Contact </li>
        </ul>
        <div className="flex justify-center items-center">
          <div
            className="relative h-full"
            onClick={() => {
              setCartModal(!cartModal);
            }}
          >
            {" "}
            <FaShoppingCart className="w-11 text-[#fa9105] h-7 cursor-pointer" />
            <div className="absolute w-5 h-5 top-0 right-0 bg-slate-50 text-xs  z-20 rounded-full flex justify-center items-center">
              {
                <div className=" inline font-semibold">
                  {cart?.cartData?.length}
                </div>
              }
            </div>
          </div>
          <h1
            className="w-11 h-11 flex items-center justify-end z-50"
            onClick={() => setSearch(!search)}
          >
            <IoSearchSharp className="text-[#fa9105] md:text-xl" />{" "}
          </h1>
        </div>
        {search && (
          <div className="absolute z-50 w-full h-full flex items- justify-end right-14">
            <div className="flex justify-center items-center w-[50%] md:w-[25%] relative">
              <input
                value={cart?.filterInput}
                type="text"
                className="w-full rounded-lg border-[#fa9105] border-2"
                onChange={(e) => cart.handleSearch(e)}
              />
              <>
                {cart?.search?.map((i) => (
                  <div className={`absolute z-50 w-full h-full top-20 bg-white rounded-lg p-2 ${cart?.filterInput?"flex":"hidden"}`}>
                    {<h1 className="bg-black p-1  rounded-lg text-white">{i?.name}</h1>}
                  </div>
                ))}
              </>
            </div>
          </div>
        )}
        {cartModal && <CartModal />}
      </div>
      {sideBar && <NavSideBar />}
    </div>
  );
};
