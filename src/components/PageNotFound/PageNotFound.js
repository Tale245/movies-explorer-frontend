import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <section className="pageNotFound">
      <div className="pageNotFound__container">
        <h1 className="pageNotFound__title">404</h1>
        <p className="pageNotFound__paragraph">Страница не найдена</p>
        <Link to="/main-page" className="pageNotFound__btn-back">
          Назад
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
