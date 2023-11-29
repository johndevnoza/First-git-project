import {
  BASE_URL,
  ALL_CATEGORIES,
  IN_CATEGORY,
} from "../../Utils/constants.js";

import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../Components/Common/Card.jsx";

import "./Services.css";

import axios from "axios";
import React from "react";

export function CategoriesFetch() {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${ALL_CATEGORIES}`)
      .then((response) => {
        setAllCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories", error);
      });
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
          {allCategories.map((categories) => (
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              key={categories.id}
              to={`/products/category/${categories}`}
            >
              <span key={categories.id}>{categories}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SingleCategory() {
  const { id } = useParams();
  const [singleCategory, setSingleCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${IN_CATEGORY}/${id}`)
      .then((response) => {
        setIsLoading(false);
        setSingleCategory(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(`error fetching`, error);
      });
  }, [id]);

  return (
    <div className="container">
      <div className="allProductsWrapper">
        {isLoading ? (
          <FontAwesomeIcon icon="spinner" className="loading" />
        ) : (
          singleCategory && (
            <>
              {singleCategory.map((category) => (
                <Card
                  key={category.id}
                  title={category.title}
                  category={category.category}
                  description={category.description}
                  price={category.price}
                  image={category.image}
                />
              ))}
            </>
          )
        )}
      </div>
    </div>
  );
}
