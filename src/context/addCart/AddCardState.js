import { useEffect, useState } from "react";
import AddCardContext from "./AddCardContext";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getProduct } from "../../api/products";
import { createCarts, deleteCarts, getCarts } from "../../api/cart";
export const AddCardState = (props) => {
  const paramas = window.location
 const name= paramas?.pathname?.split("/")[2]
  console.log(name)
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

  const getCartsCall = async (id) => {
    const token = localStorage.getItem("access_token");
    const res = await getCarts({ id });
    setCartData(res?.data?.products);
  };

  const createCartsCall = async () => {
    const token = localStorage.getItem("access_token");
    setQuantity(1);
    const res = await createCarts({ cartData: addcartData, token });
    if (res?.data?.userId) {
      getCartsCall(res?.data?.userId);
    }
  };

  const addToCart = async (obj) => {
    if (localStorage.getItem("user_Id").length > 0) {
      setAddCartData((prevData) => ({
        ...prevData,
        userId: localStorage.getItem("user_Id"),
        product: { ["productId"]: obj?._id, ["quantity"]: quantity },
      }));
      // setCartData([...cartData, obj]);
      toast("add product in cart");
    } else {
      setIsModalOpen(true);
    }
  };

  const addQuantity = () => {
    console.log(1);
    setQuantity(quantity + 1);
  };
  const subtractQuantity = () => {
    console.log(1);
    setQuantity(quantity - 1);
  };

  useEffect(() => {
    if (addcartData) {
      createCartsCall();
    }
  }, [addcartData]);

  const onChange = (e) => {
    setQuantity(e.target.value);
  };

  const deleteCartFun = async (id) => {
    let formData = {};
    const obj = cartData.find((item) => item.productId._id === id);
    formData["userId"] = localStorage.getItem("user_Id");
    formData["productId"] = id;
    const token = localStorage.getItem("access_token");
    const res = await deleteCarts({ cartData: formData, token });
    console.log(res);
    if (res.status === 200) {
      const cartUserId = localStorage.getItem("user_Id");
      getCartsCall(cartUserId);
      toast(" delete cart item");
    }
  };

  useEffect(() => {
    const cartUserId = localStorage.getItem("user_Id");
    if (cartUserId.length > 0) {
      getCartsCall(cartUserId);
    }
  }, []);

  const cardButton = (name, id) => {
    localStorage.setItem("categoryId",id)
    localStorage.setItem("name",name)
    setActiveButton(name);
    navigate(`/product/${name?.split(" ").join("")}`);
    if (name) {
      const filterData = productsData?.filter((item) =>
        item?.categoryId?._id.includes(id)
      );
      setCards(filterData);
    }
  };
  useEffect(()=>{


  },[])


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
        setCartData,
        quantity,
        setQuantity,
        onChange,
        deleteCartFun,
        cardButton,
        addQuantity,
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
        subtractQuantity,
      }}
    >
      {props.children}
    </AddCardContext.Provider>
  );
};
