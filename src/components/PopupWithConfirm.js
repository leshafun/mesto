import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor({selector}) {
	super(selector);
	this._form = this._popup.querySelector(".popup__form");
  }

  submitCallback(remove) {
	this._handleSubmit = remove;
  }

  setEventListeners() {
	super.setEventListeners();
	this._form.addEventListener('submit', (evt) => {
	  evt.preventDefault();
	  this._handleSubmit();
	});
  }
}