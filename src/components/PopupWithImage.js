import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._popupImage = document.querySelector(".popup__image");
    this._popupImageTitle = this._popup.querySelector(".popup__image-title");
  }

  openPopup(name, link) {
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupImageTitle.textContent = name;
    super.openPopup();
  }
}
