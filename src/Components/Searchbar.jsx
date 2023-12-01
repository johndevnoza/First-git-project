import React, { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "../assets/Icons/icons";
import "./components.css"

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    // Use location to get the search query from the URL on component mount
    const params = new URLSearchParams(location.search);
    const query = params.get("q");
    if (query) {
      setSearchQuery(query);
    }
  }, [location.search]);

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      setSearchParams({ q: searchQuery });
    } else {
      // If the search query is empty, clear the "q" parameter from the URL
      setSearchParams({});
    }
  };

  return (
    <div className="searchWrapper">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <FontAwesomeIcon
        icon="search"
        className="searchIcon"
        onClick={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
