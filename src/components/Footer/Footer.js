import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container_paragraph">
          <p className="footer__paragraph">
            Учебный проект Яндекс.Практикум х BeatFilm.
          </p>
        </div>
        <div className="footer__container_text-communication">
          <p className="footer__author">&copy; 2023</p>
          <div className="footer__container_links">
            <a href="https://practicum.yandex.ru" className="footer__link">
              Яндекс.Практикум
            </a>
            <a href="https://github.com/Tale245" className="footer__link">
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
