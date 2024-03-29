import React from "react";
import "./Promo.css";

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <div className="promo__container-logo">
          <div className="promo__logo"></div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
