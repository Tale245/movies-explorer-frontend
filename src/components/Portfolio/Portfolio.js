import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <div className="porfolio__container-link">
        <a
          href="https://github.com/Tale245/how-to-learn"
          rel="noreferrer"
          target="_blank"
          className="portfolio__link"
        >
          Статичный сайт
        </a>
        <a
          href="https://github.com/Tale245/how-to-learn"
          rel="noreferrer"
          target="_blank"
          className="portfolio__ico"
        >
          ↗
        </a>
      </div>
      <div className="porfolio__container-link">
        <a
          href="https://github.com/Tale245/russian-travel"
          rel="noreferrer"
          target="_blank"
          className="portfolio__link"
        >
          Адаптивный сайт
        </a>
        <a
          href="https://github.com/Tale245/russian-travel"
          rel="noreferrer"
          target="_blank"
          className="portfolio__ico"
        >
          ↗
        </a>
      </div>
      <div className="porfolio__container-link">
        <a
          href="https://github.com/Tale245/react-mesto-api-full"
          rel="noreferrer"
          target="_blank"
          className="portfolio__link"
        >
          Одностраничное приложение
        </a>
        <a
          href="https://github.com/Tale245/react-mesto-api-full"
          rel="noreferrer"
          target="_blank"
          className="portfolio__ico"
        >
          ↗
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
