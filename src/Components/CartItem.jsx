// import React from "react";
// import { useCartStore } from "../Services/ShoppingCartContext";
// import { useProductsFetch } from "../Services/Api/ProductsFetch";
// import "./components.css";

// export default function CartItem(id, cartQuantity) {
//   const { removeFromCart, cartitems } = useCartStore();
//   const { product, isLoading } = useProductsFetch();

//   const item = product.find((i) => i.id === id);
//   if (item == null) return null;

//   return (
//     <div className="container">
//       <img src={item.imgUrl} className="cartImage" />
//       <p>{item.title}</p>
//       <p>aki</p>
//     </div>
//   );
// }
