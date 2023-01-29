import React from "react";
import "./Login.css";
import WelcomeHeader from "../WelcomeHeader/WelcomeHeader";
import SubmitLink from "../SubmitLink/SubmitLink";

const Login = () => {
  return (
    <section className="login">
      <div className="login__container">
        <WelcomeHeader title="Рады видеть!" />
        <form className="form">
          <span className="form__span">E-mail</span>
          <input className="form__input" placeholder="Email" />
          <span className="form__span">Пароль</span>
          <input className="form__input" placeholder="Пароль" />
          <SubmitLink
            titleBtn="Войти"
            titleText="Ещё не зарегистрированы?"
            link="/signup"
            titleLink="Регистрация"
            login={true}
          />
        </form>
      </div>
    </section>
  );
};

export default Login;
