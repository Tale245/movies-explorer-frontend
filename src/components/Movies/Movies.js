import React from "react";
import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Movies = ({ popupMenuOpen, isPopupMenuOpen, closeAllPopups }) => {
  return (
    <>
      <Header
        whiteTheme={true}
        popupMenuOpen={popupMenuOpen}
        isPopupMenuOpen={isPopupMenuOpen}
        closeAllPopups={closeAllPopups}
      />
      <section className="movies">
        <div className="movies__container">
          <SearchForm />
          <MoviesCardList savedMovies={false} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Movies;
