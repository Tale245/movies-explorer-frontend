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
  handleInputValue,
  searchMovie,
  foundMovies,
  value,
  setValue,
  notFoundMovies,
  foundSavedMovies,
  moviesError,
}) => {

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
