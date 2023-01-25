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
  notFoundMovies,
  foundSavedMovies,
  moviesError,
  setFoundMovies,
  setFoundSavedMovies,
  setNotFoundMovies,
  setUsePreloader,
  movies,
}) => {
  const [value, setValue] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(localStorage.getItem('inputValueSavedMovies'));

  let moviesName = [];

  // Поиск по фильмам
  const searchMovie = (e) => {
    e.preventDefault();
    if (!moviesError) {
      setUsePreloader(true);

      savedMovies.filter((item) => {
        if (
          value
            ? item.nameRU.includes(inputValue) && item.duration <= 40
            : item.nameRU.includes(inputValue)
        ) {
          moviesName.push(item);
          setFoundSavedMovies(moviesName);
          localStorage.setItem('savedFoundMovies', JSON.stringify(moviesName))
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
    localStorage.setItem('inputValueSavedMovies', e.target.value)
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
      <section className="savedMovies">
        <div className="savedMovies__container">
          <SearchForm
            handleInputValue={handleInputValue}
            isSavedMovies={true}
            searchMovie={searchMovie}
            notFoundMovies={notFoundMovies}
            value={value}
            setValue={setValue}
            inputValue={inputValue}
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
