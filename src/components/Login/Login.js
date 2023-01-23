import React, { useState } from "react";
import "./Login.css";
import WelcomeHeader from "../WelcomeHeader/WelcomeHeader";
import SubmitLink from "../SubmitLink/SubmitLink";
import { useForm } from "react-hook-form";
import * as auth from "../../utils/Auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoggedIn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();

  const [errorStatusCode, setErrorStatusCode] = useState();

  const onSubmit = (data) => {
    console.log(data);
    auth
      .login(data.email, data.password)
      .then((res) => {
        if (res.statusCode || res.message) {
          setErrorStatusCode(res.statusCode || res.message);
        } else {
          setErrorStatusCode();
          setLoggedIn(true);
          navigate("/movies", { replace: true });
          reset();
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <section className="login">
      <div className="login__container">
        <WelcomeHeader title="Рады видеть!" />
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <span className="form__span">E-mail</span>
          <input
            {...register("email", {
              required: "Вы пропустили это поле!",
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
              required: "Вы пропустили это поле!",
            })}
            type="password"
            className={`form__input ${errors?.password && "form__input_error"}`}
            placeholder="Пароль"
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
            errorStatusCode={errorStatusCode}
          />
        </form>
      </div>
    </section>
  );
};

export default Login;
