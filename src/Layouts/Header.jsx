import React from "react";
import "./layout.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="headerWrapper">
      <div className="logo">
        <span>Header</span>
      </div>
      <ul>
        <li className="headerLists">
          <Link to={"/about"}>About</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/about"} className="test">
            <span>Account</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
