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
    toggleButtonState(inputList, buttonElement, enableValidationObject, hasInvalidInput(inputList));
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement, enableValidationObject);
            toggleButtonState(inputList, buttonElement, enableValidationObject, hasInvalidInput(inputList));
        });
    });
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
};

const disableSubmitButton = (buttonElement, enableValidationObject) => {
    buttonElement.disabled = true;
    buttonElement.classList.add(enableValidationObject.inactiveButtonClass);
};

const enableSubmitButton = (buttonElement, enableValidationObject) => {
    buttonElement.disabled = false;
    buttonElement.classList.remove(enableValidationObject.inactiveButtonClass);
};

const toggleButtonState = (inputList, buttonElement, enableValidationObject) => {
    if (hasInvalidInput(inputList)) {
        disableSubmitButton(buttonElement, enableValidationObject);
    }  else {
        enableSubmitButton(buttonElement, enableValidationObject);
    };
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

enableValidation(validationSettings);



