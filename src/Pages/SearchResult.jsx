import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../Components/Common/Card";

const SearchResults = ({ products, searchQuery, isLoading }) => {
  const filteredProducts = searchQuery
    ? products.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  useEffect(() => {
    console.log("Live search with query:", searchQuery);
  }, [searchQuery]);

  return (
    <>
      {isLoading ? (
        <FontAwesomeIcon icon="fa-solid fa-spinner" className="loading" />
      ) : (
        <>
          {filteredProducts.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <Card key={product.id} {...product} />
            </Link>
          ))}
        </>
      )}
    </>
  );
};

export default SearchResults;
