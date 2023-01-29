import React, { useEffect, useState } from "react";
import "./MoviesCard.css";

const MoviesCard = ({
  country,
  director,
  duration,
  year,
  description,
  image,
  trailerLink,
  nameRU,
  nameEN,
  thumbnail,
  movieId,

  saveMovie,
  isSavedMovies,
  deleteSavedMovies,
  savedMovies,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    savedMovies.filter((item) => {
      if (movieId === item.movieId) {
        setIsClicked(true)
      }
    });
  }, []);

  const handleCardClick = () => {
    if (!isClicked) {
      saveMovie(
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        movieId
      );
    } else {
      savedMovies.filter((item) => {
        if (movieId === item.movieId) {
          deleteSavedMovies(item._id);
        }
      });
    }
    setIsClicked(!isClicked);
  };

  const handleCardDelete = () => {
    deleteSavedMovies(movieId);
  };

  return (
    <>
      <div className="moviesCard">
        <img
          className="moviesCard__image"
          src={isSavedMovies ? image : `https://api.nomoreparties.co${image}`}
          alt="постер к фильму"
        />
        <div className="moviesCard__container-description">
          <div className="moviesCard__container-text">
            <h2 className="moviesCard__title">{nameRU}</h2>
            <p className="moviesCard__paragraph">{duration}</p>
          </div>
          <div
            className={`moviesCard__container-like ${
              isSavedMovies && "moviesCard__container-dislike"
            }`}
          >
            {isSavedMovies === false && (
              <button
                className={`moviesCard__like-ico ${
                  isClicked && "moviesCard__like-ico_active"
                }`}
                onClick={handleCardClick}
              ></button>
            )}
            {isSavedMovies && (
              <button
                className={`moviesCard__delete-ico`}
                onClick={handleCardDelete}
              ></button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesCard;
