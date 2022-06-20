import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(selector, { submitAddForm }) {
    super(selector);
    this._SubmitAddForm = submitAddForm;
    this._popupForm = this._popup.querySelector(".popup__form");
    this._inputList = Array.from(this._popup.querySelectorAll(".popup__input"));
  }

  _getInputValues() {
    this._formValue = {};
    this._inputList.forEach((input) => {
      this._formValue[input.name] = input.value;
    });
    return this._formValue;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._SubmitAddForm(this._getInputValues());
    });
  }

  closePopup() {
    super.closePopup();
    this._popupForm.reset();
  }
}
