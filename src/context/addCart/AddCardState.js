import { useState } from "react";
import AddCardContext from "./AddCardContext";
import { BennerImage1, glowPlate1, glowPlate2, glowPlate3, glowPlate4, glowPlate5, wallLight, wallLight1, wallLight1bg, wallLightbg } from "../../assets";
import { useNavigate } from "react-router-dom";
export const AddCardState = (props) => {
  const navigate = useNavigate();
  const [filterInput, setFilterInput] = useState("");
  const [search, setSearch] = useState();
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
      image: glowPlate2,
      title: "Black Festive",
      price: "$3,600",
      category:"IndoreLights"

    },
    {
      image: glowPlate3,
      title: "Black Festive",
      price: "$3,600",
      category:"IndoreLights"

    },
    {
      image: glowPlate4,
      title: "Black Festive",
      price: "$3,600",
      category:"IndoreLights"

    },
    {
      image: glowPlate5,
      title: "Black Festive",
      price: "$3,600",
      category:"IndoreLights"
    },
  ];

  const glowPlateData = [
    {
      image: wallLight,
      imageBackground:wallLightbg,
      title: "Black Festive",
      price: "$3,600",
      category:"WallLights"

    },
    {
      image: wallLight1,
      imageBackground:wallLight1bg,
      title: "Black Festive",
      price: "$3,600",
      category:"WallLights"

    },
    {
      image: glowPlate3,
      title: "Black Festive",
      price: "$3,600",
      category:"WallLights"

    },
    {
      image: glowPlate4,
      title: "Black Festive",
      price: "$3,600",
      category:"WallLights"

    },
    {
      image: glowPlate5,
      title: "Black Festive",
      price: "$3,600",
      category:"WallLights"
    },
  ];

  const nightLampData = [
    {
      image: glowPlate2,
      title: "Black Festive",
      price: "$3,600",
      category:"TableLamps"

    },
    {
      image: glowPlate3,
      title: "Black Festive",
      price: "$3,600",
      category:"TableLamps"

    },
    {
      image: glowPlate4,
      title: "Black Festive",
      category:"TableLamps",
      price: "$3,600",
    },
    {
      image: glowPlate5,
      title: "Black Festive",
      price: "$3,600",
      category:"TableLamps"

    },
  ];

  const spotlightData = [
    {
      image: glowPlate2,
      title: "Black Festive",
      price: "$3,600",
      category:"CommercialLights"

    },
    {
      image: glowPlate3,
      title: "Black Festive",
      price: "$3,600",
      category:"CommercialLights"

    },
    {
      image: glowPlate4,
      title: "Black Festive",
      price: "$3,600",
      category:"CommercialLights"

    },
    {
      image: glowPlate5,
      title: "Black Festive",
      price: "$3,600",
      category:"CommercialLights"

    },
  ];
  const restaurantlightData = [
    {
      image: glowPlate2,
      title: "Black Festive",
      price: "$3,600",
      category:"RestaurantLights"
    },
    {
      image: glowPlate3,
      title: "Black Festive",
      price: "$3,600",
      category:"RestaurantLights"

    },
    {
      image: glowPlate4,
      title: "Black Festive",
      price: "$3,600",
      category:"RestaurantLights"

    },
    {
      image: glowPlate5,
      title: "Black Festive",
      price: "$3,600",
      category:"RestaurantLights"

    },
  ];
  const multiplylightData = [
    {
      image: glowPlate2,
      title: "Black Festive",
      price: "$3,600",
      category:"MultiLights"
    },
    {
      image: glowPlate3,
      title: "Black Festive",
      price: "$3,600",
      category:"MultiLights"
    },
    {
      image: glowPlate4,
      title: "Black Festive",
      price: "$3,600",
      category:"MultiLights"
    },
    {
      image: glowPlate5,
      title: "Black Festive",
      price: "$3,600",
      category:"MultiLights"
    },
  ];

  const menuItems = [
    { name: "Indore  Lights", data: torchesData },
    { name: "Wall  Lights", data: glowPlateData },
    { name: "Table  Lamps", data: nightLampData },
    { name: "Commercial  Lights", data: spotlightData },
    { name: "Restaurant  Lights", data: restaurantlightData }, 
    { name: "Multi  Lights", data: multiplylightData }, 
  ];

  const [cards, setCards] = useState();
  const [cartData, setCartData] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const addToCart = (obj) => {
    setCartData([...cartData, obj]);
  };

  const addQuantity = () => {
    setQuantity(parseInt(quantity) + 1);
  };
  const subtractQuantity = () => {
    if(quantity> 1){
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
  };
  const cardButton = (name) => {
    navigate(`/product/${name}`);
    const filterData = menuItems.filter((item) =>
      item.name.split(" ").join("").includes(name)
    );
    setCards(filterData);
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
        menuItems
      }}
    >
      {props.children}
    </AddCardContext.Provider>
  );
};
