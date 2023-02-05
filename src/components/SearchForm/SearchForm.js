import React, { useEffect } from "react";
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
  isSavedMovies,
  setNewInputRequest,
}) => {
  const onChange = (e) => {
    searchInputValue(e.target.value);
  };

  useEffect(() => {
    if (checkboxValue) {
      newArray.filter((item) => {
        if (item.duration < 40) {
          tempArray.push(item);
          if (isSavedMovies) {
            setNewArray(tempArray);
          } else {
            localStorage.setItem(localStorageName, JSON.stringify(tempArray));
            setNewArray(tempArray);
            setNewInputRequest(true);
          }
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
        setNotFoundText,
        isSavedMovies
      );
      setNewInputRequest(true);
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
      setNotFoundText,
      isSavedMovies
    );

    if (isSavedMovies === false) {
      setNewInputRequest(true);
      localStorage.setItem(nameSearchInputValue, inputValue);
    }
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
          isSavedMovies={isSavedMovies}
        />
      </form>
    </>
  );
};

export default SearchForm;
