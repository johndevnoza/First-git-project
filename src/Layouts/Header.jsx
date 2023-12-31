// Header.jsx
import React from "react";
import "./layout.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "../assets/Icons/icons";
import DropDown from "../Components/Common/DropDown";
import SearchBar from "../Components/Searchbar";
import CategoriesPage from "../Pages/categories/CategoriesPage";
import { useShoppingCart } from "../Services/favorites&CartContext.jsx/ShoppingCartContext";
import { useFavorites } from "../Services/favorites&CartContext.jsx/useFavoritesContext";

export default function Header() {
  const { cartQuantity } = useShoppingCart();
  const { favoriteItems } = useFavorites();

  return (
    <div className="header">
      <div className="container">
        <div className="headerWrapper">
          <Link to={"/"} className="logo">
            <FontAwesomeIcon icon="cube" />
          </Link>
          <SearchBar />
          <ul className="headerLists">
            <li>
              <div className="cartIcon">
                {cartQuantity ? (
                  <div className="cartNumber">{cartQuantity}</div>
                ) : null}
                <DropDown lable={"Shopping"} icon={"cart-shopping"}>
                  <Link to={"/cart"}>Cart</Link>
                  <Link to={"/favorites"}>
                    Favorites {favoriteItems.length}
                  </Link>
                  <Link>Gifts</Link>
                  <Link>Special code</Link>
                </DropDown>
              </div>
            </li>
            <li>
              <DropDown lable={"Account"} icon={"user"}>
                <Link>Profile</Link>
                <Link>Balance</Link>
                <Link>Settings</Link>
                <Link>History</Link>
              </DropDown>
            </li>
            <li>
              <DropDown lable={"Help"} icon={"question"}>
                <Link>Report</Link>
                <Link>Contact us</Link>
              </DropDown>
            </li>
          </ul>
        </div>
        <CategoriesPage />
      </div>
    </div>
  );
}
