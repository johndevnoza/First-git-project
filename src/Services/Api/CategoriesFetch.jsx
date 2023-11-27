import {
  BASE_URL,
  ALL_CATEGORIES,
  IN_CATEGORY,
} from "../../Utils/constants.js";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../Components/Common/Card.jsx";

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
              <Link to={`/products/category/${category.id}`}>
                <span index={category.id}>{category}</span>
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
            <div>
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

              <h1>testtt</h1>
              <h1>testtt</h1>
              <h1>testtt</h1>
              <h1>testtt</h1>
            </div>
          )
        )}
      </div>
    </div>
  );
}
