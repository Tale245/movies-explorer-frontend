import React from "react";
import "./Register.css";
import WelcomeHeader from "../WelcomeHeader/WelcomeHeader";
import SubmitLink from "../SubmitLink/SubmitLink";
import { useForm } from "react-hook-form";

const Register = ({ signup, errorStatus }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    signup(data.name, data.email, data.password)
  };

  return (
    <section className="register">
      <div className="register__container">
        <WelcomeHeader title="Добро пожаловать!" />
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <span className="form__span">Имя</span>
          <input
            {...register("name", {
              required: "Это поле обязательно!",
              minLength: {
                value: 2,
                message: "Минимальная длинна поля 2 символа!",
              },
              maxLength: {
                value: 30,
                message: "Максимальная длинная поля 30 символов!",
              },
              pattern: {
                value: /^[A-zА-яё -]+$/,
                message: "Неккоректное имя пользователя!",
              },
            })}
            className={`form__input ${errors?.name && "form__input_error"}`}
            placeholder="Имя"
          />
          {errors?.name && (
            <span className="form__error-text">{errors.name.message}</span>
          )}

          <span className="form__span">E-mail</span>
          <input
            {...register("email", {
              required: "Это поле обязательно!",
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
              required: "Это обязательное поле!",
            })}
            className={`form__input ${errors?.password && "form__input_error"}`}
            placeholder="Пароль"
            type="password"
          />
          {errors?.password && (
            <span className="form__error-text">{errors.password.message}</span>
          )}
          <SubmitLink
            titleBtn="Зарегистрироваться"
            titleText="Уже зарегистрированы?"
            link="/signin"
            titleLink="Войти"
            login={false}
            isValid={isValid}
            errorStatus={errorStatus}
          />
        </form>
      </div>
    </section>
  );
};

export default Register;
