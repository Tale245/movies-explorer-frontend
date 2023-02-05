import React from "react";
import success from "../../images/success.svg";
import fail from "../../images/fail.svg";
import "./InfoTooltip.css";
const InfoTooltip = ({
  isInfoTooltipOpen,
  isSuccess,
  closeAllPopups,
  errorStatus,
}) => {
  return (
    <div
      className={`infoTooltip ${isInfoTooltipOpen && "infoTooltip__active"}`}
    >
      <div className="infoTooltip__overlay" onClick={closeAllPopups}></div>
      <div className="infoTooltip__container">
        <button
          className="infoTooltip__close-btn"
          onClick={closeAllPopups}
        ></button>
        <img
          src={isSuccess ? `${success}` : `${fail}`}
          alt={
            isSuccess
              ? `${"Данные успешно изменены"}`
              : `${`Что-то пошло не так! ${errorStatus}`}`
          }
          className="infoTooltip__icon"
        />
        <p className="infoTooltip__title">
          {isSuccess
            ? `${"Данные успешно изменены"}`
            : `${`Что-то пошло не так! ${errorStatus}`}`}
        </p>
      </div>
    </div>
  );
};

export default InfoTooltip;
