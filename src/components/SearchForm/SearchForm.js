import React, { useEffect, useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import { filterArray } from "../FilterArray/FilterArray";

const SearchForm = ({
  oldArray,
  setNewArray,
  newArray,
  inputValue,
  tempArray,
  checkboxValue,
  localStorageName,
  searchInputValue,
  nameSearchInputValue,
  setValue,
  setNotFound,
  setNotFoundText,
}) => {
  useEffect(() => {
   filterArray(
        oldArray,
        newArray,
        setNewArray,
        inputValue,
        tempArray,
        checkboxValue,
        localStorageName,
        setNotFound,
        setNotFoundText
      );
  }, [checkboxValue]);

  const onChange = (e) => {
    searchInputValue(e.target.value);
    localStorage.setItem(nameSearchInputValue, e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    filterArray(
      oldArray,
      newArray,
      setNewArray,
      inputValue,
      tempArray,
      checkboxValue,
      localStorageName,
      setNotFound,
      setNotFoundText
    );
  };

  return (
    <>
      <form className="searchForm" onSubmit={(e) => onSubmit(e)}>
        <div className="searchForm__container">
          <input
            className="searchForm__input"
            placeholder="Фильм"
            onChange={(e) => onChange(e)}
            defaultValue={inputValue}
          />
          <button className="searchForm__submit-button">Найти</button>
        </div>
        <FilterCheckbox checkboxValue={checkboxValue} setValue={setValue} />
      </form>
    </>
  );
};

export default SearchForm;
