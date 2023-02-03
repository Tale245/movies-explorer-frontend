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
  setNotFoundText
) => {
  oldArray.filter((item) => {
    if (inputValue === "") {
      setNotFound(true);
      setNotFoundText("Введите ключевое слово");
      localStorage.setItem(localStorageName, JSON.stringify([]));
      setNewArray(JSON.parse(localStorage.getItem(localStorageName)));
    } else if (
      inputValue !== "" && checkboxValue
        ? item.nameRU.toLowerCase().includes(inputValue.toLowerCase()) &&
          item.duration <= 40
        : item.nameRU.toLowerCase().includes(inputValue.toLowerCase())
    ) {
      setNotFound(false);
      setNotFoundText("");
      tempArray.push(item);
      localStorage.setItem(localStorageName, JSON.stringify(tempArray));
      setNewArray(JSON.parse(localStorage.getItem(localStorageName)));
    } else if (tempArray.length === 0) {
      localStorage.setItem(localStorageName, JSON.stringify([]));
      setNewArray(JSON.parse(localStorage.getItem(localStorageName)));
      setNotFound(true);
      setNotFoundText("Ничего не найдено");
    }
  });
};
