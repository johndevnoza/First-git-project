import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import About from "./Pages/About";
import {
  ProductsFetch,
  SingleProduct,
} from "./Services/Api/ProductsFetch.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route path="/" element={<ProductsFetch />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
