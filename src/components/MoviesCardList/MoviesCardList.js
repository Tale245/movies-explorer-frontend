import React, { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import BtnElse from "../BtnElse/BtnElse";
import Preloader from "../Preloader/Preloader";

const MoviesCardList = ({
  isSavedMovies,
  saveMovie,
  deleteSavedMovies,
  savedMovies,
  foundMoviesArray,
  notFound,
  notFoundText,
  foundSavedMoviesArray,
  usePreloader,
  setFoundSavedMoviesArray,
  newInputRequest,
  setNewInputRequest,
}) => {
  const [step, setStep] = useState(12);
  const [count, setCount] = useState(3);
  const [hiddenBtn, setHiddenBtn] = useState(false);
  const widthApp = (size) => {
    if (size >= 1214) {
      setStep(12);
      setCount(3);
    } else if (size >= 701) {
      setStep(8);
      setCount(2);
    } else if (size < 701) {
      setStep(5);
    }
  };

  useEffect(() => {
    if (newInputRequest) {
      widthApp(window.innerWidth);
    }
    setNewInputRequest(false);
  }, [newInputRequest]);

  useEffect(() => {
    window.addEventListener("resize", (resize) => {
      widthApp(resize.currentTarget.innerWidth);
    });
  }, []);

  useEffect(() => {
    if (!isSavedMovies) {
      if (foundMoviesArray.length <= step) {
        setHiddenBtn(true);
      } else {
        setHiddenBtn(false);
      }
    } else {
      setHiddenBtn(true);
    }
  });

  const handleStep = () => {
    setStep(step + count);
  };
  const whatSavedMoviesArray =
    isSavedMovies && foundSavedMoviesArray.length > 0
      ? foundSavedMoviesArray
      : savedMovies;
  const whatMovieArray =
    foundMoviesArray === undefined || foundMoviesArray === null
      ? []
      : foundMoviesArray.slice(0, step);
  const whatMovie = isSavedMovies ? whatSavedMoviesArray : whatMovieArray;
  return (
    <section className="moviesCardList">
      {notFound && <p className="moviesCardList__paragraph">{notFoundText}</p>}
      {usePreloader ? (
        <Preloader />
      ) : (
        <div className="moviesCardList__container">
          {whatMovie.map((item) => (
            <MoviesCard
              key={isSavedMovies ? item._id : item.id}
              country={item.country}
              director={item.director}
              duration={item.duration}
              year={item.year}
              description={item.description}
              image={isSavedMovies ? item.image : item.image.url}
              trailerLink={item.trailerLink}
              nameRU={item.nameRU}
              nameEN={item.nameEN}
              thumbnail={
                isSavedMovies
                  ? item.thumbnail
                  : item.image.formats.thumbnail.url
              }
              movieId={isSavedMovies ? item._id : item.id}
              saveMovie={saveMovie}
              isSavedMovies={isSavedMovies}
              deleteSavedMovies={deleteSavedMovies}
              savedMovies={savedMovies}
              setFoundSavedMoviesArray={setFoundSavedMoviesArray}
              foundSavedMoviesArray={foundSavedMoviesArray}
            />
          ))}
        </div>
      )}
      {hiddenBtn === false && <BtnElse handleStep={handleStep} />}
    </section>
  );
};

export default MoviesCardList;
