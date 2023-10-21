// Работа с api фильмов
class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  // Универсальная проверка ответа
  _checkAnswer(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }
  
  // Получаю фильмы
  getMovies() {
    return fetch(this._baseUrl, {
      headers: this._headers
    })
    .then((res) => this._checkAnswer(res));
  }
};

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default moviesApi;