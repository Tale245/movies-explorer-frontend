import React from "react";
import "./Header.css";
import logo from "../../images/header__logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" alt="логотип проекта" src={logo} />
        <div className="header__container_links">
          <a href="#" className="header__link">
            Регистрация
          </a>
          <button className="header__button">Войти</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
