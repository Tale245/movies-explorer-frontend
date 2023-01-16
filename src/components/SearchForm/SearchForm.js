import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

const SearchForm = () => {
  return (
    <>
      <form className="searchForm">
        <div className="searchForm__container">
          <input className="searchForm__input" placeholder="Фильм" />
          <button className="searchForm__submit-button">Найти</button>
        </div>
        <FilterCheckbox />
      </form>
    </>
  );
};

export default SearchForm;
