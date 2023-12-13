import React from "react";
import { useShoppingCart } from "../Services/ShoppingCartContext"
import CartItem from "../Components/CartItem";

export default function CartsPage() {
  const { cartItems } = useShoppingCart();

  return (
    <div className="container">
      <div className="cartWrapper">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
