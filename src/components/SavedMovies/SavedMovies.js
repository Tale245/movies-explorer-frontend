import React from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const SavedMovies = () => {
  return (
    <>
      <Header />
      <section className="savedMovies">
        <div className="savedMovies__container">
          <SearchForm />
          <MoviesCardList />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SavedMovies;
