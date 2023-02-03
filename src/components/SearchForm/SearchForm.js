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
  checkboxMoviesValue,
  localStorageName,
  searchInputValue,
  nameSearchInputValue,
  setValue,
  setNotFound,
  setNotFoundText,
}) => {
  const onChange = (e) => {
    searchInputValue(e.target.value);
  };

  useEffect(() => {
    if (checkboxValue) {
      newArray.filter((item) => {
        if (item.duration < 40) {
          tempArray.push(item);
          setNewArray(tempArray);
        }
      });
    } else if (!checkboxValue) {
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
    }
  }, [checkboxValue]);

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
    localStorage.setItem(nameSearchInputValue, inputValue);
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
        <FilterCheckbox
          checkboxValue={checkboxValue}
          setValue={setValue}
          localStorageName={localStorageName}
        />
      </form>
    </>
  );
};

export default SearchForm;
