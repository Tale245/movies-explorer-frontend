import React from "react";
import "./Header.css";
import logo from "../../images/header__logo.svg";
import profileIco from "../../images/profile-ico.svg";
import { NavLink, Link } from "react-router-dom";
import PopupMenu from "../PopupMenu/PopupMenu";

const Header = ({
  whiteTheme,
  popupMenuOpen,
  isPopupMenuOpen,
  closeAllPopups,
}) => {
  return (
    <header className={`header ${whiteTheme && "header_white-theme"}`}>
      <div className="header__container">
        <nav className="header__container_logo">
          <Link to="/">
            <img className="header__logo" alt="логотип проекта" src={logo} />
          </Link>
          {whiteTheme && (
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `header__movies ${isActive && "header__movies_active"}`
              }
            >
              Фильмы
            </NavLink>
          )}
          {whiteTheme && (
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
          className={`header__container_links ${
            whiteTheme && "header__container_links_white-theme"
          }`}
        >
          {!whiteTheme && (
            <NavLink to="/signup" href="#" className="header__link">
              {" "}
              Регистрация{" "}
            </NavLink>
          )}
          {!whiteTheme && (
            <NavLink to="/signin">
              <button className="header__button">Войти </button>
            </NavLink>
          )}

          {whiteTheme && (
            <NavLink to="/profile" className="header__link_white-theme">
              Аккаунт
            </NavLink>
          )}
          {whiteTheme && (
            <div className="header__container_profile">
              <img
                className="header__profile-ico"
                src={profileIco}
                alt="иконка профиль"
              />
            </div>
          )}
          {whiteTheme && (
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
