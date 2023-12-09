// ProductsPage.js
import React from "react";
import { useProductsFetch } from "../../Services/Api/ProductsFetch";
import { Link, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchResults from "../SearchResult";
import Card from "../../Components/Common/Card";
import "../Pages.css";

function ProductsPage() {
  const { product, isLoading } = useProductsFetch();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");

  return (
    <>
      <div className="container">
        <div className="allProductsWrapper">
          {searchQuery ? (
            <SearchResults
              products={product}
              searchQuery={searchQuery}
              isLoading={isLoading}
            />
          ) : (
            <>
              {isLoading ? (
                <FontAwesomeIcon
                  icon="fa-solid fa-spinner"
                  className="loading"
                />
              ) : (
                product.map((product) => (
                  <Link key={product.id} to={`/products/${product.id}`}>
                    <Card key={product.id} {...product} />
                  </Link>
                ))
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
