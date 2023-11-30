import React from "react";
import { useCategoriesFetch } from "../Services/Api/CategoriesFetch";
import { NavLink } from "react-router-dom";
import "./Pages.css";

export default function CategoriesPage() {
  const { allCategories } = useCategoriesFetch();
  return (
    <div className="container">
      <div className="categoriesWrapper">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/"
        >
          All
        </NavLink>
        <div className="categoriesList">
          {allCategories.map((category) => (
            <NavLink
              key={category.id}
              to={`/products/category/${category}`}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <span key={category.id}>{category}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
