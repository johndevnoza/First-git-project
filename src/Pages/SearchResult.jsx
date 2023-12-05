import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Common/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        </>
      )}
    </>
  );
};

export default SearchResults;
