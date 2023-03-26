import React from "react";
import "./Techs.css";
import NavTab from "../NavTab/NavTab";

const Techs = () => {
  return (
    <section className="techs">
      <div className="techs__container">
        <NavTab title="Технологии" />
        <h2 className="techs__title">7 технологий</h2>
        <p className="techs__paragraph">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <div className="techs__container-icons">
          <div className="techs__icon">
            <p className="techs__text">HTML</p>
          </div>
          <div className="techs__icon">
            <p className="techs__text">CSS</p>
          </div>
          <div className="techs__icon">
            <p className="techs__text">JS</p>
          </div>
          <div className="techs__icon">
            <p className="techs__text">Reach</p>
          </div>
          <div className="techs__icon">
            <p className="techs__text">Git</p>
          </div>
          <div className="techs__icon">
            <p className="techs__text">Express.js</p>
          </div>
          <div className="techs__icon">
            <p className="techs__text">mongoDB</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Techs;
