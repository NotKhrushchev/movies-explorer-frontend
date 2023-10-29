// Работа с api

class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._defaultHeaders = { "Content-Type": "application/json" };
  }

  // Универсальная проверка ответа
  _checkAnswer(res) {
    if (res.ok) {
        return res.json()
    }
    return Promise.reject(res.status);
  }

  // Проверка токена
  getUserByToken(token) {
    return fetch(`${this._baseUrl}/users/me`, {
        method: 'GET',
        headers: {
          "Authorization" : `Bearer ${token}`,
          "Content-Type": "application/json"
        }
    })
      .then((res) => this._checkAnswer(res));
  }

  // Регистрация
  signUn(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._defaultHeaders,
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
      .then((res) => this._checkAnswer(res));
  }

  // Вход
  signIn(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._defaultHeaders,
      body: JSON.stringify({
        email,
        password
      })
    })
      .then((res) => this._checkAnswer(res));
  }

  editUser(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        "Authorization": `Bearer ${localStorage.jwt}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          name,
          email
      })
    })
      .then((res) => console.log(res))
  }
}

const auth = new MainApi({
  baseUrl: 'https://api.vmmoviesexplorer.nomoredomainsrocks.ru'
});

export default auth;