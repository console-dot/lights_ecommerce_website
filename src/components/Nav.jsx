
import { useState } from "react";
import { FiAlignLeft } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { NavSideBar } from "./resuableComponents";
import { RxCross1 } from "react-icons/rx";
export const Nav = () => {
  const [accessoriesModal, setAccessoriesModal] = useState(false);
  const [funitureModal, setFunitureModal] = useState(false);
 const [sideBar,setSideBar]= useState(false)
  return (
    <div className="">
      <div
        className="px-8 w-full fixed z-50 grid py-3 gap-4 items-center bg-black opacity-70"
        style={{ gridTemplateColumns: "auto auto 0fr" }}
      >
        <h1 className="lg:hidden" onClick={()=>setSideBar(!sideBar)}>{sideBar ?<RxCross1  className="text-[#fa9105] text-xl "/> :<FiAlignLeft className="text-[#fa9105] text-xl "/>}</h1>
        <h1 className="text-[#fa9105]  font-semibold text-2xl lg:text-xl">MAKINSA</h1>
        <ul className="text-white hidden lg:flex items-center relative  ">
          <li className="p-3"> Home </li>
          <li
            className="p-3 flex items-center cursor-pointer hover:text-[#fa9105] "
            onMouseEnter={()=> setAccessoriesModal(true)}
            onMouseLeave={()=> setAccessoriesModal(false)}
          >
            <h1 className=""> Accessories</h1>
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
            onMouseEnter={()=> setFunitureModal(true)}
            onMouseLeave={()=> setFunitureModal(false)}
          >
            <h1 className="">Funiture</h1>
            <i className="text-2xl">
              <RiArrowDropDownLine />
            </i>{" "}
            {funitureModal && (
              <div
                className={`absolute left-0 top-12 grid grid-cols-3 z-50 w-3/4 rounded-lg bg-white p-4`}
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
          <li className="p-3 flex items-center">
            Tiles{" "}
            <i className="text-2xl">
              <RiArrowDropDownLine />
            </i>{" "}
          </li>
          <li className="p-3 flex items-center">
            {" "}
            Doors & Kitchen
            <i className="text-2xl">
              <RiArrowDropDownLine />
            </i>{" "}
          </li>
          <li className="p-3 flex items-center">
            {" "}
            Lights
            <i className="text-2xl">
              <RiArrowDropDownLine />
            </i>
          </li>
          <li className="p-3"> Blogs </li>
          <li className="p-3"> Contact </li>
        </ul>
        <h1 className="w-11 h-11 flex items-center justify-end">
          <IoSearchSharp className="text-[#fa9105] text-xl" />{" "}
        </h1>
      </div>
      {sideBar && <NavSideBar />}
    </div>
  );
};
