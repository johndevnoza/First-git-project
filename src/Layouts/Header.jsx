import React from "react";
import "./";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="headerWrapper">
      <span>Header</span>
      <ul>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
    </div>
  );
}
