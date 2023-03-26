import React from "react";
import "./Header.css";
import logo from "../../images/header__logo.svg";
import profileIco from "../../images/profile-ico.svg";
import { NavLink, Link } from "react-router-dom";
import PopupMenu from "../PopupMenu/PopupMenu";

const Header = ({
  loggedIn,
  popupMenuOpen,
  isPopupMenuOpen,
  closeAllPopups,
}) => {
  return (
    <header className={`header ${loggedIn && "header_white-theme"}`}>
      <div className="header__container">
        <nav className="header__container-logo">
          <Link to="/">
            <img className="header__logo" alt="логотип проекта" src={logo} />
          </Link>
          {loggedIn && (
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `header__movies ${isActive && "header__movies_active"}`
              }
            >
              Фильмы
            </NavLink>
          )}
          {loggedIn && (
            <NavLink
              to="/saved-movies"
              className={({ isActive }) =>
                `header__movies ${isActive && "header__movies_active"}`
              }
            >
              Сохраненные фильмы
            </NavLink>
          )}
        </nav>
        <nav
          className={`header__container-links ${
            loggedIn && "header__container-links_white-theme"
          }`}
        >
          {!loggedIn && (
            <NavLink to="/signup" href="#" className="header__link">
              {" "}
              Регистрация{" "}
            </NavLink>
          )}
          {!loggedIn && (
            <NavLink to="/signin">
              <button className="header__button">Войти </button>
            </NavLink>
          )}

          {loggedIn && (
            <NavLink to="/profile" className="header__link header__link_white-theme">
              Аккаунт
            </NavLink>
          )}
          {loggedIn && (
            <div className="header__container-profile">
              <img
                className="header__profile-ico"
                src={profileIco}
                alt="иконка профиль"
              />
            </div>
          )}
          {loggedIn && (
            <button
              className="header__btn-menu"
              alt="иконка профиль"
              onClick={popupMenuOpen}
            ></button>
          )}
        </nav>
      </div>
      <PopupMenu
        isPopupMenuOpen={isPopupMenuOpen}
        closeAllPopups={closeAllPopups}
      />
    </header>
  );
};

export default Header;
