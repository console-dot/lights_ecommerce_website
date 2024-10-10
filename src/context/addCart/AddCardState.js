import { useEffect, useState } from "react";
import AddCardContext from "./AddCardContext";
import {
  BennerImage1,
  commercialLight,
  commercialLightbg,
  glowPlate2,
  glowPlate3,
  glowPlate4,
  glowPlate5,
  indoorLight,
  indoorLightbg,
  multiLight,
  multiLightbg,
  restaurantLight,
  restaurantLight1,
  restaurantLight1bg,
  restaurantLightbg,
  table,
  table1,
  table1bg,
  table2,
  table2bg,
  table3,
  table3bg,
  table4,
  table4bg,
  table5,
  table5bg,
  table6,
  table6bg,
  tablebg,
  wallLight,
  wallLight1,
  wallLight1bg,
  wallLightbg,
} from "../../assets";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const AddCardState = (props) => {
  const navigate = useNavigate();
  const [checkProfile, setCheckProfile] = useState();
  const [filterInput, setFilterInput] = useState("");
  const [search, setSearch] = useState();
  const [cards, setCards] = useState();
  const [cartData, setCartData] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [activeButton, setActiveButton] = useState();

  const productData = [
    {
      category: "light",
      image: BennerImage1,
      name: "light",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      category: "stool",
      image: BennerImage1,
      name: "stool",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      category: "tabel",
      image: BennerImage1,
      name: "tabel",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      category: "stool",
      image: BennerImage1,
      name: "stool",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      category: "tabel",
      image: BennerImage1,
      name: "tabel",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      category: "light",
      image: BennerImage1,
      name: "light",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      category: "stool",
      image: BennerImage1,
      name: "stool",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      category: "light",
      image: BennerImage1,
      name: "light",
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
      productName: "IndoreLights",
    },
    {
      image: glowPlate3,
      title: "Black Festive",
      price: "$3,600",
      category: "IndoreLights",
      productName: "IndoreLights",
    },
    {
      image: glowPlate4,
      title: "Black Festive",
      price: "$3,600",
      category: "IndoreLights",
      productName: "IndoreLights",
    },
    {
      image: glowPlate5,
      title: "Black Festive",
      price: "$3,600",
      category: "IndoreLights",
      productName: "IndoreLights",
    },
  ];

  const wallLights = [
    {
      image: wallLight,
      imageBackground: wallLightbg,
      title: "Black Festive",
      price: "$3,600",
      category: "WallLights",
      productName: "WallLights",
    },
    {
      image: wallLight1,
      imageBackground: wallLight1bg,
      title: "Black Festive",
      price: "$3,600",
      category: "WallLights",
      productName: "WallLights",
    },
    {
      image: glowPlate3,
      title: "Black Festive",
      price: "$3,600",
      category: "WallLights",
      productName: "WallLights",
    },
    {
      image: glowPlate4,
      title: "Black Festive",
      price: "$3,600",
      category: "WallLights",
      productName: "WallLights",
    },
    {
      image: glowPlate5,
      title: "Black Festive",
      price: "$3,600",
      category: "WallLights",
      productName: "WallLights",
    },
  ];

  const tableLampLights = [
    {
      image: table,
      imageBackground: tablebg,
      title: "Black Festive",
      price: "$3,600",
      category: "TableLamps",
      productName: "TableLamps",
    },
    {
      image: table1,
      imageBackground: table1bg,
      title: "Black Festive",
      price: "$3,600",
      category: "TableLamps",
      productName: "TableLamps",
    },
    {
      image: table2,
      imageBackground: table2bg,
      title: "Black Festive",
      price: "$3,600",
      category: "TableLamps",
      productName: "TableLamps",
    },
    {
      image: table3,
      imageBackground: table3bg,
      title: "Black Festive",
      price: "$3,600",
      category: "TableLamps",
      productName: "TableLamps",
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
      productName: "TableLamps",
    },
    {
      image: table6,
      imageBackground: table6bg,
      title: "Black Festive",
      price: "$3,600",
      category: "TableLamps",
      productName: "TableLamps",
    },
  ];

  const commercialLights = [
    {
      image: commercialLight,
      imageBackground: commercialLightbg,
      title: "Black Festive",
      price: "$3,600",
      category: "CommercialLights",
      productName: "CommercialLights",
    },
    {
      image: glowPlate3,
      title: "Black Festive",
      price: "$3,600",
      category: "CommercialLights",
      productName: "CommercialLights",
    },
    {
      image: glowPlate4,
      title: "Black Festive",
      price: "$3,600",
      category: "CommercialLights",
      productName: "CommercialLights",
    },
    {
      image: glowPlate5,
      title: "Black Festive",
      price: "$3,600",
      category: "CommercialLights",
      productName: "CommercialLights",
    },
  ];
  const restaurantlightData = [
    {
      image: restaurantLight,
      imageBackground: restaurantLightbg,
      title: "Black Festive",
      price: "$3,600",
      category: "RestaurantLights",
      productName: "RestaurantLights",
    },
    {
      image: restaurantLight1,
      imageBackground: restaurantLight1bg,
      title: "Black Festive",
      price: "$3,600",
      category: "RestaurantLights",
      productName: "RestaurantLights",
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
      productName: "RestaurantLights",
    },
    {
      image: glowPlate5,
      title: "Black Festive",
      price: "$3,600",
      category: "RestaurantLights",
      productName: "RestaurantLights",
    },
  ];
  const multiplylightData = [
    {
      image: multiLight,
      imageBackground: multiLightbg,
      title: "Black Festive",
      price: "$3,600",
      category: "MultiLights",
      productName: "MultiLights",
    },
    {
      image: glowPlate2,
      title: "Black Festive",
      price: "$3,600",
      category: "MultiLights",
      productName: "MultiLights",
    },
    {
      image: glowPlate3,
      title: "Black Festive",
      price: "$3,600",
      category: "MultiLights",
      productName: "MultiLights",
    },
    {
      image: glowPlate4,
      title: "Black Festive",
      price: "$3,600",
      category: "MultiLights",
      productName: "MultiLights",
    },
    {
      image: glowPlate5,
      title: "Black Festive",
      price: "$3,600",
      category: "MultiLights",
      productName: "MultiLights",
    },
  ];

  const menuItems = [
    { name: "Indore  Lights", data: torchesData },
    { name: "Wall  Lights", data: wallLights },
    { name: "Table  Lamps", data: tableLampLights },
    { name: "Commercial  Lights", data: commercialLights },
    { name: "Restaurant  Lights", data: restaurantlightData },
    { name: "Multi  Lights", data: multiplylightData },
  ];

  const addToCart = (obj) => {
    if (checkProfile) {
      setCartData([...cartData, obj]);
      toast("add product in cart");
    } else {
      setIsModalOpen(true);
    }
  };

  const addQuantity = () => {
    setQuantity(parseInt(quantity) + 1);
  };
  const subtractQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const onChange = (e) => {
    setQuantity(e.target.value);
  };

  const deleteProduct = (index) => {
    const updateCart = [...cartData];
    console.log(index);
    updateCart.splice(index, 1);
    setCartData(updateCart);
    toast("delete product in cart");
  };
  const cardButton = (name) => {
    navigate(`/product/${name.split(" ").join("")}`);
    if (name) {
      setActiveButton(name);
      const filterData = menuItems.filter((item) =>
        item.name.split(" ").join("").includes(name.split(" ").join(""))
      );
      setCards(filterData);
    }
  };

  const handleSearch = (e) => {
    setFilterInput(e.target.value);
    const searchData = productData.filter((item) =>
      item.name.toLowerCase().includes(filterInput.toLowerCase())
    );
    setSearch(searchData);
  };

  return (
    <AddCardContext.Provider
      value={{
        addToCart,
        cartData,
        quantity,
        addQuantity,
        setQuantity,
        subtractQuantity,
        onChange,
        deleteProduct,
        cardButton,
        cards,
        handleSearch,
        search,
        filterInput,
        productData,
        menuItems,
        isModalOpen,
        setIsModalOpen,
        setCheckProfile,
        checkProfile,
        activeButton,
        setActiveButton,
      }}
    >
      {props.children}
    </AddCardContext.Provider>
  );
};
