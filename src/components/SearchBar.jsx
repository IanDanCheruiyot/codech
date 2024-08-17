import React from 'react';
import "./SearchBar.css";

function SearchBar({ setSearchQuery }) {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search transactions"
      onChange={handleSearch}
    />
  );
}

export default SearchBar;