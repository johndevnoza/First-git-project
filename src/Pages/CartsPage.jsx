import React from "react";
import { useShoppingCart } from "../Services/ShoppingCartContext";
import { useProductsStore } from "../Services/Api/ProductsFetch";
import { Link, useSearchParams } from "react-router-dom";
import SearchResults from "./SearchResult";

import CartItem from "../Components/CartItem";

export default function CartsPage() {
  const { cartItems, cartQuantity } = useShoppingCart();
  const { loading, allProducts } = useProductsStore();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");

  console.log(cartItems);

  return (
    <div className="container">
      <div className="cartWrapper">
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
              cartItems.map((cItem) => (
                <Link key={cItem.id} to={`/products/${cItem.id}`}>
                  <CartItem key={cItem.id} {...cItem} />
                </Link>
              ))
            )}
          </>
        )}
        <div>Number of items: {cartQuantity}</div>
      </div>
    </div>
  );
}
