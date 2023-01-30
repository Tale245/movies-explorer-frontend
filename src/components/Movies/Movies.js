import React, { useEffect, useState } from "react";
import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Movies = ({
  popupMenuOpen,
  isPopupMenuOpen,
  closeAllPopups,
  saveMovie,
  deleteSavedMovies,
  savedMovies,
  loggedIn
}) => {
  const [beatfilmMovies, setbeatfilmMovies] = useState(
    JSON.parse(localStorage.getItem("BeatfilmMovies"))
  );

  return (
    <>
      <Header
        loggedIn={loggedIn}
        popupMenuOpen={popupMenuOpen}
        isPopupMenuOpen={isPopupMenuOpen}
        closeAllPopups={closeAllPopups}
      />
      <section className="movies">
        <div className="movies__container">
          <SearchForm />
          <MoviesCardList
            beatfilmMovies={beatfilmMovies}
            isSavedMovies={false}
            saveMovie={saveMovie}
            deleteSavedMovies={deleteSavedMovies}
            savedMovies={savedMovies}
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Movies;
