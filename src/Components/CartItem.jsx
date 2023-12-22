import React from "react";
import { useShoppingCart } from "../Services/ShoppingCartContext";
import { useProductsStore } from "../Services/Api/ProductsFetch";
import "./components.css";

export default function CartItem({ id, quantity }) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } =
    useShoppingCart();
  const { allProducts } = useProductsStore();

  const item = allProducts.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div className="container">
      <div className="cartItem">
        <img src={item.image} />
        <div className="titlePriceWrpr">
          <span className="cItem-title">{item.title}</span>
          <span>{item.price}$</span>
        </div>
        <span>{item.price}$</span>
        <div className="quantityWrapper">
          <span
            className="numberControl"
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
              increaseQuantity(id);
            }}
          >
            +
          </span>
          <span>x{quantity}</span>
          <span
            className="numberControl"
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
              decreaseQuantity(id);
            }}
          >
            -
          </span>
        </div>
        <span className="removeC">{item.price * quantity}$</span>
        <span
          className="removeC"
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            removeFromCart(id);
          }}
        >
          X
        </span>
      </div>
    </div>
  );
}
