import React from "react";
import "./MoviesCard.css";

const MoviesCard = ({
  country,
  description,
  director,
  duration,
  movieId,
  image,
  nameEN,
  nameRU,
  trailerLink,
  year,
  thumbnail,
  savedMovies,
  saveMovie,
  deleteMovie,
  setUploadPageWithSavedMovie,
  savesMovies,
  movies,
}) => {
  const [isClicked, setIsClicked] = React.useState(false);
  const handleLikeClick = () => {
    if (!isClicked) {
      saveMovie(
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        movieId,
        nameRU,
        nameEN
      );
      setUploadPageWithSavedMovie(true);
    } else {
      savesMovies.forEach((item) => {
        if (movieId === item.movieId) {
          deleteMovie(item._id);
        }
      });
      setUploadPageWithSavedMovie(true);
    }
    setIsClicked(!isClicked);
  };

  function getTimeFromMins(duration) {
    let hours = Math.trunc(duration / 60);
    let minutes = duration % 60;
    return `${hours + "ч " + minutes + "мин"}`;
  }

  const adjustedTime = getTimeFromMins(duration);

  const deleteSavedMovie = () => {
    deleteMovie(movieId);
  };

  return (
    <>
      <div className="moviesCard">
        <img
          className="moviesCard__image"
          src={savedMovies ? image : `https://api.nomoreparties.co/${image}`}
          alt="постер к фильму"
        />
        <div className="moviesCard__container-description">
          <div className="moviesCard__container-text">
            <h2 className="moviesCard__title">{nameRU}</h2>
            <p className="moviesCard__paragraph">{adjustedTime}</p>
          </div>
          <div
            className={`moviesCard__container-like ${
              savedMovies && "moviesCard__container-dislike"
            }`}
          >
            {savedMovies === false && (
              <button
                className={`moviesCard__like-ico ${
                  isClicked && "moviesCard__like-ico_active"
                }`}
                onClick={handleLikeClick}
              ></button>
            )}
            {savedMovies && (
              <button
                className={`moviesCard__delete-ico`}
                onClick={deleteSavedMovie}
              ></button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesCard;
// const handleLikeCard = () => {
//   if (isLiked === false) {
//     setIsLiked(true);
// saveMovie(
//   country,
//   director,
//   duration,
//   year,
//   description,
//   image,
//   trailerLink,
//   thumbnail,
//   movieId,
//   nameRU,
//   nameEN
// );
// setUploadPageWithSavedMovie(true);
//   }
//   if (isLiked === true) {
// savesMovies.forEach((item) => {
//   if (movieId === item.movieId) {
//     deleteMovie(item._id);
//   }
// });
// setIsLiked(false);
// setUploadPageWithSavedMovie(true);
//   }
// };
