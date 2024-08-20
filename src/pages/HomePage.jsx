import React, { useState } from "react";
import { Layout } from "../themes";
import {
  Banner,
  Blogs,
  CategoryCard,
  DecorateLight,
  DiscountOffer,
  FutureProducts,
  Gellary,
  LightsHouse,
  Login,
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
      <LightsHouse />
      <DecorateLight/>
      <DiscountOffer />
      <Testimonials />
      <Gellary/>
      <CategoryCard />
      <Blogs/>
      <SignUpNewsLetter />
      <Login/>
    </Layout>
  );
};
