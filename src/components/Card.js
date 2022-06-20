export class Card {
  constructor(data, cardSelector, { handleCardClick }) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._element = this._getCardTemplate();
    this._buttonLikeToggle = this._element.querySelector(
      ".element__like-button"
    );
    this._titleCard = this._element.querySelector(".element__title");
    this._imageCard = this._element.querySelector(".element__image");
    this._deleteCardButton = this._element.querySelector(
      ".element__delete-button"
    );
    this._handleCardClick = handleCardClick;
  }

  _getCardTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._setEventListeners();
    this._imageCard.alt = this._name;
    this._imageCard.src = this._link;
    this._titleCard.textContent = this._name;

    return this._element;
  }

  _deleteCardTemplate() {
    this._element.remove();
    this._element = null;
  }

  _likeButton() {
    this._buttonLikeToggle.classList.toggle("element__like-button_active");
  }

  _setEventListeners() {
    this._buttonLikeToggle.addEventListener("click", () => this._likeButton());
    this._deleteCardButton.addEventListener("click", () =>
      this._deleteCardTemplate()
    );
    this._element
      .querySelector(".element__image")
      .addEventListener("click", () => this._handleCardClick(this._data));
  }
}
