import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "./Profile.css";

const Profile = ({
  popupMenuOpen,
  isPopupMenuOpen,
  closeAllPopups,
  userInfo,
  updateUserInfo,
  loggedIn,
}) => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({mode: 'onChange'});

  const [name , setName] = useState(userInfo.name)
  const [email , setEmail] = useState(userInfo.email)

  let isFormValid = false

  const navigate = useNavigate();

  const exit = () => {
    localStorage.removeItem("token");
    navigate("/main-page", { replace: true });
  };

  const onSubmit = (data) => {
    try {
      updateUserInfo(data.name, data.email)
    } 
    catch(e) {
      console.log(e)
    }
  }

  const btnDisabled = () => {
    if(name !== userInfo.name || email !== userInfo.email) {
      return isFormValid = true
  }
}
  btnDisabled()
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
          <h1 className="profile__title">Привет, {userInfo.name}</h1>
          <div className="profile__container-input">

            <p className="profile__paragraph">Имя</p>
            <input {...register('name', {
              required: false,
              pattern: /^[A-zА-яё -]+$/,
              minLength: 2,
              maxLength: 30,
              onChange: (e) => {
                setName(e.target.value)
              }
            })}  className={`profile__input ${errors.name && 'profile__input_error'}`} defaultValue={userInfo.name} />

          </div>
          <div className="profile__container-input">

            <p className="profile__paragraph">E-mail</p>
            <input {...register('email', {
              required: true,
              pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              onChange: (e) => {
                setEmail(e.target.value)
              }

            })} className={`profile__input ${errors.email && 'profile__input_error'}`} defaultValue={userInfo.email} />

          </div>
          <button type="submit" className={`profile__btn ${!isFormValid && 'profile__btn_disabled'} ${!isValid && 'profile__btn_disabled'}`} disabled={!isFormValid && true}>
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
