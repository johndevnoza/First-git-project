// Header.jsx
import React from "react";
import "./layout.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "../assets/Icons/icons"; // Adjust the path based on your project structure

export default function Header() {
  return (
    <div className="headerWrapper">
      <div className="logo">
        <FontAwesomeIcon icon="cube" />
      </div>
      <ul className="headerLists">
        <li>
          <Link to={"/about"}>About</Link>
        <FontAwesomeIcon icon="cube" />
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
    </div>
  );
}
