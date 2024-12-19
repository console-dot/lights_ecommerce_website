import React, { useContext, useEffect, useState } from "react";
import { Layout } from "../themes";
import { Order, Profile, SideComponent } from "../components";
import AddCardContext from "../context/addCart/AddCardContext";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export const ProfilePage = () => {
  const data = useContext(AddCardContext);
  const navigate = useNavigate();
  useEffect(() => {
    data.setActiveButton(" ");
  }, [data.activeButton]);

  return (
    <Layout>
      <div className="relative flex justify-center flex-col">
        <div className=" pl-5 md:pl-10 pt-2">
          <FaArrowLeft
            className=" text-amber-500 text-3xl cursor-pointer"
            onClick={() => navigate(`/`)}
          />
        </div>
        <div className="md:container h-auto px-2 md:px-10 pt-5 gap-5 flex md:flex-row flex-col">
          <div className="flex md:w-1/5 w-full   text-white">
            <SideComponent />
          </div>
          <div className="w-full  md:w-4/5 ">
            {data.selectedComponent === "profile" ? <Profile /> : ""}
            {data.selectedComponent === "order" ? <Order /> : ""}
          </div>
        </div>
      </div>
    </Layout>
  );
};
