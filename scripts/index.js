const popupButtonOpen = document.querySelector('.profile__edit-button');

const popup = document.querySelector('.popup');

const popupButtonClose = popup.querySelector('.popup__button-close');

const profileName = document.querySelector('.profile__name');

const profileDescription = document.querySelector('.profile__description');

const formEditProfile = document.querySelector('.popup__form');

const popupUserName = formEditProfile.querySelector('#username');

const popupDescription = formEditProfile.querySelector('#description');

function OpenTogglePopup() {
    popup.classList.toggle('popup_open');
    if (popup.classList.contains('popup_open')) {
        popupUserName.value = profileName.textContent;
        popupDescription.value = profileDescription.textContent;
    }
}

function onSubmitHandler(e) {
    e.preventDefault();
    profileName.textContent = popupUserName.value;
    profileDescription.textContent = popupDescription.value;
    OpenTogglePopup();
}

popupButtonOpen.addEventListener('click', OpenTogglePopup);

popupButtonClose.addEventListener('click', OpenTogglePopup);

formEditProfile.addEventListener('submit', onSubmitHandler);




