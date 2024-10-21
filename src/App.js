import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  AboutUsPage,
  AllProductCardsPage,
  AllProductCategory,
  HomePage,
  ProductDetailsPage,
  ProfilePage,
} from "./pages";
import { AddCardState } from "./context";
import { ScrollTop } from "./components";

function App() {
  return (
    // <Nav />
    <AddCardState>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productDetails/:id" element={<ProductDetailsPage />} />
        <Route path="/:id" element={<AllProductCardsPage />} />
        <Route path="/product/:id" element={<AllProductCategory />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </AddCardState>
  );
}

export default App;
