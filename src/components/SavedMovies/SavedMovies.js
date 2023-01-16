import React from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const SavedMovies = ({ popupMenuOpen, isPopupMenuOpen, closeAllPopups }) => {
  return (
    <>
      <Header
        whiteTheme={true}
        popupMenuOpen={popupMenuOpen}
        isPopupMenuOpen={isPopupMenuOpen}
        closeAllPopups={closeAllPopups}
      />
      <section className="savedMovies">
        <div className="savedMovies__container">
          <SearchForm />
          <MoviesCardList savedMovies={true} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SavedMovies;
