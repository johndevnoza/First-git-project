import {
  BASE_URL,
  ALL_PRODUCTS,
  SINGLE_PRODUCT,
  ALL_CATEGORIES,
  IN_CATEGORY,
} from "../../Utils/constants.js";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Services.css";
import Card from "../../Components/Common/Card.jsx";

import axios from "axios";
import React from "react";

export function ProductsFetch() {
  const [product, setproduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${ALL_PRODUCTS}`)
      .then((response) => {
        setproduct(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(`error fetching`, error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="allProductsWrapper">
          {product.map((product) => (
            <Link to={`/products/${product.id}`}>
              <Card
                key={product.id}
                title={product.title}
                category={product.category}
                description={product.description}
                price={product.price}
                image={product.image}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export function SingleProduct() {
  const { id } = useParams();
  const [single, setsingle] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${SINGLE_PRODUCT}${id}`)
      .then((response) => {
        console.log(response.data);
        setsingle(response.data);
      })
      .catch((error) => {
        console.error(`error fetching`, error);
      });
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="singleWrapper">
          {single && (
            <Card
              className="singleCard"
              key={single.id}
              title={single.title}
              category={single.category}
              description={single.description}
              price={single.price}
              image={single.image}
            />
          )}
        </div>
      </div>
    </>
  );
}
