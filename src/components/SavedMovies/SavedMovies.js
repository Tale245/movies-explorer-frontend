import React, { useEffect, useState } from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const SavedMovies = ({
  popupMenuOpen,
  isPopupMenuOpen,
  closeAllPopups,
  deleteSavedMovies,
  savedMovies,
  loggedIn,
  usePreloader,
  setSavedMovies,
  errorStatusSavedMovies,
  newInputRequest,
  setNewInputRequest,
}) => {
  const [foundSavedMoviesArray, setFoundSavedMoviesArray] = useState([]);
  const [searchSavedInputValue, setSearchSavedInputValue] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [notFoundText, setNotFoundText] = useState("");
  const [value, setValue] = useState(false);
  let tempArray = [];

  if(foundSavedMoviesArray === null || foundSavedMoviesArray === undefined) {
    setFoundSavedMoviesArray([])
  }

  useEffect(() => {
    if (errorStatusSavedMovies) {
      setNotFound(true);
      setNotFoundText(
        "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
      );
      setFoundSavedMoviesArray([]);
      setSavedMovies([]);
    } else {
      setNotFound(false);
      setNotFoundText("");
      setFoundSavedMoviesArray(
        JSON.parse(localStorage.getItem("foundSavedMovies"))
      );
    }
  }, [errorStatusSavedMovies]);

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
            oldArray={savedMovies}
            setNewArray={setFoundSavedMoviesArray}
            newArray={foundSavedMoviesArray}
            inputValue={searchSavedInputValue}
            tempArray={tempArray}
            checkboxValue={value}
            searchInputValue={setSearchSavedInputValue}
            setNotFound={setNotFound}
            setNotFoundText={setNotFoundText}
            setValue={setValue}
            isSavedMovies={true}
            newInputRequest={newInputRequest}
            setNewInputRequest={setNewInputRequest}
          />
          <MoviesCardList
            isSavedMovies={true}
            savedMovies={savedMovies}
            deleteSavedMovies={deleteSavedMovies}
            notFound={notFound}
            notFoundText={notFoundText}
            foundSavedMoviesArray={foundSavedMoviesArray}
            usePreloader={usePreloader}
            setFoundSavedMoviesArray={setFoundSavedMoviesArray}
            newInputRequest={newInputRequest}
            setNewInputRequest={setNewInputRequest}
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SavedMovies;
