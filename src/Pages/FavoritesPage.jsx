import React from "react";
import Card from "../Components/Common/Card";
import { useFavorites } from "../Services/favorites&CartContext.jsx/useFavoritesContext";
import { useProductsStore } from "../Services/Api/ProductsFetch";
import { Link, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import SearchResults from "./SearchResult";

export default function FavoritesPage() {
  const { favoriteItems } = useFavorites();
  const { loading, allProducts, allProductsFetch } = useProductsStore();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");

  useEffect(() => {
    allProductsFetch();
  }, []);

  return (
    <div className="container">
      <div className="favWrapper">
        {searchQuery ? (
          <SearchResults
            products={allProducts}
            searchQuery={searchQuery}
            isLoading={loading}
          />
        ) : (
          <>
            {loading ? (
              <FontAwesomeIcon icon="fa-solid fa-spinner" className="loading" />
            ) : (
              favoriteItems.map((favItemId) => {
                if (favItemId !== null) {
                  const product = allProducts.find(
                    (product) => product.id === favItemId
                  );
                  if (product) {
                    return (
                      <Link key={favItemId} to={`/products/${favItemId}`}>
                        <Card
                          image={product.image}
                          title={product.title}
                          id={product.id}
                        />
                      </Link>
                    );
                  }
                  return null;
                }
              })
            )}
          </>
        )}
        <div className="cartResultWrpr">
          <p>Total favorited items: {favoriteItems.length}</p>
        </div>
      </div>
    </div>
  );
}
