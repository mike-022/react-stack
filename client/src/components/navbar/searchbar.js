import React, { useState } from "react";
import "./navbar.css";
import SearchLookAhead from './searchlookahead.js'

function SearchBar({ placeholder }) {
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {

  };


  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
      </div>
      <SearchLookAhead
        data={[]}
      />
    </div>
  );
}

export default SearchBar;
