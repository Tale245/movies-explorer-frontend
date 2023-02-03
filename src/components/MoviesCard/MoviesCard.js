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
  setFoundSavedMoviesArray,
  foundSavedMoviesArray,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    savedMovies.filter((item) => {
      if (movieId === item.movieId) {
        setIsClicked(true);
      }
    });
  }, []);

  function getTimeFromMins(duration) {
    let hours = Math.trunc(duration / 60);
    let minutes = duration % 60;
    return `${hours + "ч " + minutes + "мин"}`;
  }

  const adjustedTime = getTimeFromMins(duration);

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
    foundSavedMoviesArray.filter((item) => {
      if (item._id.includes(movieId)) {
        const index = foundSavedMoviesArray.indexOf(item);
        if (index > -1) {
          foundSavedMoviesArray.splice(index, 1);
          localStorage.setItem(
            "foundSavedMovies",
            JSON.stringify(foundSavedMoviesArray)
          );
        }
      }
    });
  };
  return (
    <>
      <div className="moviesCard">
        <a href={trailerLink} target="_blank">
          <img
            className="moviesCard__image"
            src={isSavedMovies ? image : `https://api.nomoreparties.co${image}`}
            alt="постер к фильму"
          />
        </a>
        <div className="moviesCard__container-description">
          <div className="moviesCard__container-text">
            <h2 className="moviesCard__title">{nameRU}</h2>
            <p className="moviesCard__paragraph">{adjustedTime}</p>
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
