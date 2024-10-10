import React, { useContext, useEffect, useState } from "react";
import { Layout } from "../themes";
import {
  AboutThisItem,
  BreadCrumbsDetailPage,
  Login,
  ProductDetails,
  RelatedProduct,
  RightSide,
} from "../components";
import {
  BennerImage1,
  BennerImage11,
  commercialLight,
  commercialLightbg,
  indoorLight,
  indoorLightbg,
  light1,
  light1Bg,
  light2,
  light2Bg,
  multiLight,
  multiLightbg,
  restaurantLight,
  restaurantLight1,
  restaurantLight1bg,
  restaurantLightbg,
  table,
  wallLight,
  wallLight1,
  wallLight1bg,
  wallLightbg,
  table1,
  table1bg,
  table2,
  table2bg,
  table3,
  table3bg,
  tablebg,
  glowPlate3,
  glowPlate4,
  glowPlate5,
  table4,
  table4bg,
  table5,
  table5bg,
  table6,
  table6bg,
  glowPlate2,
  
} from "../assets";
import { useParams } from "react-router-dom";
import AddCardContext from "../context/addCart/AddCardContext";
export const ProductDetailsPage = () => {
  const setButton = useContext(AddCardContext);
  useEffect(() => {
    setButton.setActiveButton(" ");
  }, [setButton.activeButton]);
  const productData = [
    {
      image: commercialLight,
      imageBackground: commercialLightbg,
      title: "Black Festive",
      price: "$3,600",
      category: "TableLights",
    },
    {
      image: indoorLight,
      imageBackground: indoorLightbg,
      title: "Glimmering ",
      price: "$3,600",
      category: "IndoreLights",
    },
    {
      image: wallLight,
      imageBackground: wallLightbg,
      title: "Wall Mount Light",
      price: "$3,600",
      category: "IndoreLights",
    },
    {
      image: wallLight1,
      imageBackground: wallLight1bg,
      title: "Wire Design ",
      price: "$3,600",
      category: "IndoreLights",
    },
    {
      image: multiLight,
      imageBackground: multiLightbg,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: restaurantLight,
      imageBackground: restaurantLightbg,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: restaurantLight1,
      imageBackground: restaurantLight1bg,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
  ];

  const newArrivalsData = [
    {
      image: table,
      imageBackground: tablebg,
      title: "Glimmering ",
      price: "$3,600",
      category: "IndoreLights",
    },
    {
      image: wallLight,
      imageBackground: wallLightbg,
      title: "Wall Mount Light",
      price: "$3,600",
      category: "IndoreLights",
    },
    {
      image: wallLight1,
      imageBackground: wallLight1bg,
      title: "Wire Design ",
      price: "$3,600",
      category: "IndoreLights",
    },
    {
      image: table1,
      imageBackground: table1bg,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: multiLight,
      imageBackground: multiLightbg,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: restaurantLight,
      imageBackground: restaurantLightbg,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: restaurantLight1,
      imageBackground: restaurantLight1bg,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: table2,
      imageBackground: table2bg,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      image: table3,
      imageBackground: table3bg,
      name: "wood",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
  ];
  
  const torchesData = [
    {
      image: indoorLight,
      imageBackground: indoorLightbg,
      title: "Glimmering Gems Crystal Prism Chandelier",
      price: "$3,600",
      category: "IndoreLights",
    },
    {
      image: glowPlate3,
      title: "Black Festive",
      price: "$3,600",
      category: "IndoreLights",
    },
    {
      image: glowPlate4,
      title: "Black Festive",
      price: "$3,600",
      category: "IndoreLights",
    },
    {
      image: glowPlate5,
      title: "Black Festive",
      price: "$3,600",
      category: "IndoreLights",
    },
  ];

  const wallLights = [
    {
      image: wallLight,
      imageBackground: wallLightbg,
      title: "Black Festive",
      price: "$3,600",
      category: "WallLights",
    },
    {
      image: wallLight1,
      imageBackground: wallLight1bg,
      title: "Black Festive",
      price: "$3,600",
      category: "WallLights",
    },
    {
      image: glowPlate3,
      title: "Black Festive",
      price: "$3,600",
      category: "WallLights",
    },
    {
      image: glowPlate4,
      title: "Black Festive",
      price: "$3,600",
      category: "WallLights",
    },
    {
      image: glowPlate5,
      title: "Black Festive",
      price: "$3,600",
      category: "WallLights",
    },
  ];

  const tableLampLights = [
    {
      image: table,
      imageBackground: tablebg,
      title: "Black Festive",
      price: "$3,600",
      category: "TableLamps",
    },
    {
      image: table1,
      imageBackground: table1bg,
      title: "Black Festive",
      price: "$3,600",
      category: "TableLamps",
    },
    {
      image: table2,
      imageBackground: table2bg,
      title: "Black Festive",
      price: "$3,600",
      category: "TableLamps",
    },
    {
      image: table3,
      imageBackground: table3bg,
      title: "Black Festive",
      price: "$3,600",
      category: "TableLamps",
    },
    {
      image: table4,
      imageBackground: table4bg,
      title: "Black Festive",
      price: "$3,600",
      category: "TableLamps",
    },
    {
      image: table5,
      imageBackground: table5bg,
      title: "Black Festive",
      price: "$3,600",
      category: "TableLamps",
    },
    {
      image: table6,
      imageBackground: table6bg,
      title: "Black Festive",
      price: "$3,600",
      category: "TableLamps",
    },
  ];

  const commercialLights = [
    {
      image: commercialLight,
      imageBackground: commercialLightbg,
      title: "Black Festive",
      price: "$3,600",
      category: "CommercialLights",
    },
    {
      image: glowPlate3,
      title: "Black Festive",
      price: "$3,600",
      category: "CommercialLights",
    },
    {
      image: glowPlate4,
      title: "Black Festive",
      price: "$3,600",
      category: "CommercialLights",
    },
    {
      image: glowPlate5,
      title: "Black Festive",
      price: "$3,600",
      category: "CommercialLights",
    },
  ];
  const restaurantlightData = [
    {
      image: restaurantLight,
      imageBackground: restaurantLightbg,
      title: "Black Festive",
      price: "$3,600",
      category: "RestaurantLights",
    },
    {
      image: restaurantLight1,
      imageBackground: restaurantLight1bg,
      title: "Black Festive",
      price: "$3,600",
      category: "RestaurantLights",
    },
    {
      image: glowPlate3,
      title: "Black Festive",
      price: "$3,600",
      category: "RestaurantLights",
    },
    {
      image: glowPlate4,
      title: "Black Festive",
      price: "$3,600",
      category: "RestaurantLights",
    },
    {
      image: glowPlate5,
      title: "Black Festive",
      price: "$3,600",
      category: "RestaurantLights",
    },
  ];
  const multiplylightData = [
    {
      image: multiLight,
      imageBackground: multiLightbg,
      title: "Black Festive",
      price: "$3,600",
      category: "MultiLights",
    },
    {
      image: glowPlate2,
      title: "Black Festive",
      price: "$3,600",
      category: "MultiLights",
    },
    {
      image: glowPlate3,
      title: "Black Festive",
      price: "$3,600",
      category: "MultiLights",
    },
    {
      image: glowPlate4,
      title: "Black Festive",
      price: "$3,600",
      category: "MultiLights",
    },
    {
      image: glowPlate5,
      title: "Black Festive",
      price: "$3,600",
      category: "MultiLights",
    },
  ]
  const allData = [
    { name: "future", data: productData },
    { name: "new", data: newArrivalsData },
    { name: "IndoreLights", data: torchesData },
    { name: "WallLights", data: wallLights },
    { name: "TableLamps", data: tableLampLights },
    { name: "CommercialLights", data: commercialLights },
    { name: "RestaurantLights", data: restaurantlightData },
    { name: "MultiLights", data: multiplylightData },
  ];
  const params = useParams();
  const index = params?.id;
  const paramsName = params?.name;
  console.log(paramsName, allData);

  const res = allData.filter((i) => (i.name === paramsName ? i.data : ""));
  console.log("res", res);

  const [data, setData] = useState(res[0]?.data[index]);
  console.log(data);
  return (
    <Layout>
      <BreadCrumbsDetailPage data={data} />
      <div className="flex justify-center items-center pt-[20px] ">
        <div
          className="flex flex-col md:flex-row container"
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <div className="w-full md:w-[50%] lg:w-[40%] ">
            <ProductDetails data={data} />
          </div>
          <div className="w-full md:w-[50%] lg:w-[60%]">
            <RightSide data={data} />
          </div>
        </div>
      </div>
      <AboutThisItem data={data} />
      <RelatedProduct productData={productData} />
      <Login />
    </Layout>
  );
};
