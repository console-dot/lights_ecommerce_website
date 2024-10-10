import React from "react";
import { Footer,Nav, } from "../components";

export const Layout = ({ children }) => {
  return (
    <div>
      <Nav/>
      <div className= "pt-[80px] ">{ children }</div>
      <Footer />
    </div>
  );
};
