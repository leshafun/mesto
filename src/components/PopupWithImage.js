import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._popupImage = document.querySelector(".popup__image");
    this._popupImageTitle = document.querySelector(".popup__image-title");
  }

  openPopup(data) {
    this._popupImage.src = data.link;
    this._popupImage.alt = data.name;
    this._popupImageTitle.textContent = data.name;
    super.openPopup();
  }
}
