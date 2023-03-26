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
  loggedIn,
  errorStatusMovies,
  usePreloader,
  newInputRequest,
  setNewInputRequest
}) => {
  const isThereAnArray =
    JSON.parse(localStorage.getItem("foundMovies")) === null
      ? []
      : JSON.parse(localStorage.getItem("foundMovies"));
  const tempbeatfilmMovies =
    JSON.parse(localStorage.getItem("BeatfilmMovies")) === null
      ? []
      : JSON.parse(localStorage.getItem("BeatfilmMovies"));

  const [beatfilmMovies, setbeatfilmMovies] = useState(tempbeatfilmMovies);
  const [foundMoviesArray, setFoundMoviesArray] = useState(isThereAnArray);
  const [searchInputValue, setSearchInputValue] = useState(
    localStorage.getItem("searchInputTargetValue")
  );
  const [notFound, setNotFound] = useState(false);
  const [notFoundText, setNotFoundText] = useState("");
  const tempValue=
  JSON.parse(localStorage.getItem("checkboxValue")) === null
    ? false
    : JSON.parse(localStorage.getItem("checkboxValue"));

  const [value, setValue] = useState(tempValue);
  let tempArray = [];

  useEffect(() => {
    if (errorStatusMovies) {
      setNotFound(true);
      setNotFoundText(
        "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
      );
      setFoundMoviesArray([]);
      setbeatfilmMovies([]);
    } else {
      setNotFound(false);
      setNotFoundText("");
      setFoundMoviesArray(JSON.parse(localStorage.getItem("foundMovies")));
    }
  }, [errorStatusMovies]);

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
          <SearchForm
            oldArray={beatfilmMovies}
            setNewArray={setFoundMoviesArray}
            newArray={foundMoviesArray}
            inputValue={searchInputValue}
            tempArray={tempArray}
            checkboxValue={value}
            localStorageName="foundMovies"
            searchInputValue={setSearchInputValue}
            nameSearchInputValue="searchInputTargetValue"
            setNotFound={setNotFound}
            setNotFoundText={setNotFoundText}
            setValue={setValue}
            isSavedMovies={false}
            setNewInputRequest={setNewInputRequest}
          />
          <MoviesCardList
            foundMoviesArray={foundMoviesArray}
            isSavedMovies={false}
            saveMovie={saveMovie}
            deleteSavedMovies={deleteSavedMovies}
            savedMovies={savedMovies}
            notFound={notFound}
            notFoundText={notFoundText}
            usePreloader={usePreloader}
            newInputRequest={newInputRequest}
            setNewInputRequest={setNewInputRequest}
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Movies;
