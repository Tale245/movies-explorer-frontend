import React from "react";
import "./Login.css";
import WelcomeHeader from "../WelcomeHeader/WelcomeHeader";
import SubmitLink from "../SubmitLink/SubmitLink";
import { useForm } from "react-hook-form";

const Login = ({signin, errorStatus}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    signin(data.email, data.password)
  };

  return (
    <section className="login">
      <div className="login__container">
        <WelcomeHeader title="Рады видеть!" />
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <span className="form__span">E-mail</span>
          <input
            {...register("email", {
              required: "Это поля обязательно!",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Некорректный Email адрес",
              },
            })}
            className={`form__input ${errors?.email && "form__input_error"}`}
            placeholder="Email"
          />
          {errors?.email && (
            <span className="form__error-text">{errors.email.message}</span>
          )}

          <span className="form__span">Пароль</span>
          <input
            {...register("password", {
              required: "Это поле обязательно!",
            })}
            className={`form__input ${errors?.password && "form__input_error"}`}
            placeholder="Пароль"
            type='password'
          />
          {errors?.password && (
            <span className="form__error-text">{errors.password.message}</span>
          )}

          <SubmitLink
            titleBtn="Войти"
            titleText="Ещё не зарегистрированы?"
            link="/signup"
            titleLink="Регистрация"
            login={true}
            isValid={isValid}
            errorStatus={errorStatus}
          />
        </form>
      </div>
    </section>
  );
};

export default Login;
