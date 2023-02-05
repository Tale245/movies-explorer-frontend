import React from "react";

export const filterArray = (
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
) => {
  oldArray.filter((item) => {
    if (inputValue === "") {
      if (isSavedMovies) {
        setNotFound(true);
        setNotFoundText("Введите ключевое слово");
        setNewArray([]);
      } else {
        setNotFound(true);
        setNotFoundText("Введите ключевое слово");
        localStorage.setItem(localStorageName, JSON.stringify([]));
        setNewArray(JSON.parse(localStorage.getItem(localStorageName)));
      }
    } else if (
      inputValue !== "" && checkboxValue
        ? item.nameRU.toLowerCase().includes(inputValue.toLowerCase()) &&
          item.duration <= 40
        : item.nameRU.toLowerCase().includes(inputValue.toLowerCase())
    ) {
      setNotFound(false);
      setNotFoundText("");
      tempArray.push(item);
      if (isSavedMovies) {
        setNewArray(tempArray);
      } else {
        localStorage.setItem(localStorageName, JSON.stringify(tempArray));
        setNewArray(tempArray);
      }
    } else if (tempArray.length === 0) {
      if (isSavedMovies) {
        setNotFound(true);
        setNotFoundText("Ничего не найдено");
        setNewArray([]);
      } else {
        localStorage.setItem(localStorageName, JSON.stringify([]));
        setNewArray(JSON.parse(localStorage.getItem(localStorageName)));
        setNotFound(true);
        setNotFoundText("Ничего не найдено");
      }
    }
  });
};
