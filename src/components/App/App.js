import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import moviesApi from "../../utils/MoviesApi";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import mainApi from "../../utils/MainApi";
import auth from "../../utils/Auth";

function App() {
  const [isPopupMenuOpen, setIsPopupMenuOpen] = useState(false);
  const [uploadPageWithSavedMovies, setUlpoadPageWithSavedMovies] =
    useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [errorStatus, setErrorStatus] = useState();
  const [loggedIn, setLoggedIn] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      moviesApi
        .getBeatfilmMovies()
        .then((res) => {
          localStorage.setItem("BeatfilmMovies", JSON.stringify(res));
          setUlpoadPageWithSavedMovies(true);
        })
        .catch((e) => console.log(e));
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      mainApi.getSavedMovies().then((res) => {
        localStorage.setItem("savedMovies", JSON.stringify(res));
        setSavedMovies(JSON.parse(localStorage.getItem("savedMovies")));
        setUlpoadPageWithSavedMovies(false);
      });
    }
  }, [uploadPageWithSavedMovies]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      navigate("/movies");
    }
  }, [loggedIn]);

  const popupMenuOpen = () => {
    setIsPopupMenuOpen(true);
  };

  const closeAllPopups = () => {
    setIsPopupMenuOpen(false);
  };
  const signin = (email, password) => {
    auth
      .signin(email, password)
      .then((res) => {
        setErrorStatus("");
        localStorage.setItem("token", res.token);
        setLoggedIn(true);
        navigate("/movies");
      })
      .catch((e) => {
        console.log(e);
        setErrorStatus(e);
      });
  };

  const signup = (name, email, password) => {
    auth
      .signup(name, email, password)
      .then(() => {
        setErrorStatus("");
        signin(email, password);
      })
      .catch((e) => {
        console.log(e);
        setErrorStatus(e);
      });
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
        <Route path="/" element={<Main loggedIn={loggedIn} />} />
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
              loggedIn={loggedIn}
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
              loggedIn={loggedIn}
            />
          }
        />
        <Route
          path="/signup"
          element={<Register signup={signup} errorStatus={errorStatus} />}
        />
        <Route
          path="/signin"
          element={<Login signin={signin} errorStatus={errorStatus} />}
        />
        <Route
          path="/profile"
          element={
            <Profile
              popupMenuOpen={popupMenuOpen}
              isPopupMenuOpen={isPopupMenuOpen}
              closeAllPopups={closeAllPopups}
              loggedIn={loggedIn}
            />
          }
        />
        <Route path="/PageNotFound" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
