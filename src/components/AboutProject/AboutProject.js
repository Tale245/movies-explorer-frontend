import React from "react";
import NavTab from "../NavTab/NavTab";
import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section className="about-project">
      <div className="about-project__container">
        <NavTab title="О проекте" />
        <div className="about-project__container-description">
          <div className="about-project__container-text">
            <h2 className="about-project__text">
              Дипломный проект включал 5 этапов
            </h2>
            <p className="about-project__paragraph">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__container-text">
            <h2 className="about-project__text">
              На выполнение диплома ушло 5 недель
            </h2>
            <p className="about-project__paragraph">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__container-timeline">
          <div className="about-project__time-element">
            <div className="about-project__element about-project__element_dark">
              <p className="about-project__time-text">1 неделя</p>
            </div>
            <span className="about-project__span">Back-end</span>
          </div>
          <div className="about-project__time-element">
            <div className="about-project__element about-project__element_light">
              <p className="about-project__time-text about-project__time-text_light">
                4 недели
              </p>
            </div>
            <span className="about-project__span">Front-end</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
