import React from "react";
import NavTab from "../NavTab/NavTab";
import Portfolio from "../Portfolio/Portfolio";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="aboutMe">
      <div className="aboutMe__container">
        <NavTab title="Студент" />
        <div className="aboutMe__container-info">
          <div className="aboutMe__container-description">
            <h2 className="aboutMe__name">Ренат</h2>
            <h3 className="aboutMe__job">Фронтенд-разработчик 21 год</h3>
            <p className="aboutMe__description">
              Я родился в Кирове, живу в Москве. Я люблю слушать музыку, а ещё
              увлекаюсь видеомонтажом. Недавно начал кодить. После того, как
              прошёл курс по веб-разработке, начал заниматься фриланс-заказами и
              ушёл с постоянной работы.
            </p>
            <a className="aboutMe__link" href="https://github.com/Tale245">
              GitHub
            </a>
          </div>
          <div className="aboutMe__image"></div>
        </div>
        <Portfolio />
      </div>
    </section>
  );
};

export default AboutMe;
