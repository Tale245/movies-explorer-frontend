class MoviesApi {
  constructor() {
    this._baseUrl = "https://api.nomoreparties.co/beatfilm-movies";
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка ${res.status}`);
    }
  }

  getMovies() {
    return fetch(`${this._baseUrl}`, {
      method: "GET",
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
}

const moviesApi = new MoviesApi();

export default moviesApi;
