import React from "react";
import { Footer,Nav, } from "../components";

export const Layout = ({ children }) => {
  return (
    <div>
      <Nav/>
      <div className="pt-[128px]" style={{height:'calc(100vh-nav)'}}>{ children }</div>
      {/* <Footer /> */}
    </div>
  );
};
