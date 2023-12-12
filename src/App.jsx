import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import About from "./Pages/About";
import Shopping from "./Pages/Shopping";
import ProductsPage from "./Pages/products/ProductsPage";
import SingleProduct from "./Pages/products/SingleProductpage";
import SingleCategoryPage from "./Pages/categories/SingleCategoryPage";
import NotFound from "./Pages/NotFound";
import { ShoppingCartProvider } from "./Services/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/products/:itemId" element={<SingleProduct />} />
          <Route
            path="/products/category/:id"
            element={<SingleCategoryPage />}
          />
          <Route path="/shopping" element={<Shopping />} />
          {/* <Route path="/cart" element={<CartsPage />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
