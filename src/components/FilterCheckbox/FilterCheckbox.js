import React from "react";
import "./FilterCheckbox.css";

const FilterCheckbox = ({ checkboxValue, setValue, localStorageName }) => {
  const handleCheckboxValue = () => {
    const storage = JSON.parse(localStorage.getItem(localStorageName)).length;
    if (storage !== 0) {
      setValue(!checkboxValue);
    }
  };

  return (
    <div className="filterCheckbox">
      <label className="filterCheckbox__checkbox">
        <input
          onChange={handleCheckboxValue}
          value={checkboxValue}
          className="filterCheckbox__input"
          type="checkbox"
        />
        <span className="filterCheckbox__slider"></span>
      </label>
      <p className="filterCheckbox__paragraph">Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;
