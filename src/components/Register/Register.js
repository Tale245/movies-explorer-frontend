import React, { useState } from "react";
import "./Register.css";
import WelcomeHeader from "../WelcomeHeader/WelcomeHeader";
import SubmitLink from "../SubmitLink/SubmitLink";
import { useForm } from "react-hook-form";
import * as auth from "../../utils/Auth";
import { useNavigate } from "react-router-dom";

const Register = ({ setLoggedIn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();

  const [errorStatusCode, setErrorStatusCode] = useState();

  const onSubmit = (data) => {
    auth
      .register(data.name, data.email, data.password)
      .then((res) => {
        if (res.status) {
          setErrorStatusCode(res.status);
        } else {
          auth
            .login(data.email, data.password)
            .then((res) => {
              if (res.statusCode) {
                setErrorStatusCode(res.statusCode);
              } else {
                setErrorStatusCode();
                setLoggedIn(true);
                navigate("/movies", { replace: true });
                reset();
              }
            })
            .catch((e) => console.log(e));
        }
      })
      .catch((e) => console.log(e));
  };
  return (
    <section className="register">
      <div className="register__container">
        <WelcomeHeader title="Добро пожаловать!" />
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <span className="form__span">Имя</span>
          <input
            {...register("name", {
              required: "Это обязательное поле!",
              pattern: {
                value: /^[A-zА-яё -]+$/,
                message: "Некорректное имя пользователя",
              },
              minLength: {
                value: 2,
                message: "Минимальная длина имени 2 символа",
              },
              maxLength: {
                value: 30,
                message: "Максимальная длина имени 30 символов",
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
              required: "Это обязательное поле!",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
            type="password"
            className={`form__input ${errors?.password && "form__input_error"}`}
            placeholder="Пароль"
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
            errorStatusCode={errorStatusCode}
          />
        </form>
      </div>
    </section>
  );
};

export default Register;
