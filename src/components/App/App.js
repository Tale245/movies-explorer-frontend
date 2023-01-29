import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import moviesApi from "../../utils/MoviesApi";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import mainApi from "../../utils/MainApi";

function App() {
  const [isPopupMenuOpen, setIsPopupMenuOpen] = useState(false);
  const [uploadPageWithSavedMovies, setUlpoadPageWithSavedMovies] =
    useState(false);
  const [savedMovies, setSavedMovies] = useState([])

  useEffect(() => {
    moviesApi
      .getBeatfilmMovies()
      .then((res) => {
        localStorage.setItem("BeatfilmMovies", JSON.stringify(res))
        setUlpoadPageWithSavedMovies(true)
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    mainApi.getSavedMovies().then((res) => {
      localStorage.setItem("savedMovies", JSON.stringify(res));
      setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')))
      setUlpoadPageWithSavedMovies(false);
    });
  }, [uploadPageWithSavedMovies]);

  const popupMenuOpen = () => {
    setIsPopupMenuOpen(true);
  };

  const closeAllPopups = () => {
    setIsPopupMenuOpen(false);
  };

  const saveMovie = (
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId
  ) => {
    mainApi
      .saveMovie(
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        movieId
      )
      .then(() => {
        setUlpoadPageWithSavedMovies(true);
      })
      .catch((e) => console.log(e));
  };

  const deleteSavedMovies = (id) => {
    mainApi
      .deleteSavedMovie(id)
      .then(() => {
        setUlpoadPageWithSavedMovies(true);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/movies"
          element={
            <Movies
              popupMenuOpen={popupMenuOpen}
              isPopupMenuOpen={isPopupMenuOpen}
              closeAllPopups={closeAllPopups}
              saveMovie={saveMovie}
              deleteSavedMovies={deleteSavedMovies}
              savedMovies={savedMovies}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <SavedMovies
              popupMenuOpen={popupMenuOpen}
              isPopupMenuOpen={isPopupMenuOpen}
              closeAllPopups={closeAllPopups}
              deleteSavedMovies={deleteSavedMovies}
              savedMovies={savedMovies}
            />
          }
        />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route
          path="/profile"
          element={
            <Profile
              popupMenuOpen={popupMenuOpen}
              isPopupMenuOpen={isPopupMenuOpen}
              closeAllPopups={closeAllPopups}
            />
          }
        />
        <Route path="/PageNotFound" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
