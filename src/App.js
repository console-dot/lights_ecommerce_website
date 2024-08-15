import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  AboutUsPage,
  AllProductCardsPage,
  AllProductCategory,
  HomePage,
  ProductDetailsPage,
} from "./pages";
import { AddCardState } from "./context";

function App() {
  return (
    // <Nav />
    <AddCardState>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productDetails/:id" element={<ProductDetailsPage />} />
        <Route path="/:id" element={<AllProductCardsPage />} />
        <Route path="/product/:id" element={<AllProductCategory />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
    </AddCardState>
  );
}

export default App;
