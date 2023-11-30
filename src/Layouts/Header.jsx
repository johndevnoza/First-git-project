// Header.jsx
import React from "react";
import "./layout.css";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "../assets/Icons/icons";
import { useSearchParams } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  

  return (
    <div className="header">
      <div className="container">
        <div className="headerWrapper">
          <Link to={"/"} className="logo">
            <FontAwesomeIcon icon="cube" />
          </Link>
          <div className="searchWrapper">
            <input type="text" />
            <FontAwesomeIcon icon="search" className="searchIcon" />
          </div>
          <ul className="headerLists">
            <li>
              <Link to={"/shopping"}>Shopping</Link>
              <FontAwesomeIcon icon="cart-shopping" />
            </li>
            <li>
              <Link to={"/account"}>Account</Link>
              <FontAwesomeIcon icon="user" />
            </li>
            <li>
              <Link to={"/help"}>Help</Link>
              <FontAwesomeIcon icon="question" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
