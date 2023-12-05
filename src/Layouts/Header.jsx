// Header.jsx
import React from "react";
import "./layout.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "../assets/Icons/icons";
import DropDown from "../Components/Common/DropDown";
import SearchBar from "../Components/Searchbar";

export default function Header() {
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
              <DropDown lable={"Shopping"} icon={"cart-shopping"}>
                <Link>test</Link>
                <Link>test</Link>
                <Link>test</Link>
                <Link>cart</Link>
              </DropDown>
            </li>
            <li>
              <DropDown lable={"Account"} icon={"user"}>
                <Link>Porfile</Link>
                <Link>Balance</Link>
                <Link>Settings</Link>
              </DropDown>
            </li>
            <li>
              <DropDown lable={"Help"} icon={"question"}>
                <Link>Report</Link>
                <Link>History</Link>
                <Link>test</Link>
                <Link>cart</Link>
              </DropDown>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
