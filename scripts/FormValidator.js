
export class FormValidator {
    constructor(formElement, validationSettings) {
        this._formElement = formElement;
        this._validationSettings = validationSettings;
        this._inputSelector = validationSettings.inputSelector;
        this._submitButtonSelector = validationSettings.submitButtonSelector;
        this._inactiveButtonClass = validationSettings.inactiveButtonClass;
        this._inputErrorClass = validationSettings.inputErrorClass;
        this._errorClass = validationSettings.errorClass;
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    };

    _errorElement(inputElement) {
        return this._formElement.querySelector(`.${inputElement.id}-error`);
    }

    _showInputError(inputElement) {
        const errorElement = this._errorElement(inputElement);
        errorElement.textContent = inputElement.validationMessage;
        inputElement.classList.add(this._inputErrorClass);
        errorElement.classList.add(this._errorClass);
    };

    _hideInputError(inputElement) {
        this._errorElement(inputElement).textContent = '';
        inputElement.classList.remove(this._inputErrorClass);
        this._errorElement(inputElement).classList.remove(this._inputErrorClass);
    };

    _isValid(inputElement) {
        (!inputElement.validity.valid) ? this._showInputError(inputElement) : this._hideInputError(inputElement);
    };

    _disableSubmitButton() {
        this._buttonElement.disabled = true;
        this._buttonElement.classList.add(this._inactiveButtonClass);
    };

    _enableSubmitButton() {
        this._buttonElement.disabled = false;
        this._buttonElement.classList.remove(this._inactiveButtonClass);
    };

    _toggleButtonState() {
        if (this._hasInvalidInput(this._inputList)) {
            this._disableSubmitButton(this._buttonElement);
        }  else {
            this._enableSubmitButton(this._buttonElement);
        };
    };

    _setEventListeners() {
        this._toggleButtonState();

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this._toggleButtonState();
            })
        });
    };

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }


    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    };

};





