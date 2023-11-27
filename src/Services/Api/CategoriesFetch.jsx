import {
  BASE_URL,
  ALL_CATEGORIES,
  IN_CATEGORY,
  ALL_PRODUCTS,
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
          <Link to={""}>All</Link>
          <div className="categoriesList">
            {categories.map((category) => (
              <Link key={category.id} to={`/products/category/${category.id}`}>
                <span key={category.id}>{category}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export function SingleCategory() {
  const { id } = useParams();
  const [singleCategory, setSingleCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${IN_CATEGORY}${id}`)
      .then((response) => {
        setIsLoading(false);
        console.log(response.data);
        setSingleCategory(response.data);
      })
      .catch((error) => {
        console.error(`error fetching`, error);
      });
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="singleWrapper">
          {isLoading ? (
            <FontAwesomeIcon icon="fa-solid fa-spinner" className="loading" />
          ) : (
            singleCategory && (
              <Card
                key={singleCategory.id}
                title={singleCategory.title}
                category={singleCategory.category}
                description={singleCategory.description}
                price={singleCategory.price}
                image={singleCategory.image}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}
