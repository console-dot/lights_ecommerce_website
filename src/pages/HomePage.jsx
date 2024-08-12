import React, { useState } from "react";
import { Layout } from "../themes";
import {
  Banner,
  CategoryCard,
  DiscountOffer,
  FutureProducts,
  NewArrivals,
  OurBenefits,
  SignUpNewsLetter,
  Testimonials,
} from "../components";

export const HomePage = () => {
  return (
    <Layout>
      <Banner />
      <FutureProducts />
      <OurBenefits />
      <NewArrivals />
      <DiscountOffer />
      <Testimonials />
      <CategoryCard />
      <SignUpNewsLetter/>
    </Layout>
  );
};
