import {
  BASE_URL,
  ALL_CATEGORIES,
  IN_CATEGORY,
} from "../../Utils/constants.js";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Services.css";

import axios from "axios";
import React from "react";

export function CategoriesFetch() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${ALL_CATEGORIES}`)
      .then((response) => {
        console.log(response.data);
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(`error fetching`, error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="categoriesWrapper">
          <Link to={""}>
            All
          </Link>
          <div className="categoriesList">
            {categories.map((category) => (
              <Link to={""}>
                <span key={category.id}>{category}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
