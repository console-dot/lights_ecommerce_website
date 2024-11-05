import React from "react";
import { Layout } from "../themes";
import { AllCategroy, Login, SignUp, } from "../components";

export const AllProductCategory = () => {
  return (
    <Layout>
      <AllCategroy/>
      <Login/>
      <SignUp/>
    </Layout>
  );
};
