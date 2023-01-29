import React from "react";
import "./Register.css";
import WelcomeHeader from "../WelcomeHeader/WelcomeHeader";
import SubmitLink from "../SubmitLink/SubmitLink";

const Register = () => {
  return (
    <section className="register">
      <div className="register__container">
        <WelcomeHeader title="Добро пожаловать!" />
        <form className="form">
          <span className="form__span">Имя</span>
          <input className="form__input" placeholder="Имя" />
          <span className="form__span">E-mail</span>
          <input className="form__input" placeholder="Email" />
          <span className="form__span">Пароль</span>
          <input className="form__input" placeholder="Пароль" />
          <SubmitLink
            titleBtn="Зарегистрироваться"
            titleText="Уже зарегистрированы?"
            link="/signin"
            titleLink="Войти"
            login={false}
          />
        </form>
      </div>
    </section>
  );
};

export default Register;
