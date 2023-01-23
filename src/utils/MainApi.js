class MainApi {
  constructor() {
    this._baseUrl = "http://localhost:3001";
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка ${res.status}`);
    }
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  updateUserInfo(name, email) {
    debugger;
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  getSavedMovie() {
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
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
    thumbnail,
    movieId,
    nameRU,
    nameEN
  ) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: country,
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: `https://api.nomoreparties.co/${image}`,
        trailerLink: trailerLink,
        thumbnail: `https://api.nomoreparties.co/${thumbnail}`,
        movieId: movieId,
        nameRU: nameRU,
        nameEN: nameEN,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
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
