export default class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);
    this._popupButtonClose = this._popup.querySelector(".popup__button-close");
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  openPopup() {
    this._popup.classList.add("popup_open");
    document.addEventListener("keydown", this._handleEscClose);
  }

  closePopup() {
    this._popup.classList.remove("popup_open");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.closePopup();
    }
  }

  handleOutsideClick(evt) {
    if (evt.target === evt.currentTarget) {
      this.closePopup(evt.target);
    }
  }

  setEventListeners() {
    this._popupButtonClose.addEventListener("click", () => this.closePopup());
    this._popup.addEventListener("mousedown", (evt) =>
      this.handleOutsideClick(evt)
    );
  }
}
