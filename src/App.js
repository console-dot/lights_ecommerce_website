import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage, ProductDetailsPage } from "./pages";




function App() {
  return (
    // <Nav />
    <Routes>
      <Route path="/home" element={<HomePage/>} />
      <Route path="/" element={<ProductDetailsPage/>} />

    </Routes>
  );
}

export default App;
