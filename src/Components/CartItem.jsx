import React from "react";
import { useShoppingCart } from "../Services/ShoppingCartContext";
import "./components.css";

export default function CartItem(id, title, price, image) {
  const { removeFromCart, cartitems, cartQuantity } = useShoppingCart();

  // const item = cartitems.find((i) => i.id === id);
  // if (item == null) return null;

  return (
    <div className="container">
      <div>{cartitems.title}</div>
      <div>{cartQuantity}</div>
      <span
        onClick={() => {
          removeFromCart;
        }}
      />
    </div>
  );
}
