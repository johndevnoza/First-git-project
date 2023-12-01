import React from "react";
import { useCategoriesFetch } from "../../Services/Api/CategoriesFetch";
import { NavLink } from "react-router-dom";
import "../Pages.css";

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
          {allCategories.map((categories) => (
            <NavLink
              key={categories.id}
              to={`/products/category/${categories}`}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <span key={categories.id}>{categories}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
