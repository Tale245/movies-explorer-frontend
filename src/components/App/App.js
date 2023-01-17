import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";

function App() {
  const [isPopupMenuOpen, setIsPopupMenuOpen] = React.useState(false);

  const popupMenuOpen = () => {
    setIsPopupMenuOpen(true);
  };

  const closeAllPopups = () => {
    setIsPopupMenuOpen(false);
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
