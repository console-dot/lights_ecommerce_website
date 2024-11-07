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
            onClick={() =>navigate(`/`)}
          />
        </div>
        <div
          className="container h-screen px-2 md:px-10 pt-5 gap-5"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
          }}
        >
          <div className="md:flex w-1/5 hidden  text-white">
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
