import React from "react";
import { useSingleCategory } from "../../Services/Api/CategoriesFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useSearchParams } from "react-router-dom";
import "../Pages.css";
import Card from "../../Components/Common/Card";
import SearchResults from "../SearchResult";

function SingleCategoryPage() {
  const { singleCategory, isLoading } = useSingleCategory();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");

  return (
    <div className="container">
      <div className="allProductsWrapper">
        {isLoading ? (
          <FontAwesomeIcon icon="spinner" className="loading" />
        ) : searchQuery ? (
          <SearchResults
            products={singleCategory}
            searchQuery={searchQuery}
            isLoading={isLoading}
          />
        ) : (
          singleCategory && (
            <>
              {singleCategory.map((category) => (
                <Link key={category.id} to={`/products/${category.id}`}>
                  <Card key={category.id} {...category} />
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
