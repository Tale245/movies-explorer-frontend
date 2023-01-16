import React from "react";
import "./WelcomeHeader.css";
import logo from "../../images/header__logo.svg";

const WelcomeHeader = ({ title }) => {
  return (
    <>
      <div className="welcomeHeader">
        <img src={logo} className="welcomeHeader__logo" alt="Логотип проекта" />
        <h1 className="welcomeHeader__title">{title}</h1>
      </div>
    </>
  );
};

export default WelcomeHeader;
