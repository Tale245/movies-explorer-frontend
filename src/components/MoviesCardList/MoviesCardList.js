import React, { useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import MoreBtn from "../MoreBtn/MoreBtn";
import Preloader from "../Preloader/Preloader";

const MoviesCardList = ({
  isSavedMovies,
  movies,
  saveMovie,
  deleteMovie,
  setUploadPageWithSavedMovie,
  savedMovies,
  foundMovies,
  usePreloader,
  notFoundMovies,
  moviesError,
  foundSavedMovies
}) => {
  const [visible, setVisible] = React.useState(12);
  const whatSavedMovis = foundSavedMovies.length > 0 ? foundSavedMovies : savedMovies

  const whatMovies = isSavedMovies
    ? whatSavedMovis
    : foundMovies.slice(0, visible);

  const showMoreItems = () => {
    setVisible((value) => {
      return value + 3;
    });
  };

  return (
    <section className="moviesCardList">
      {notFoundMovies && (
        <div className="moviesCardList__container-text">
          <p className="moviesCardList__text">Ничего не найдено</p>
        </div>
      )}
      {moviesError && (
        <div className="moviesCardList__container-text">
          <p className="moviesCardList__text">
            Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз
          </p>
        </div>
      )}
      <div className="moviesCardList__container">
        {!notFoundMovies &&
          whatMovies.map((item) => (
            <MoviesCard
              country={item.country}
              description={item.description}
              director={item.director}
              duration={item.duration}
              movieId={isSavedMovies ? item._id : item.id}
              image={isSavedMovies ? item.image : item.image.url}
              nameEN={item.nameEN}
              nameRU={item.nameRU}
              trailerLink={item.trailerLink}
              year={item.year}
              thumbnail={
                isSavedMovies
                  ? item.thumbnail
                  : item.image.formats.thumbnail.url
              }
              key={isSavedMovies ? item._id : item.id}
              isSavedMovies={isSavedMovies}
              saveMovie={saveMovie}
              deleteMovie={deleteMovie}
              setUploadPageWithSavedMovie={setUploadPageWithSavedMovie}
              savedMovies={savedMovies}
              movies={movies}
            />
          ))}
      </div>
      {usePreloader && <Preloader />}
      {isSavedMovies === false && <MoreBtn showMoreItems={showMoreItems} />}
    </section>
  );
};

export default MoviesCardList;
