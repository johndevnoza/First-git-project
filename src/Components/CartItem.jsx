import React from "react";
import { useShoppingCart } from "../Services/ShoppingCartContext";
import { useProductsFetch } from "../Services/Api/ProductsFetch";
import "./components.css";

export default function CartItem({ id, quantity, image, title, price }) {
  const { removeFromCart } = useShoppingCart();
  const { products } = useProductsFetch();

  const item = products.find((i) => i.id === id);
  if (item == null) return "test";

  return (
    <div className="container">
      <div className="cartWrapper" key={id}>
        <img src={image} />
        <span>{title}</span>
        <span>{price}</span>
        <span>{quantity}</span>
        <span onClick={() => removeFromCart(id)}>Remove</span>
      </div>
    </div>
  );
}
