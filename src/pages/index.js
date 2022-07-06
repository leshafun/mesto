import "./index.css";
import Api from "../components/Api.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  validationSettings,
  popupButtonOpenProfileEdit,
  popupButtonAddImage,
  popupEditProfile,
  popupUserName,
  popupDescription,
  popupAddImage,
  popupAddAvatar,
  buttonAddAvatar,
} from "../utils/constants.js";

let userId;

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-44',
  headers: {
	authorization: 'b8624322-c4fe-40b5-a027-a6fa38818c5d',
	'Content-Type': 'application/json',
  },
});

Promise.all([api.getInitialCards(), api.getUserInfo()])
	.then(([cards, userData]) => {
	  userInfo.setUserInfo(userData);
	  userId = userData._id;
	  cards.forEach(card => defaultCardList.renderer(card))
	})
	.catch((err) => {
	  console.log(err);
	});

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

const popupAddProfileImage = new FormValidator(
	popupAddAvatar,
	validationSettings
);
popupAddProfileImage.enableValidation();

const userInfo = new UserInfo(
	".profile__name",
	".profile__description",
	".profile__avatar-image"
);

popupButtonOpenProfileEdit.addEventListener("click", () => {
  const infoProfile = userInfo.getUserInfo();
  popupUserName.value = infoProfile.name;
  popupDescription.value = infoProfile.about;
  popupEditProfileFormValidator.resetValidation();
  popupProfileInfo.openPopup();
});

const popupAvatar = new PopupWithForm({
  selector: ".popup_add-avatar",
  submitAddForm: (data) => {
	popupAvatar.renderLoading(true);
	api
		.setUserAvatar(data)
		.then((data) => {
		  userInfo.setUserInfo(data);
		  popupAvatar.closePopup();
		})
		.catch((err) => {
		  console.log(err);
		})
		.finally(() => {
		  popupAvatar.renderLoading(false);
		})
  },
})

buttonAddAvatar.addEventListener("click", ()=> {
  popupAvatar.openPopup();
})

const popupWithImage = new PopupWithImage(".popup_show-image");


const popupDeleteImage = new PopupWithConfirm({
  selector: '.popup_delete-image'
});

const createNewCard = (data, cardSelector) => {
  const cardElement = new Card({
	data: data,
	cardSelector: cardSelector,
	userId: userId,
	handleCardClick: (name, link) => {
	  popupWithImage.openPopup(name, link)
	},
	handleDeleteClick: (cardId) => {
	  popupDeleteImage.openPopup();
	  popupDeleteImage.submitCallback(() => {
		api
			.deleteCard(cardId)
			.then(() => {
			  popupDeleteImage.closePopup();
			  document.querySelector(`[data-card-id="${cardId}"]`).remove();
			})
			.catch((err) => {
			  console.log(err);
			});
	  })
	},
	handelLikeClick: (cardId) => {
	  api
		  .addLike(cardId)
		  .then((data) => {
			cardElement.likeButton(data.likes);
		  })
		  .catch((err) => {
			console.log(err);
		  });
	},
	handelRemoveLike: (cardId) => {
	  api
		  .deleteLike(cardId)
		  .then((data) => {
			cardElement.likeButton(data.likes)
		  })
		  .catch((err) => {
			console.log(err);
		  });
	}
  });
  return cardElement.generateCard();
}


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
//defaultCardList.renderer();

const popupAddImageForm = new PopupWithForm({
  selector: ".popup_add-image",
  submitAddForm: (data) => {
	popupAddImageForm.renderLoading(true);
	api
		.createCard(data)
		.then((data) => {
		  defaultCardList.addItem(createNewCard(data, ".element-template"));
		  popupAddImageForm.closePopup();
		})
		.catch((err) => {
		  console.log(err);
		})
		.finally(() => {
		  popupAddImageForm.renderLoading(false);
		});
  }
  });

popupButtonAddImage.addEventListener("click", () => {
  popupAddImageFormValidator.resetValidation();
  popupAddImageForm.openPopup();
});

const popupProfileInfo = new PopupWithForm({
  selector: ".popup_edit-profile",
  submitAddForm: (data) => {
	popupProfileInfo.renderLoading(true);
	api
		.setUserInfo(data)
		.then((data) => {
		  userInfo.setUserInfo(data);
		  popupProfileInfo.closePopup();
		})
		.catch((err) => {
		  console.log(err);
		})
		.finally(() => {
		  popupAddImageForm.renderLoading(false);
		});
  },
});

popupAvatar.setEventListeners();
popupWithImage.setEventListeners();
popupDeleteImage.setEventListeners();
popupAddImageForm.setEventListeners();
popupProfileInfo.setEventListeners();






