import React from "react";
import { useProductsFetch } from "../Services/Api/ProductsFetch";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Pages.css";
import Card from "../Components/Common/Card";

function ProductsPage() {
  const { product, isLoading } = useProductsFetch();

  return (
    <>
      <div className="container">
        <div className="allProductsWrapper">
          {isLoading ? (
            <FontAwesomeIcon icon="fa-solid fa-spinner" className="loading" />
          ) : (
            product.map((product) => (
              <Link key={product.id} to={`/products/${product.id}`}>
                <Card
                  key={product.id}
                  title={product.title}
                  category={product.category}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                />
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
