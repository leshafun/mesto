const popupButtonOpen = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupButtonClose = popup.querySelector('.popup__button-close');
const popupSaveData = document.querySelector('.popup__button-save');

function OpenTogglePopup() {
    popup.classList.toggle('popup__open');
}

function popupOverlayClickHadnler(evt) {
    if (evt.target === evt.currentTarget) {
        OpenTogglePopup();
    }
}

popupButtonOpen.addEventListener('click', OpenTogglePopup);

popupButtonClose.addEventListener('click', OpenTogglePopup);

popup.addEventListener('click', popupOverlayClickHadnler);

popupSaveData.addEventListener('click', OpenTogglePopup);





const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const formEditProfile = document.querySelector('.popup__form');
const popupUserName = formEditProfile.querySelector('#username');
const popupDescription = formEditProfile.querySelector('#description');


function setFormProfileName(event) {
    popupUserName.value = profileName.textContent
}

setFormProfileName();

function setFormProfileDescription(event) {
    popupDescription.value = profileDescription.textContent
}

setFormProfileDescription();

function onSubmitHandler(e) {
    e.preventDefault();
    profileName.textContent = popupUserName.value;
    profileDescription.textContent = popupDescription.value;
}

formEditProfile.addEventListener('submit', onSubmitHandler);
