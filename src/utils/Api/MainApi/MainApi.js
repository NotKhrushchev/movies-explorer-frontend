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

  signUn(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    })
    .then(res => this._checkAnswer(res));
  }
}

const auth = new MainApi({
  baseUrl: 'https://api.vmmoviesexplorer.nomoredomainsrocks.ru'
});

export default auth;