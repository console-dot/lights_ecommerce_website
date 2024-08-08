import React, { useState } from "react";
import { Layout } from "../themes";
import {
  Banner,
  FutureProducts,
  NewArrivals,
  OurBenefits,
  Testimonials,
} from "../components";

export const HomePage = () => {
  return (
    <Layout>
      <Banner />
      {/* <FutureProducts /> */}
      <OurBenefits />
      <NewArrivals />
      <Testimonials />
    </Layout>
  );
};
