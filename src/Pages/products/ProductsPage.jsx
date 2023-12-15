// ProductsPage.js
import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useProductsStore } from "../../Services/Api/ProductsFetch";
import { useEffect } from "react";
import SearchResults from "../SearchResult";
import Card from "../../Components/Common/Card";
import "../Pages.css";

function ProductsPage() {
  const { allProductsFetch, allProducts, loading } = useProductsStore();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");

  useEffect(() => {
    allProductsFetch();
  }, []);

  return (
    <>
      <div className="container">
        <div className="allProductsWrapper">
          {searchQuery ? (
            <SearchResults
              products={allProducts}
              searchQuery={searchQuery}
              isLoading={loading}
            />
          ) : (
            <>
              {loading ? (
                <FontAwesomeIcon
                  icon="fa-solid fa-spinner"
                  className="loading"
                />
              ) : (
                allProducts.map((product) => (
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
