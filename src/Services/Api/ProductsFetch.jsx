import {
  BASE_URL,
  ALL_PRODUCTS,
  SINGLE_PRODUCT,
  ALL_CATEGORIES,
  IN_CATEGORY,
} from "../../Utils/constants.js";

import { useState, useEffect } from "react";
import "./Services.css";
import Card from "../../Components/Common/Card.jsx";

import axios from "axios";
import React from "react";

export default function ProductsFetch() {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${ALL_PRODUCTS}`)
      .then((response) => {
        console.log(response.data);
        setproduct(response.data);
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
            <Card
              key={product.id}
              title={product.title}
              category={product.category}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}
