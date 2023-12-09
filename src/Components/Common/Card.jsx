import React from "react";
import "./common.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useShoppingCart from "../../Services/ShoppingCartContext";

export default function Card({
  title,
  price,
  description,
  category,
  image,
  id,
  className = "card",
}) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);
  return (
    <div className={className}>
      <img src={image} alt="title" />
      <h3>{category}</h3>
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="price-Cart">
        <span>{price}$</span>
        <FontAwesomeIcon className="favoritesIcon" icon="heart" />
        {quantity === 0 ? (
          <FontAwesomeIcon
            className="addButton"
            icon="cart-shopping"
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault(); // Prevent the link from being executed
              increaseCartQuantity(id);
            }}
          />
        ) : (
          <>
            <div className="changeNumber">
              <div
                className="numberControl"
                onClick={(event) => {
                  event.stopPropagation();
                  event.preventDefault(); // Prevent the link from being executed
                  decreaseCartQuantity(id);
                }}
              >
                -
              </div>
              <div>{quantity}</div>
              <div
                className="numberControl"
                onClick={(event) => {
                  event.stopPropagation();
                  event.preventDefault(); // Prevent the link from being executed
                  increaseCartQuantity(id);
                }}
              >
                +
              </div>
            </div>
              <div
                className="remove"
                onClick={(event) => {
                  event.stopPropagation();
                  event.preventDefault(); // Prevent the link from being executed
                  removeFromCart(id);
                }}
              >
                X
              </div>
          </>
        )}
      </div>
    </div>
  );
}
