import React from "react";

import './search.css';

const Search = () => {
  return (
    <form method="post" className="header__search">
      <select name="departments" className="header__department">
        <option disabled selected hidden>
          All
        </option>
        <option value="all">All Departments</option>
        <option value="books">Books</option>
        <option value="computers">Computers</option>
      </select>
      <input type="text" className="search__info"/>
      <input type="submit" value="" className="search__submit"/>
    </form>
  );
};

export default Search;
