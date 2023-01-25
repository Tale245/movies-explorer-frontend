import React from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const SavedMovies = ({
  popupMenuOpen,
  isPopupMenuOpen,
  closeAllPopups,
  savedMovies,
  deleteMovie,
  loggedIn,
  handleInputValue,
  searchMovie,
  notFoundMovies,
  foundSavedMovies,
  value,
  setValue
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
      <section className="savedMovies">
        <div className="savedMovies__container">
          <SearchForm
            handleInputValue={handleInputValue}
            isSavedMovies={true}
            searchMovie={searchMovie}
            notFoundMovies={notFoundMovies}
            value={value}
            setValue={setValue}
          />
          <MoviesCardList
            isSavedMovies={true}
            savedMovies={savedMovies}
            deleteMovie={deleteMovie}
            foundSavedMovies={foundSavedMovies}
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SavedMovies;
