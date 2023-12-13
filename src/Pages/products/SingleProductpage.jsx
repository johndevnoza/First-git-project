// SingleProduct.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useSingleProductFetch } from "../../Services/Api/ProductsFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../Components/Common/Card";
import "../Pages.css";

function SingleProduct() {
  const { itemId } = useParams();
  const { single, isLoading } = useSingleProductFetch(itemId);

  return (
    <>
      <div className="container">
        <div className="singleWrapper">
          {isLoading ? (
            <FontAwesomeIcon icon="fa-solid fa-spinner" className="loading" />
          ) : (
            single && (
              <Card className="singleCard" key={single.id} {...single} />
            )
          )}
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
