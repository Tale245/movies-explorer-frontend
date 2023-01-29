class MainApi {
  constructor() {
    this._baseUrl = "http://localhost:3001";
    this._tempToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Q1MWU5YjA2ZGEyMDE5MTg3MzI2ODgiLCJpYXQiOjE2NzQ5MTEzOTYsImV4cCI6MTY3NTUxNjE5Nn0.zIETJYhlfDuJCqCbdb3OOb5H9TfdlxPoLtcBvNyHJdU";
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка MainApi ${res.status}`);
    }
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${this._tempToken}`,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  saveMovie(
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
  ) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${this._tempToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: country,
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: `https://api.nomoreparties.co${image}`,
        trailerLink: trailerLink,
        nameRU: nameRU,
        nameEN: nameEN,
        thumbnail: `https://api.nomoreparties.co${thumbnail}`,
        movieId: movieId,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  deleteSavedMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${this._tempToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
  }
}

const mainApi = new MainApi();

export default mainApi;
