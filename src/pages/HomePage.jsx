import React, { useState } from "react";
import { Layout } from "../themes";
import {
  Banner, DiscountOffer,
  FutureProducts,
  NewArrivals,
  OurBenefits,
  Testimonials,
} from "../components";

export const HomePage = () => {
  return (
    <Layout>
      <Banner  />
      <FutureProducts />
      <OurBenefits />
      <NewArrivals />
      <DiscountOffer/>
      <Testimonials />
    </Layout>
  );
};
