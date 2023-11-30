// SingleProduct.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useSingleProductFetch } from "../Services/Api/ProductsFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Pages.css";
import Card from "../Components/Common/Card";

function SingleProduct() {
  const { id } = useParams();
  const { single, isLoading } = useSingleProductFetch(id);

  return (
    <>
      <div className="container">
        <div className="singleWrapper">
          {isLoading ? (
            <FontAwesomeIcon icon="fa-solid fa-spinner" className="loading" />
          ) : (
            single && (
              <Card
                className="singleCard"
                key={single.id}
                title={single.title}
                category={single.category}
                description={single.description}
                price={single.price}
                image={single.image}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
