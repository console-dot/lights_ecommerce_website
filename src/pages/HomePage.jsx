import React, { useState } from "react";
import { Layout } from "../themes";
import {
  Banner,
  Blogs,
  CategoryCard,
  DecorateLight,
  DiscountOffer,
  FutureProducts,
  LightsHouse,
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
      <LightsHouse />
      <DecorateLight/>
      <NewArrivals />
      <DiscountOffer />
      <Testimonials />
      <CategoryCard />
      <Blogs/>
      <SignUpNewsLetter />
    </Layout>
  );
};
