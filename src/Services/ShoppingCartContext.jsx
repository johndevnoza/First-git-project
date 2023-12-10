import { create } from "zustand";

const useShoppingCart = create((set) => ({
  cartItems: [],
  setCartItems: (items) => set({ cartItems: items }),
  increaseCartQuantity: (id) =>
    set((state) => {
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (!existingItem) {
        return { cartItems: [...state.cartItems, { id, quantity: 1 }] };
      } else {
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
    }),
  decreaseCartQuantity: (id) =>
    set((state) => {
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem && existingItem.quantity === 1) {
        return {
          cartItems: state.cartItems.filter((item) => item.id !== id),
        };
      } else {
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          ),
        };
      }
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),
}));

export  { useShoppingCart };
