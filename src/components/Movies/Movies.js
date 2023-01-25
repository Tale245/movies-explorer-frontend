import React, { useState } from "react";
import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Movies = ({
  popupMenuOpen,
  isPopupMenuOpen,
  closeAllPopups,
  movies,
  saveMovie,
  setUploadPageWithSavedMovie,
  deleteMovie,
  savedMovies,
  loggedIn,
  usePreloader,
  setUsePreloader,
  foundMovies,
  notFoundMovies,
  foundSavedMovies,
  moviesError,
  setFoundMovies,
  setFoundSavedMovies,
  setNotFoundMovies,
}) => {
  const [value, setValue] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(localStorage.getItem('inputValueMovie'));

  let moviesName = [];

  // Поиск по фильмам
  const searchMovie = (e) => {
    e.preventDefault();
    if (!moviesError) {
      setUsePreloader(true);
      movies.filter((item) => {
        if (
          value
            ? item.nameRU.includes(inputValue) && item.duration <= 40
            : item.nameRU.includes(inputValue)
        ) {
          moviesName.push(item);
          setFoundMovies(moviesName);
        }
      });
      if (moviesName.length === 0) {
        setNotFoundMovies(true);
      } else {
        setNotFoundMovies(false);
      }
      setUsePreloader(false);
    }
  };

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
    localStorage.setItem('inputValueMovie', e.target.value)
    console.log(inputValue);
  };

  return (
    <>
      <Header
        whiteTheme={true}
        popupMenuOpen={popupMenuOpen}
        isPopupMenuOpen={isPopupMenuOpen}
        closeAllPopups={closeAllPopups}
        loggedIn={loggedIn}
      />
      <section className="movies">
        <div className="movies__container">
          <SearchForm
            handleInputValue={handleInputValue}
            searchMovie={searchMovie}
            setValue={setValue}
            value={value}
            setUsePreloader={setUsePreloader}
            moviesError={moviesError}
            isSavedMovies={false}
            inputValue={inputValue}
          />
          <MoviesCardList
            savedMovies={savedMovies}
            isSavedMovies={false}
            movies={movies}
            saveMovie={saveMovie}
            setUploadPageWithSavedMovie={setUploadPageWithSavedMovie}
            deleteMovie={deleteMovie}
            foundMovies={foundMovies}
            usePreloader={usePreloader}
            setUsePreloader={setUsePreloader}
            notFoundMovies={notFoundMovies}
            moviesError={moviesError}
            foundSavedMovies={foundSavedMovies}
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Movies;
