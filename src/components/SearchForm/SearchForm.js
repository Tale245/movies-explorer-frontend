import React, { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

const SearchForm = ({ handleInputValue, searchMovie, setValue, value,  moviesError, isSavedMovies }) => {

  const changeInputValue = (e) => {
    handleInputValue(e);
  };

  const onSubmit = (e) => {
      searchMovie(e, isSavedMovies);
  };
  return (
    <>
      <form className="searchForm" onSubmit={(e) => onSubmit(e)}>
        <div className={`searchForm__container`}>
          <input
            onChange={(e) => changeInputValue(e)}
            className={`searchForm__input`}
            placeholder="Фильм"
          />
          <button type="submit" className="searchForm__submit-button" disabled={moviesError}>
            Найти
          </button>
        </div>
        <FilterCheckbox setValue={setValue} value={value}/>
      </form>
    </>
  );
};

export default SearchForm;
