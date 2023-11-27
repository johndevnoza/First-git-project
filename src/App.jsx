import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import About from "./Pages/About";
import Shopping from "./Pages/Shopping";
import { ProductsFetch, SingleProduct } from "./Services/Api/ProductsFetch.jsx";
import { SingleCategory } from "./Services/Api/CategoriesFetch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<ProductsFetch />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/products/category/:id" element={<SingleCategory />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
