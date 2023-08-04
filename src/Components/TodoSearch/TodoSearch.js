import React from "react";

import "./TodoSearch.css";
import searchIcon from "../../assets/search-icon.svg";
import { TodoContext } from "../../context/TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  return (
    <div className="search-container">
      <input
        value={searchValue}
        placeholder="Cortar cebolla"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <img className="search-icon" src={searchIcon} alt="search icon" />
    </div>
  );
}

export { TodoSearch };
