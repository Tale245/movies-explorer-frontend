import React from "react";
import Header from "../Header/Header";
import "./Profile.css";

const Profile = ({ popupMenuOpen, isPopupMenuOpen, closeAllPopups }) => {
  return (
    <>
      <Header
        whiteTheme={true}
        popupMenuOpen={popupMenuOpen}
        isPopupMenuOpen={isPopupMenuOpen}
        closeAllPopups={closeAllPopups}
      />
      <section className="profile">
        <div className="profile__container">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <div className="profile__container_input">
            <p className="profile__paragraph">Имя</p>
            <input className="profile__input" value="Виталий" disabled />
          </div>
          <div className="profile__container_input">
            <p className="profile__paragraph">E-mail</p>
            <input
              className="profile__input"
              value="pochta@yandex.ru"
              disabled
            />
          </div>
          <button className="profile__btn">Редактировать</button>
          <button className="profile__btn profile__btn_logout">
            Выйти из аккаунта
          </button>
        </div>
      </section>
    </>
  );
};

export default Profile;
