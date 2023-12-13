import React from "react";
import { useShoppingCart } from "../Services/ShoppingCartContext";
import CartItem from "../Components/CartItem";

export default function CartsPage() {
  const { cartItems, cartQuantity } = useShoppingCart();

  return (
    <div className="container">
      <div className="cartWrapper">
        {cartItems.map((item) => (
          <div key={item.id}>
            <CartItem {...item} />
          </div>
        ))}
        <div>Number of items: {cartQuantity}</div>
      </div>
    </div>
  );
}
