import React, { useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";

const MoviesCardList = ({
  isSavedMovies,
  movies,
  saveMovie,
  deleteMovie,
  setUploadPageWithSavedMovie,
  savedMovies,
  foundMovies,
}) => {
  const [visible, setVisible] = React.useState(12);

  const showMoreItems = () => {
    setVisible((value) => {
      return value + 3;
    });
  };
  
  const whatMovies = isSavedMovies ? savedMovies : foundMovies.slice(0, visible)

  return (
    <section className="moviesCardList">
      <div className="moviesCardList__container">
        {whatMovies.map((item) => (
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
              isSavedMovies ? item.thumbnail : item.image.formats.thumbnail.url
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
      <Preloader showMoreItems={showMoreItems} />
    </section>
  );
};

export default MoviesCardList;