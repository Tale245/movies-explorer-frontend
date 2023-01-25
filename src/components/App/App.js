import React from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
function App() {
  const [isPopupMenuOpen, setIsPopupMenuOpen] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [uploadPageWithSavedMovie, setUploadPageWithSavedMovie] =
    React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({});
  const [usePreloader, setUsePreloader] = React.useState(false);

  const [foundMovies, setFoundMovies] = React.useState([]);
  const [foundSavedMovies, setFoundSavedMovies] = React.useState([]);
  const [notFoundMovies, setNotFoundMovies] = React.useState(false);
  const [moviesError, setMoviesError] = React.useState(false);

  React.useEffect(() => {
    if (loggedIn) {
      moviesApi
        .getMovies()
        .then((res) => {
          setUploadPageWithSavedMovie(true);
          localStorage.setItem("movies", JSON.stringify(res));
          setMovies(res);
        })
        .catch(() => {
          setMoviesError(true);
        });

      mainApi.getUserInfo().then((res) => {
        const userData = {
          email: res.email,
          name: res.name,
        };
        setUserInfo(userData);
      });
    }
  }, [loggedIn]);

  React.useEffect(() => {
    if (loggedIn) {
      mainApi
        .getSavedMovie()
        .then((res) => {
          setUploadPageWithSavedMovie(false);
          localStorage.setItem("savedMovies", JSON.stringify(res));
          setFoundSavedMovies(JSON.parse(localStorage.getItem('savedFoundMovies')))
          setSavedMovies(res);
        })
        .catch(() => {
          setMoviesError(true);
        });
    }
    console.log(savedMovies);

  }, [uploadPageWithSavedMovie]);

  // let moviesName = [];

  // // Поиск по фильмам
  // const searchMovie = (e, isSavedMovies) => {
  //   e.preventDefault();
  //   if (!moviesError) {
  //     setUsePreloader(true);
  //     const whatMovies = isSavedMovies
  //       ? savedMovies
  //       : movies;
  //     whatMovies.filter((item) => {
  //       if (
  //         value
  //           ? item.nameRU.includes(inputValue) && item.duration <= 40
  //           : item.nameRU.includes(inputValue)
  //       ) {
  //         moviesName.push(item);
  //         if(isSavedMovies){
  //           setFoundSavedMovies(moviesName)
  //         } else{
  //           setFoundMovies(moviesName);
  //         }
  //       }
  //     });
  //     if (moviesName.length === 0) {
  //       setNotFoundMovies(true);
  //     } else {
  //       setNotFoundMovies(false);
  //     }
  //     setUsePreloader(false);
  //   }
  // };
  const navigate = useNavigate();

  const tokenCheck = (token) => {
    if (token) {
      mainApi.getUserInfo().then((res) => {
        const userData = {
          email: res.email,
          name: res.name,
        };
        setUserInfo(userData);
        navigate("/movies", { replace: true });
      });
      setLoggedIn(true);
    }
  };

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    tokenCheck(token);
  }, []);

  const updateUserInfo = (name, email) => {
    mainApi.updateUserInfo(name, email).then((res) => {
      const userData = {
        email: res.email,
        name: res.name,
      };
      setUserInfo(userData);
    });
  };
  const deleteMovie = (id) => {
    mainApi.deleteMovie(id);
    setUploadPageWithSavedMovie(true);
  };
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
    thumbnail,
    movieId,
    nameRU,
    nameEN
  ) => {
    mainApi.saveMovie(
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      movieId,
      nameRU,
      nameEN
    );
  };
  return (
    <div>
      <Routes>
        <Route
          path="/movies"
          element={
            <ProtectedRoute
              path="/movies"
              movies={movies}
              saveMovie={saveMovie}
              popupMenuOpen={popupMenuOpen}
              isPopupMenuOpen={isPopupMenuOpen}
              closeAllPopups={closeAllPopups}
              setUploadPageWithSavedMovie={setUploadPageWithSavedMovie}
              deleteMovie={deleteMovie}
              savedMovies={savedMovies}
              loggedIn={loggedIn}
              element={Movies}
              usePreloader={usePreloader}
              setUsePreloader={setUsePreloader}
              foundMovies={foundMovies}
              notFoundMovies={notFoundMovies}
              moviesError={moviesError}
              foundSavedMovies={foundSavedMovies}
              setFoundMovies={setFoundMovies}
              setFoundSavedMovies={setFoundSavedMovies}
              setNotFoundMovies={setNotFoundMovies}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute
              path="/saved-movies"
              loggedIn={loggedIn}
              element={SavedMovies}
              popupMenuOpen={popupMenuOpen}
              isPopupMenuOpen={isPopupMenuOpen}
              closeAllPopups={closeAllPopups}
              savedMovies={savedMovies}
              deleteMovie={deleteMovie}
              usePreloader={usePreloader}
              setUsePreloader={setUsePreloader}
              foundMovies={foundMovies}
              notFoundMovies={notFoundMovies}
              foundSavedMovies={foundSavedMovies}
              moviesError={moviesError}
              setFoundMovies={setFoundMovies}
              setFoundSavedMovies={setFoundSavedMovies}
              setNotFoundMovies={setNotFoundMovies}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              path="/profile"
              loggedIn={loggedIn}
              element={Profile}
              popupMenuOpen={popupMenuOpen}
              isPopupMenuOpen={isPopupMenuOpen}
              closeAllPopups={closeAllPopups}
              userInfo={userInfo}
              updateUserInfo={updateUserInfo}
            />
          }
        />
        <Route
          exact
          path="/"
          element={!loggedIn && <Navigate to="/signin" replace />}
        />
        <Route path="/main-page" element={<Main loggedIn={loggedIn} />} />
        <Route
          path="/signup"
          element={<Register setLoggedIn={setLoggedIn} />}
        />
        <Route path="/signin" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
