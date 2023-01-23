import React, { useEffect } from "react";
import Header from "../Header/Header";
import "./Profile.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Profile = ({
  popupMenuOpen,
  isPopupMenuOpen,
  closeAllPopups,
  userInfo,
  updateUserInfo,
  loggedIn
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm({ mode: "onChange", reValidateMode: "onBlur" });

  const name = getValues("name");
  const email = getValues("email");

  const onSubmit = (data) => {
    if (email !== userInfo.email) updateUserInfo(data.name, data.email);
  };

  const navigate = useNavigate()

  const exit = () => {
    localStorage.removeItem('token')
    navigate('/main-page', {replace: true})
  }

  return (
    <>
      <Header
        whiteTheme={true}
        popupMenuOpen={popupMenuOpen}
        isPopupMenuOpen={isPopupMenuOpen}
        closeAllPopups={closeAllPopups}
        loggedIn={loggedIn}
      />
      <section className="profile">
        <form className="profile__container" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="profile__title">
            Привет, {userInfo && `${userInfo.name}`}!
          </h1>
          <div className="profile__container-input">
            <p className="profile__paragraph">Имя</p>
            <input
              {...register("name", {
                minLength: {
                  value: 2,
                },
                maxLength: {
                  value: 30,
                },
                pattern: {
                  value: /^[A-zА-яё -]+$/,
                },
                validate: () => {
                  if (name === userInfo.name) {
                    return isValid === false;
                  }
                },
              })}
              className={`profile__input ${
                errors?.name && "profile__input_error"
              }`}
              defaultValue={userInfo && `${userInfo.name}`}
            />
          </div>
          <div className="profile__container-input">
            <p className="profile__paragraph">E-mail</p>
            <input
              {...register("email", {
                required: true,
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                },
                validate: () => {
                  if (email === userInfo.email) {
                    return !isValid;
                  }
                },
              })}
              className={`profile__input ${
                errors?.email && "profile__input_error"
              }`}
              defaultValue={userInfo && `${userInfo.email}`}
            />
          </div>
          <button
            type="submit"
            className={`profile__btn ${
              isValid === false && "profile__btn_disabled"
            }`}
          >
            Редактировать
          </button>

          <button className="profile__btn profile__btn_logout" onClick={exit}>
            Выйти из аккаунта
          </button>
        </form>
      </section>
    </>
  );
};

export default Profile;
