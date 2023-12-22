import React from "react";
import { useCategories } from "../../Services/Api/CategoriesFetch";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../Pages.css";

export default function CategoriesPage() {
  const { allCategoriesFetch, loading, allCategories } = useCategories();

  useEffect(() => {
    allCategoriesFetch();
  }, []);

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
          {loading ? (
            <span>Loading.... </span>
          ) : (
            allCategories.map((categories) => (
              <NavLink
                key={categories.id}
                to={`/products/category/${categories}`}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : "test"
                }
              >
                <span key={categories.id}>{...categories}</span>
              </NavLink>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
