import React from "react";
import "./PopupMenu.css";
import profileIco from "../../images/profile-ico.svg";
import { NavLink } from "react-router-dom";

const PopupMenu = ({ isPopupMenuOpen, closeAllPopups }) => {
  return (
    <div className={`popup popup-menu ${isPopupMenuOpen && "popup_active"}`}>
      <div className="popup-menu__overlay"></div>
      <div className="popup-menu__container">
        <button className="popup__close-btn" onClick={closeAllPopups}></button>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `popup-menu__link ${isActive && "popup-menu__link_active"}`
          }
        >
          Главная
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            `popup-menu__link ${isActive && "popup-menu__link_active"}`
          }
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className={({ isActive }) =>
            `popup-menu__link ${isActive && "popup-menu__link_active"}`
          }
        >
          Сохраненные фильмы
        </NavLink>
        <div className="popup-menu__container-profile">
          <NavLink
            to="/profile"
            className="popup-menu__profile"
          >
            Аккаунт
          </NavLink>
          <div className="popup-menu__container-profile-element">
            <img
              className="popup-menu__profile-ico"
              src={profileIco}
              alt="иконка профиль"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupMenu;
