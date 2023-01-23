import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";

const MoviesCardList = ({
  savedMovies,
  movies,
  saveMovie,
  deleteMovie,
  setUploadPageWithSavedMovie,
  savesMovies,
  foundMovies,
}) => {
  const [visible, setVisible] = React.useState(12);

  const showMoreItems = () => {
    setVisible((value) => {
      return value + 3;
    });
  };
  
  return (
    <section className="moviesCardList">
      <div className="moviesCardList__container">
        {foundMovies.slice(0, visible).map((item) => (
          <MoviesCard
            country={item.country}
            description={item.description}
            director={item.director}
            duration={item.duration}
            movieId={savedMovies ? item._id : item.id}
            image={savedMovies ? item.image : item.image.url}
            nameEN={item.nameEN}
            nameRU={item.nameRU}
            trailerLink={item.trailerLink}
            year={item.year}
            thumbnail={
              savedMovies ? item.thumbnail : item.image.formats.thumbnail.url
            }
            key={savedMovies ? item._id : item.id}
            savedMovies={savedMovies}
            saveMovie={saveMovie}
            deleteMovie={deleteMovie}
            setUploadPageWithSavedMovie={setUploadPageWithSavedMovie}
            savesMovies={savesMovies}
            movies={movies}
          />
        ))}
      </div>
      <Preloader showMoreItems={showMoreItems} />
    </section>
  );
};

export default MoviesCardList;