import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import {
  AboutUsPage,
  AllProductCardsPage,
  AllProductCategory,
  CheckOutPage,
  HomePage,
  ProductDetailsPage,
  ProfilePage,
} from "./pages";
import { AddCardState } from "./context";
import { ScrollTop } from "./components";
import { useContext, useEffect } from "react";
import AddCardContext from "./context/addCart/AddCardContext";
import { getProduct } from "./api/products";
import { refreshToken } from "./api/user";
import { ResetPasswordPage } from "./pages/ResetPasswordPage";
function App() {
  const cart = useContext(AddCardContext);
  const getProductCall = async () => {
    const res = await getProduct();
    cart?.setProductsData(res?.data);
  };
  useEffect(() => {
    getProductCall();
  }, []);

  const refreshTokenCall = async () => {
    const token = localStorage.getItem("refreshToken");
    const res = await refreshToken({ token: token });
    localStorage.setItem("access_token", res?.accessToken);
    localStorage.setItem("refreshToken", res?.refreshToken);
  };
  useEffect(() => {
    refreshTokenCall();
  }, []);

  return (
    // <Nav />
    <>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productDetails/:id" element={<ProductDetailsPage />} />
        <Route path="/:id" element={<AllProductCardsPage />} />
        <Route path="/product/:id" element={<AllProductCategory />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/userDetails/*" element={<ProfilePage />} />
        <Route path="/check-out" element={<CheckOutPage />} />
        <Route path="/reset" element={<ResetPasswordPage />} />
      </Routes>
    </>
  );
}

export default App;
