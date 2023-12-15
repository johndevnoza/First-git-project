import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSingleProductFetch } from "../../Services/Api/ProductsFetch";
import Card from "../../Components/Common/Card";
import "../Pages.css";

function SingleProduct() {
  const { single, isLoading } = useSingleProductFetch();

  return (
    <>
      <div className="container">
        <div className="singleWrapper">
          {isLoading ? (
            <div>
              <div>test</div>
              <FontAwesomeIcon icon="fa-solid fa-spinner" className="loading" />
            </div>
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
