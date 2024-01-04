import React from "react";
import "./common.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useShoppingCart } from "../../Services/favorites&CartContext.jsx/ShoppingCartContext";
import { useFavorites } from "../../Services/favorites&CartContext.jsx/useFavoritesContext";
export default function Card({
  title,
  price,
  description,
  category,
  image,
  id,
  className = "card",
}) {
  // Cart functionality
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    getItemquantity,
  } = useShoppingCart(id);

  // Favorites functionality
  const { addToFavorites, removeFromFavorites, favoriteItems } = useFavorites();
  const isFavorite = favoriteItems.includes(id);

  const handleAddToFavorites = () => {
    addToFavorites(id);
  };

  const handleRemoveFromFavorites = () => {
    removeFromFavorites(id);
  };

  const quantity = getItemquantity(id);

  return (
    <div className={className}>
      <img src={image} alt="title" />
      <div className="textWrapper">
        <h3>{category}</h3>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="price-Cart">
          <span>{price}$</span>
          {/* Add to favorites */}
          {isFavorite ? (
            <FontAwesomeIcon
              className="favorited"
              icon="heart"
              onClick={(event) => {
                event.stopPropagation();
                event.preventDefault();
                handleRemoveFromFavorites(id);
              }}
            />
          ) : (
            <FontAwesomeIcon
              className="favoritesIcon"
              icon="heart"
              onClick={(event) => {
                event.stopPropagation();
                event.preventDefault();
                handleAddToFavorites(id);
              }}
            />
          )}
          {quantity === 0 ? (
            // add to cart
            <FontAwesomeIcon
              className="addButton"
              icon="cart-shopping"
              onClick={(event) => {
                event.stopPropagation();
                event.preventDefault();
                increaseQuantity(id);
              }}
            />
          ) : (
            <>
              {/* + or - item in cart */}
              <div className="changeNumber">
                <div
                  className="numberControl"
                  onClick={(event) => {
                    event.stopPropagation();
                    event.preventDefault();
                    decreaseQuantity(id);
                  }}
                >
                  -
                </div>
                <div>{quantity}</div>
                <div
                  className="numberControl"
                  onClick={(event) => {
                    event.stopPropagation();
                    event.preventDefault();
                    increaseQuantity(id);
                  }}
                >
                  +
                </div>
              </div>
              {/* remove from cart Button */}
              <div
                className="remove"
                onClick={(event) => {
                  event.stopPropagation();
                  event.preventDefault();
                  removeFromCart(id);
                }}
              >
                X
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
