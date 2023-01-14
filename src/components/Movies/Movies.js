import React from "react";
import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Movies = ({}) => {
  return (
    <>
      <Header />
      <section className="movies">
        <div className="movies__container">
          <SearchForm />
          <MoviesCardList />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Movies;
