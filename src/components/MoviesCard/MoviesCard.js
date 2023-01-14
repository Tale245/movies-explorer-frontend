import React from "react";
import "./MoviesCard.css";

const MoviesCard = ({img, title, time}) => {
  return (
    <>
    <div className="moviesCard">
        <img
          className="moviesCard__image"
          src={img}
          alt="постер к фильму"
        />
        <div className="moviesCard__container_description">
          <div className="moviesCard__container_text">
            <h2 className="moviesCard__title">{title}</h2>
            <p className="moviesCard__paragraph">{time}</p>
          </div>
          <div className="moviesCard__container_like">
            <button className='moviesCard__like-ico' ></button>
          </div>
        </div>
    </div>
    </>
  );
};

export default MoviesCard;
