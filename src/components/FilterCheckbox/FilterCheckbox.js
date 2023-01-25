import React, { useState } from "react";
import "./FilterCheckbox.css";

const FilterCheckbox = ({setValue, value}) => {
  
  const result = () => {
    setValue(!value)
  }

  return (
    <div className="filterCheckbox">
      <label className="filterCheckbox__checkbox">
        <input onChange={result} value={value}className="filterCheckbox__input"  type="checkbox" />
        <span className="filterCheckbox__slider"></span>
      </label>
      <p className="filterCheckbox__paragraph">Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;
