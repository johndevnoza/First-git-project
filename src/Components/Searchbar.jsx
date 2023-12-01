import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "../assets/Icons/icons";
import "./components.css";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      setSearchQuery(query);
    }
  }, [searchParams]);

  const handleSearch = () => {
    setSearchParams({ q: searchQuery }, { replace: true });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="searchWrapper">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyPress}
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
