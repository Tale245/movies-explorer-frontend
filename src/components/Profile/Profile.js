import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../Header/Header";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import "./Profile.css";

const Profile = ({
  popupMenuOpen,
  isPopupMenuOpen,
  closeAllPopups,
  loggedIn,
  userData,
  updateUserInfo,
  isSuccess,
  isInfoTooltipOpen,
  errorStatus,
  exit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const [nameValue, setNameValue] = useState(userData.name);
  const [emailValue, setEmailValue] = useState(userData.email);

  const onSubmit = (data) => {
    updateUserInfo(data.name, data.email);
  };
  let disabledBtn = false;

  const comparisonValues = () => {
    if (emailValue === userData.email) {
      disabledBtn = true;
    }
  };
  comparisonValues();
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="profile__container">
            <h1 className="profile__title">Привет, {userData.name}</h1>
            <div className="profile__container-input">
              <p className="profile__paragraph">Имя</p>
              <input
                {...register("name", {
                  required: false,
                  pattern: {
                    value: /^[A-zА-яё -]+$/,
                  },
                  onChange: (e) => setNameValue(e.target.value),
                })}
                className={`profile__input ${
                  errors?.name && "profile__input_error"
                }`}
                defaultValue={userData.name}
              />
            </div>
            <div className="profile__container-input">
              <p className="profile__paragraph">E-mail</p>
              <input
                {...register("email", {
                  required: true,
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  },
                  onChange: (e) => setEmailValue(e.target.value),
                })}
                className={`profile__input ${
                  errors?.email && "profile__input_error"
                }`}
                defaultValue={userData.email}
              />
            </div>
            <button
              type="submit"
              className={`profile__btn ${!isValid && `profile__btn_disabled`} ${
                disabledBtn && `profile__btn_disabled`
              }`}
              disabled={disabledBtn}
            >
              Редактировать
            </button>
          </div>
        </form>
        <div className="profile__container-logout">
          <button
            className="profile__btn profile__btn_logout"
            onClick={() => exit()}
          >
            Выйти из аккаунта
          </button>
        </div>
      </section>
      <InfoTooltip
        isSuccess={isSuccess}
        isInfoTooltipOpen={isInfoTooltipOpen}
        closeAllPopups={closeAllPopups}
        errorStatus={errorStatus}
      />
    </>
  );
};

export default Profile;
