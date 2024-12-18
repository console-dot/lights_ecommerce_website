import { useEffect, useState } from "react";
import AddCardContext from "./AddCardContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createCarts, deleteCarts, getCarts } from "../../api/cart";
import { getProductCategory } from "../../api/productCategory";
export const AddCardState = (props) => {
  const [isCartModal, setIsCartModal] = useState(false);
  const categoryLocation = window.location;
  const categoryName = categoryLocation?.pathname?.split("/")[2];
  const navigate = useNavigate();
  const [checkProfile, setCheckProfile] = useState(false);
  const [filterInput, setFilterInput] = useState("");
  const [search, setSearch] = useState();
  const [cards, setCards] = useState();
  const [cartData, setCartData] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [activeButton, setActiveButton] = useState();
  const [addcartData, setAddCartData] = useState();
  const [productsData, setProductsData] = useState();
  const [signUpModal, setSignUpModal] = useState(false);
  const [productCategoryData, setProductCategoryData] = useState();
  const [isForgetModal, setIsFrogetModal] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState("");

  const handleComponentChange = (component) => {
    setSelectedComponent(component);
    navigate(`/userDetails/${component}`); // Navigate to the new route
  };

  const getCategoryCall = async () => {
    const res = await getProductCategory();
    setProductCategoryData(res?.data);
  };
  useEffect(() => {
    if (localStorage.getItem("user_Id")) {
      setIsModalOpen(false);
    }
  }, []);
  useEffect(() => {
    getCategoryCall();
  }, []);
  const getCartsCall = async (id) => {
    const res = await getCarts({ id });
    setCartData(res?.data?.products);
    if (res.status === 404) {
      localStorage.removeItem("cartId");
    }
  };
  useEffect(() => {
    setActiveButton(categoryName);
    if (categoryName) {
      const filterData = productsData?.filter((item) =>
        item?.categoryId?.name
          .split(" ")
          .join("")
          .toLowerCase()
          .includes(categoryName)
      );
      setCards(filterData);
    }
  }, [categoryName, productsData]);
  const createCartsCall = async () => {
    const token = localStorage.getItem("access_token");
    setQuantity(1);
    const res = await createCarts({ cartData: addcartData, token });
    if (res.error === 401) {
      toast("section are expire");
      localStorage.clear();
      navigate(`/`);
    }
    if (res.status === 200) {
      toast("add product in cart", { autoClose: 1000 });
      localStorage.setItem("cartId", res?.data?._id);
      const id = localStorage.getItem("cartId");
      if (id) {
        getCartsCall(id);
      }
    }
  };

  const addToCart = async (obj) => {
    console.log(obj);
    if (localStorage.getItem("user_Id")?.length > 0) {
      setAddCartData((prevData) => ({
        ...prevData,
        userId: localStorage.getItem("user_Id"),
        cartId: localStorage.getItem("cartId"),
        product: { ["productId"]: obj?._id, ["quantity"]: quantity },
      }));
      // setCartData([...cartData, obj]);
    } else {
      setIsModalOpen(true);
    }
  };

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };
  const subtractQuantity = () => {
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
    formData["cartId"] = localStorage.getItem("cartId");
    formData["productId"] = id;
    const token = localStorage.getItem("access_token");
    const res = await deleteCarts({ cartData: formData, token });
    if (res.error === 401) {
      toast("section are expire");
      localStorage.clear();
      navigate(`/`);
    }
    if (res.status === 200) {
      const cartUserId = localStorage.getItem("cartId");
      getCartsCall(cartUserId);
      toast(" delete cart item");
    }
  };

  useEffect(() => {
    const cartUserId = localStorage.getItem("cartId");
    if (cartUserId?.length > 0) {
      getCartsCall(cartUserId);
    }
  }, [checkProfile]);

  const cardButton = (name, id) => {
    setActiveButton(name);
    navigate(`/product/${name?.split(" ").join("").toLowerCase()}`);
    if (name) {
      const filterData = productsData?.filter((item) =>
        item?.categoryId?._id.includes(id)
      );
      setCards(filterData);
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
        productCategoryData,
        setProductCategoryData,
        setProductsData,
        cartData,
        setCartData,
        quantity,
        setQuantity,
        onChange,
        deleteCartFun,
        cardButton,
        setIsCartModal,
        isCartModal,
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
        setSignUpModal,
        signUpModal,
        getCartsCall,
        setSelectedComponent,
        selectedComponent,
        handleComponentChange,
        isForgetModal,
        setIsFrogetModal,
      }}
    >
      {props.children}
    </AddCardContext.Provider>
  );
};
