import { useEffect, useState } from "react";
import AddCardContext from "./AddCardContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getProduct } from "../../api/products";
import { createCarts } from "../../api/cart";
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
  const [addcartData, setAddCartData] = useState();

  const [productsData, setProductsData] = useState();

  const getProductCall = async () => {
    const res = await getProduct();
    setProductsData(res?.data);
  };
  useEffect(() => {
    getProductCall();
  }, []);

  const createCartsCall = async () => {
    const token = localStorage.getItem("access_token");
    console.log(addcartData);
    setQuantity(1);
    const res = await createCarts({ cartData: addcartData, token });
    console.log(res);
  };

  const addToCart = async (obj) => {
    if (checkProfile) {
      setAddCartData((prevData) => ({
        ...prevData,
        userId: localStorage.getItem("user_Id"),
        product: { ["productId"]: obj?._id, ["quantity"]: quantity },
      }));
      console.log(obj);
      setCartData([...cartData, obj]);
      toast("add product in cart");
    } else {
      setIsModalOpen(true);
    }
  };
  useEffect(() => {
    console.log(addcartData);
    if (addcartData) {
      createCartsCall();
    }
  }, [addcartData]);

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
  const cardButton = (name, id) => {
    setActiveButton(name);
    navigate(`/product/${name.split(" ").join("")}`);
    if (name) {
      console.log("menu", productsData);
      console.log(name);
      const filterData = productsData?.filter((item) =>
        item?.categoryId?._id.includes(id)
      );
      setCards(filterData);
      console.log(filterData);
    }
  };

  const handleSearch = (e) => {
    setFilterInput(e.target.value);
    const searchData = productsData.filter((item) =>
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
        isModalOpen,
        setIsModalOpen,
        setCheckProfile,
        checkProfile,
        activeButton,
        setActiveButton,
        productsData,
      }}
    >
      {props.children}
    </AddCardContext.Provider>
  );
};
