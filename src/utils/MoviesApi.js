class MoviesApi {
  constructor() {
    this._baseUrl = `https://api.nomoreparties.co/beatfilm-movies`;
    this._tempToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Q1MWU5YjA2ZGEyMDE5MTg3MzI2ODgiLCJpYXQiOjE2NzQ5MTEzOTYsImV4cCI6MTY3NTUxNjE5Nn0.zIETJYhlfDuJCqCbdb3OOb5H9TfdlxPoLtcBvNyHJdU";
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка BeatfilmMoviesApi ${res.status}`);
    }
  }

  getBeatfilmMovies() {
    return fetch(`${this._baseUrl}`).then((res) => {
      return this._checkResponse(res);
    });
  }
}

const moviesApi = new MoviesApi();

export default moviesApi;
