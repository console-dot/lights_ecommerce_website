import React from "react";
import { Layout } from "../themes";
import {
  AboutUsHeading,
  GellaryAboutUs,
  ProductCardBanner,
} from "../components";

export const AboutUsPage = () => {
  return (
    <Layout>
      <ProductCardBanner />
      <AboutUsHeading />
      <GellaryAboutUs />
    </Layout>
  );
};
