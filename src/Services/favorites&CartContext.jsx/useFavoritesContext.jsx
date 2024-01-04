import { createContext, useContext } from "react";
import useFavoritesLocalStorage from "../localStorage/FavoritesLocalStorage";

const favoritesContext = createContext({});

export function useFavorites() {
  return useContext(favoritesContext);
}

export function FavoritesProvider({ children }) {
  const [favoriteItems, setFavoriteItems] = useFavoritesLocalStorage(
    "Favorite Items",
    []
  );

  function addToFavorites(id) {
    setFavoriteItems((currentItems) => {
      if (!currentItems.includes(id)) {
        return [...currentItems, id];
      } else {
        return currentItems;
      }
    });
  }

  function removeFromFavorites(id) {
    setFavoriteItems((currentItems) =>
      currentItems.filter((item) => item !== id)
    );
  }

  return (
    <favoritesContext.Provider
      value={{
        addToFavorites,
        removeFromFavorites,
        favoriteItems,
      }}
    >
      {children}
    </favoritesContext.Provider>
  );
}
