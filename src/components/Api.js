export default class Api {
  constructor(data) {
	const { baseUrl, headers } = data
	this._url = baseUrl;
	this._headers = headers;
  }

  _checkServerResponse(res) {
	if(res.ok) {
	  return res.json();
	}
	return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
	return fetch(`${this._url}/cards`, {
	  headers: this._headers,
	})
	.then(this._checkServerResponse);
  }

  createCard(data) {
	return fetch(`${this._url}/cards`, {
	  method: 'POST',
	  headers: this._headers,
	  body: JSON.stringify({
		name: data.name,
		link: data.link,
	  }),
	})
	.then(this._checkServerResponse);
  }

  deleteCard(cardId) {
	return fetch(`${this._url}/cards/${cardId}`, {
	  method: 'DELETE',
	  headers: this._headers,
	})
	.then(this._checkServerResponse);
  }

  addLike(cardId) {
	return fetch(`${this._url}/cards/${cardId}/likes`, {
	  method: 'PUT',
	  headers: this._headers,
	})
	.then(this._checkServerResponse);
  }

  deleteLike(cardId) {
	return fetch(`${this._url}/cards/${cardId}/likes`, {
	  method: 'DELETE',
	  headers: this._headers,
	})
	.then(this._checkServerResponse);
  }

  getUserInfo() {
	return fetch(`${this._url}/users/me`, {
	  headers: this._headers,
	})
	.then(this._checkServerResponse);
  }

  setUserInfo(data) {
	return fetch(`${this._url}/users/me`, {
	  method: 'PATCH',
	  headers: this._headers,
	  body: JSON.stringify({...data})
	})
	.then(this._checkServerResponse);
  }

  setUserAvatar(data) {
	return fetch(`${this._url}/users/me/avatar`, {
	  method: 'PATCH',
	  headers: this._headers,
	  body: JSON.stringify({...data})
	})
	.then(this._checkServerResponse);
	}
}