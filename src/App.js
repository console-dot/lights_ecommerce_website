import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AllProductCardsPage, AllProductCategory, HomePage, ProductDetailsPage } from "./pages";
import { AddCardState } from "./context";



function App() {
  return (
    // <Nav />
    <AddCardState>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/productDetails/:id" element={<ProductDetailsPage />} />
        <Route path="/product" element={<AllProductCardsPage />} />
        <Route path="/product/:id" element={<AllProductCategory />} />
      </Routes>
    </AddCardState>
  );
}

export default App;
