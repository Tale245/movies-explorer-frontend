import React, { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import BtnElse from "../BtnElse/BtnElse";

const MoviesCardList = ({
  isSavedMovies,
  beatfilmMovies,
  saveMovie,
  deleteSavedMovies,
  savedMovies,
}) => {
  const [step, setStep] = useState(12);
  const [count, setCount] = useState(3);
  const [isMoreThreeCards, setIsMoreThreeCards] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", (resize) => {
      if (resize.currentTarget.innerWidth >= 1214) {
        setStep(12);
      } else if (resize.currentTarget.innerWidth >= 701) {
        setStep(8);
        setCount(3);
      } else if (resize.currentTarget.innerWidth < 701) {
        setStep(5);
        setCount(2);
      }
    });
    if (!isSavedMovies) {
      if (beatfilmMovies.length > 3) {
        setIsMoreThreeCards(true);
      }
    }
  }, []);

  const handleStep = () => {
    setStep(step + count);
  };
  const whatMovie = isSavedMovies ? savedMovies : beatfilmMovies.slice(0, step);
  return (
    <section className="moviesCardList">
      <div className="moviesCardList__container">
        {whatMovie.slice(0, step).map((item) => (
          <MoviesCard
            key={isSavedMovies ? item.movieId : item.id}
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
              isSavedMovies ? item.thumbnail : item.image.formats.thumbnail.url
            }
            movieId={isSavedMovies ? item._id : item.id}

            saveMovie={saveMovie}
            isSavedMovies={isSavedMovies}
            deleteSavedMovies={deleteSavedMovies}
            savedMovies={savedMovies}
          />
        ))}
      </div>
      {isMoreThreeCards && <BtnElse handleStep={handleStep} />}
    </section>
  );
};

export default MoviesCardList;
