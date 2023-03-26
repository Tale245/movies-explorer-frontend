import React from "react";
import "./WelcomeHeader.css";
import logo from "../../images/header__logo.svg";
import { NavLink } from "react-router-dom";

const WelcomeHeader = ({ title }) => {
  return (
    <>
      <div className="welcomeHeader">
       <NavLink to="/"><img src={logo} className="welcomeHeader__logo" alt="Логотип проекта" /></NavLink>
        <h1 className="welcomeHeader__title">{title}</h1>
      </div>
    </>
  );
};

export default WelcomeHeader;
