// SingleCategoryPage.jsx
import React from "react";
import { useSingleCategory } from "../../Services/Api/CategoriesFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../Pages.css";
import Card from "../../Components/Common/Card";

function SingleCategoryPage() {
  const { id } = useParams();
  const { singleCategory, isLoading } = useSingleCategory(id);

  return (
    <div className="container">
      <div className="allProductsWrapper">
        {isLoading ? (
          <FontAwesomeIcon icon="spinner" className="loading" />
        ) : (
          singleCategory && (
            <>
              {singleCategory.map((category) => (
                <Link key={category.id} to={`/products/${category.id}`}>
                  <Card
                    key={category.id}
                    title={category.title}
                    category={category.category}
                    description={category.description}
                    price={category.price}
                    image={category.image}
                  />
                </Link>
              ))}
            </>
          )
        )}
      </div>
    </div>
  );
}

export default SingleCategoryPage;
