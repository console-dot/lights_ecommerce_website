import { useState } from "react";
import AddCardContext from "./AddCardContext";
import { benner } from "../../assets";
import { useNavigate } from "react-router-dom";
export const AddCardState = (props) => {
  const navigate = useNavigate();
  const [filterInput, setFilterInput] = useState('');
  const [search, setSearch]=useState()
  const productData = [
    {
      category: "light",
      image: benner,
      name: "light",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      category: "stool",
      image: benner,
      name: "stool",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      category: "tabel",
      image: benner,
      name: "tabel",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      category: "stool",
      image: benner,
      name: "stool",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      category: "tabel",
      image: benner,
      name: "tabel",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      category: "light",
      image: benner,
      name: "light",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      category: "stool",
      image: benner,
      name: "stool",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
    {
      category: "light",
      image: benner,
      name: "light",
      description:
        "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images",
      price: 3500,
    },
  ];
  
  const [cards, setCards] = useState();
  const [cartData, setCartData] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const addToCart = (obj) => {
    setCartData([...cartData, obj]);
  };

  const addQuantity = () => {
    setQuantity(parseInt(quantity) + 1);
  };
  const subtractQuantity = () => {
    setQuantity(quantity - 1);
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
    const filterData = productData.filter((item) =>
      item.category.includes(name)
    );
    setCards(filterData);
  };

  const handleSearch = (e) => {
    setFilterInput(e.target.value); 
    const searchData = productData.filter((item) =>
    item.name.toLowerCase().includes(filterInput.toLowerCase())
  );
  setSearch(searchData)
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
      }}
    >
      {props.children}
    </AddCardContext.Provider>
  );
};
