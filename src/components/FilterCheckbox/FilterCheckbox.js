import React from "react";
import "./FilterCheckbox.css";

const FilterCheckbox = ({
  checkboxValue,
  setValue,
  localStorageName,
  isSavedMovies,
}) => {
  const handleCheckboxValue = () => {
    if (isSavedMovies) {
      setValue(!checkboxValue);
    } else {
      const storage = JSON.parse(localStorage.getItem(localStorageName)).length;
      if (storage !== 0) {
        setValue(!checkboxValue);
        localStorage.setItem("checkboxValue", !checkboxValue);
      }
    }
  };

  return (
    <div className="filterCheckbox">
      <label className="filterCheckbox__checkbox">
        <input
          onChange={handleCheckboxValue}
          value={checkboxValue}
          className={`filterCheckbox__input ${
            checkboxValue === true &&
            "filterCheckbox__input_active + filterCheckbox__slider filterCheckbox__input_active + filterCheckbox__slider::before "
          }`}
          type="checkbox"
        />
        <span className="filterCheckbox__slider"></span>
      </label>
      <p className="filterCheckbox__paragraph">Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;
