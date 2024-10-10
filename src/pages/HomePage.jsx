import React, { useContext, useEffect, useState } from "react";
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
import AddCardContext from "../context/addCart/AddCardContext";

export const HomePage = () => {
  const data = useContext(AddCardContext)
  useEffect(()=>{
    data.setActiveButton(" ")
  },[data.activeButton])
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
