
const showInputError = (formElement, inputElement, errorMessage, enableValidationObject) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(enableValidationObject.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(enableValidationObject.errorClass);
};

const hideInputError = (formElement, inputElement, enableValidationObject) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(enableValidationObject.inputErrorClass);
    errorElement.classList.remove(enableValidationObject.errorClass);
    errorElement.textContent = '';
};

const isValid = (formElement, inputElement, enableValidationObject) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, enableValidationObject);
    } else {
        hideInputError(formElement, inputElement, enableValidationObject);
    }
};

const setEventListeners = (formElement, enableValidationObject) => {
    const inputList = Array.from(formElement.querySelectorAll(enableValidationObject.inputSelector));
    const buttonElement = formElement.querySelector(enableValidationObject.submitButtonSelector);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement, enableValidationObject);
            toggleButtonState(inputList, buttonElement, enableValidationObject);
        });
    });
};


const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
};

const toggleButtonState = (inputList, buttonElement, enableValidationObject) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(enableValidationObject.inactiveButtonClass);
    } else {

        buttonElement.classList.remove(enableValidationObject.inactiveButtonClass);
    }
};
function enableValidation(enableValidationObject) {
    const formList = Array.from(document.querySelectorAll(enableValidationObject.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement, enableValidationObject);
    });
};

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_disabled',
    inputErrorClass: '.popup__input_type_error',
    errorClass: 'popup__input-error_active'
});

