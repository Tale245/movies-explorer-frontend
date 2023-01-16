import React from "react";
import "./MoviesCard.css";

const MoviesCard = ({ img, title, time, savedMovies }) => {
  const [isLiked, setIsLiked] = React.useState(false);

  const handleLikeCard = () => {
    setIsLiked(true);
  };

  return (
    <>
      <div className="moviesCard">
        <img className="moviesCard__image" src={img} alt="постер к фильму" />
        <div className="moviesCard__container_description">
          <div className="moviesCard__container_text">
            <h2 className="moviesCard__title">{title}</h2>
            <p className="moviesCard__paragraph">{time}</p>
          </div>
          <div
            className={`moviesCard__container_like ${
              savedMovies && "moviesCard__container_dislike"
            }`}
          >
            {savedMovies === false && (
              <button
                className={`moviesCard__like-ico ${
                  isLiked && "moviesCard__like-ico_active"
                }`}
                onClick={handleLikeCard}
              ></button>
            )}
            {savedMovies && (
              <button className={`moviesCard__delete-ico`}></button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesCard;
