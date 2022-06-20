import "./index.css";
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import {
  initialCards,
  validationSettings,
  popupButtonOpenProfileEdit,
  popupButtonAddImage,
  popupEditProfile,
  popupUserName,
  popupDescription,
  popupAddImage,
} from "../utils/constants.js";

const popupEditProfileFormValidator = new FormValidator(
  popupEditProfile,
  validationSettings
);
popupEditProfileFormValidator.enableValidation();

const popupAddImageFormValidator = new FormValidator(
  popupAddImage,
  validationSettings
);
popupAddImageFormValidator.enableValidation();

const popupWithImage = new PopupWithImage(".popup_show-image");
popupWithImage.setEventListeners();

const createNewCard = (data, cardSelector, { handleCardClick }) => {
  const cardElement = new Card(data, cardSelector, {
    handleCardClick: (data) => {
      popupWithImage.openPopup(data);
    },
  });
  return cardElement.generateCard();
};

const defaultCardList = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      const card = createNewCard(data, ".element-template", {
        handleCardClick: () => {
          popupWithImage.openPopup({
            image: data.link,
            name: data.name,
          });
        },
      });
      defaultCardList.addItem(card);
    },
  },
  ".elements"
);
defaultCardList.renderer();

const popupAddImageForm = new PopupWithForm(".popup_add-image", {
  submitAddForm: (data) => {
    const card = createNewCard(data, ".element-template", {
      handleCardClick: () => {
        popupWithImage.openPopup({
          image: data.link,
          name: data.name,
        });
      },
    });
    defaultCardList.addItem(card);
    popupAddImageForm.closePopup();
  },
});
popupAddImageForm.setEventListeners();

const popupProfileInfo = new PopupWithForm(".popup_edit-profile", {
  submitAddForm: (data) => {
    userInfo.setUserInfo(data);
    popupProfileInfo.closePopup();
  },
});
popupProfileInfo.setEventListeners();

const userInfo = new UserInfo(".profile__name", ".profile__description");

popupButtonOpenProfileEdit.addEventListener("click", () => {
  const infoProfile = userInfo.getUserInfo();
  popupUserName.value = infoProfile.name;
  popupDescription.value = infoProfile.description;
  popupEditProfileFormValidator.resetValidation();
  popupProfileInfo.openPopup();
});

popupButtonAddImage.addEventListener("click", () => {
  popupAddImageFormValidator.resetValidation();
  popupAddImageForm.openPopup();
});
