export const initialCards = [
  {
    name: "Розовый закат",
    link: "https://images.unsplash.com/photo-1595959910519-2245abe21322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
  },
  {
    name: "Желтая трава",
    link: "https://images.unsplash.com/photo-1639333962267-657e34b2a319?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Белая гора",
    link: "https://images.unsplash.com/photo-1517231880309-963a7334a96d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  },
  {
    name: "Зеленое поле",
    link: "https://images.unsplash.com/photo-1416230789844-1998de481fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80",
  },
  {
    name: "Голубая вода",
    link: "https://images.unsplash.com/photo-1447758501994-89bb4bae35d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Оранжевый песок",
    link: "https://images.unsplash.com/photo-1625282228977-6db01f1af69a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

export const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_disabled",
  inputErrorClass: ".popup__input_type_error",
  errorClass: "popup__input-error_active",
};

export const popupButtonOpenProfileEdit = document.querySelector(
  ".profile__edit-button"
);
export const popupButtonAddImage = document.querySelector(
  ".profile__add-button"
);
export const popupEditProfile = document.querySelector(".popup_edit-profile");
export const popupButtonCloseEditProfile = popupEditProfile.querySelector(
  ".popup__button-close"
);
export const profileName = document.querySelector(".profile__name");
export const profileDescription = document.querySelector(
  ".profile__description"
);
export const formEditProfile = document.querySelector(".popup__form");
export const popupUserName = formEditProfile.querySelector("#username");
export const popupDescription = formEditProfile.querySelector("#description");
export const popupAddImage = document.querySelector(".popup_add-image");
export const popupButtonCloseAddImage = popupAddImage.querySelector(
  "#popup__button-close"
);
export const popupShowImage = document.querySelector(".popup_show-image");
export const popupButtonCloseImage = document.querySelector(
  ".popup__button-close-image"
);
export const cardsContainer = document.querySelector(".elements");
export const formAddImage = document.querySelector("#popup__add-image");
export const inputAddImageName = document.querySelector("#image-name");
export const inputAddLink = document.querySelector("#link");
export const popupButtonSaveProfile = popupEditProfile.querySelector(
  ".popup_edit-profile"
);
export const profileAvatarImage = document.querySelector(".profile__avatar-image");
export const popupAddAvatar = document.querySelector(".popup_add-avatar");
export const buttonAddAvatar = document.querySelector(".profile__avatar-button");

