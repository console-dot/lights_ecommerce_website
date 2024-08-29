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
  LuxuryStylist,
  NewArrivals,
  OurBenefits,
  SignUpNewsLetter,
  Testimonials,
} from "../components";

export const HomePage = () => {
  return (
    <Layout>
      <Banner />
      <LuxuryStylist/>
      <OurBenefits />
      <DecorateLight/>
      <CategoryCard />
      <LightsHouse />
      <Blogs/>
      <DiscountOffer />
      <Testimonials />
      <SignUpNewsLetter />
      <Gellary/>
      <FutureProducts />
      <NewArrivals />
      <Login/>
    </Layout>
  );
};
