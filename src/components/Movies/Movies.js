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
}) => {
  const [inputValue, setInputValue] = useState("");
  const [foundMovies, setFoundMovies] = useState([]);
  const [value, setValue] = useState(false);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  let moviesName = [];

  const searchMovie = (e) => {
    e.preventDefault();
    movies.filter((item) => {
      if (item.nameRU.includes(inputValue)) {
        moviesName.push(item);
        setFoundMovies(moviesName);
      }
    });
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
            movies={movies}
            handleInputValue={handleInputValue}
            searchMovie={searchMovie}
            setValue={setValue}
            value={value}
          />
          <MoviesCardList
            savedMovies={savedMovies}
            isSavedMovies={false}
            movies={movies}
            saveMovie={saveMovie}
            setUploadPageWithSavedMovie={setUploadPageWithSavedMovie}
            deleteMovie={deleteMovie}
            foundMovies={foundMovies}
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Movies;
