import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useProductsStore } from "../../Services/Api/ProductsFetch";
import Card from "../../Components/Common/Card";
import "../Pages.css";

function SingleProduct() {
  const { singleProduct, loading, singleProductsFetch } = useProductsStore();
  const { itemId } = useParams();

  useEffect(() => {
    singleProductsFetch();
  }, [itemId]);
  console.log(singleProduct);

  return (
    <>
      <div className="container">
        <div className="singleWrapper">
          {loading ? (
            <FontAwesomeIcon icon="fa-solid fa-spinner" className="loading" />
          ) : (
            singleProduct && (
              <Card
                className="singleCard"
                key={singleProduct.id}
                {...singleProduct}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
