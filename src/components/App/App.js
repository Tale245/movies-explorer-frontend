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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [isPopupMenuOpen, setIsPopupMenuOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [uploadPageWithSavedMovies, setUlpoadPageWithSavedMovies] =
    useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [errorStatus, setErrorStatus] = useState();
  const [errorStatusLogin, setErrorStatusLogin] = useState();
  const [errorStatusRegister, setErrorStatusRegister] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  const [loggedIn, setLoggedIn] = useState();
  const [userData, setUserData] = useState("");
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

      mainApi
        .getUserInfo()
        .then((res) => setUserData(res))
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
      navigate("/movies", { replace: true });
    }
  }, [loggedIn]);

  const popupMenuOpen = () => {
    setIsPopupMenuOpen(true);
  };

  const closeAllPopups = () => {
    setIsPopupMenuOpen(false);
    setIsInfoTooltipOpen(false);
  };
  const signin = (email, password) => {
    auth
      .signin(email, password)
      .then((res) => {
        setErrorStatusLogin("");
        localStorage.setItem("token", res.token);
        setLoggedIn(true);
        navigate("/movies");
      })
      .catch((e) => {
        console.log(e);
        setErrorStatusLogin(e);
      });
  };

  const signup = (name, email, password) => {
    auth
      .signup(name, email, password)
      .then(() => {
        setErrorStatusRegister("");
        signin(email, password);
      })
      .catch((e) => {
        console.log(e);
        setErrorStatusRegister(e);
      });
  };

  const updateUserInfo = (name, email) => {
    mainApi
      .updateUserInfo(name, email)
      .then((res) => {
        setUserData(res);
        setErrorStatus("");
        setIsSuccess(true);
        setIsInfoTooltipOpen(true);
      })
      .catch((e) => {
        console.log(e);
        setErrorStatus(e);
        setIsSuccess(false);
        setIsInfoTooltipOpen(true);
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

  const exit = () => {
    setErrorStatus("");
    localStorage.removeItem("token");
    navigate("/");
    setLoggedIn(false);
  };

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Main loggedIn={loggedIn} />} />
        <Route
          path="/movies"
          element={
            <ProtectedRoute
              path="/movies"
              element={Movies}
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
            <ProtectedRoute
              path="/saved-movies"
              element={SavedMovies}
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
          path="/profile"
          element={
            <ProtectedRoute
              path="/profile"
              element={Profile}
              popupMenuOpen={popupMenuOpen}
              isPopupMenuOpen={isPopupMenuOpen}
              closeAllPopups={closeAllPopups}
              loggedIn={loggedIn}
              userData={userData}
              updateUserInfo={updateUserInfo}
              isSuccess={isSuccess}
              isInfoTooltipOpen={isInfoTooltipOpen}
              errorStatus={errorStatus}
              exit={exit}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Register signup={signup} errorStatus={errorStatusRegister} />
          }
        />
        <Route
          path="/signin"
          element={<Login signin={signin} errorStatus={errorStatusLogin} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
