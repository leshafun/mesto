import { openPopup } from "./index.js";

export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._element = this._getCardTemplate();
    this._buttonLikeToggle = this._element.querySelector(
      ".element__like-button"
    );
    this._popupShowImage = document.querySelector(".popup_show-image");
    this._popupImage = this._popupShowImage.querySelector(".popup__image");
    this._popupImageTitle = this._popupShowImage.querySelector(
      ".popup__image-title"
    );
    this._titleCard = this._element.querySelector(".element__title");
    this._imageCard = this._element.querySelector(".element__image");
    this._deleteCardButton = this._element.querySelector(
      ".element__delete-button"
    );
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

  _openPopupImage() {
    this._popupImage.alt = this._name;
    this._popupImage.src = this._link;
    this._popupImageTitle.textContent = this._name;
    openPopup(this._popupShowImage);
  }

  _setEventListeners() {
    this._imageCard.addEventListener("click", () => this._openPopupImage());
    this._buttonLikeToggle.addEventListener("click", () => this._likeButton());
    this._deleteCardButton.addEventListener("click", () =>
      this._deleteCardTemplate()
    );
  }
}
