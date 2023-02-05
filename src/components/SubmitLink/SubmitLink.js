import React from "react";
import { Link } from "react-router-dom";
import "./SubmitLink.css";

const SubmitLink = ({
  titleBtn,
  titleText,
  titleLink,
  link,
  login,
  isValid,
  errorStatus
}) => {
  return (
    <div className={`submit-link ${login && "submit-link__login"}`}>
        <span className="form__error-text">{errorStatus && `ERROR: ${errorStatus}`}</span>
      <button
        type="submit"
        className={`submit-link__submit-btn ${
          !isValid && `submit-link__submit-btn_disabled`
        }`}
      >
        {titleBtn}
      </button>
      <div className="submit-link__container-link">
        <p className="submit-link__title">{titleText}</p>
        <Link to={link} className="submit-link__link">
          {titleLink}
        </Link>
      </div>
    </div>
  );
};

export default SubmitLink;
