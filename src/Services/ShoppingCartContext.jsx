import { useContext, createContext, useState } from "react";

const shoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(shoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function getItemquantity(id) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseQuantity(id) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            console.log(currItems);
            return item;
          }
        });
      }
    });
  }

  function decreaseQuantity(id) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <shoppingCartContext.Provider
      value={{
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        getItemquantity,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
    </shoppingCartContext.Provider>
  );
}
