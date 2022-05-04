const popupButtonOpen = document.querySelector('.profile__edit-button');

const popupButtonAddImage = document.querySelector('.profile__add-button');

const popupEditProfile = document.querySelector('.popup_edit-profile');

const popupButtonClose = popupEditProfile.querySelector('.popup__button-close');

const profileName = document.querySelector('.profile__name');

const profileDescription = document.querySelector('.profile__description');

const formEditProfile = document.querySelector('.popup__form');

const popupUserName = formEditProfile.querySelector('#username');

const popupDescription = formEditProfile.querySelector('#description');

const popupAddImage = document.querySelector('.popup_add-image');

const popupButtonCloseAddImage = popupAddImage.querySelector('#popup__button-close');

const popupShowImage = document.querySelector('.popup__show-image');

const popupButtonCloseImage = document.querySelector('.popup__button-close-image');

const popupImage = popupShowImage.querySelector('.popup__image');

const popupImageTitle = popupShowImage.querySelector('.popup__image-title');


// Открытие, закрытие попапа

function openPopup(popupEditProfile) {
    popupEditProfile.classList.add('popup_open');
};

function closePopup(popupEditProfile) {
    popupEditProfile.classList.remove('popup_open');
};

function openPopupProfile() {
    popupUserName.value = profileName.textContent;
    popupDescription.value = profileDescription.textContent;
    openPopup(popupEditProfile);
};

function closePopupProfile() {
    closePopup(popupEditProfile);
};

function openPopupAddImage() {
    openPopup(popupAddImage);
};

function closePopupAddImage() {
    closePopup(popupAddImage);
};

function closePopupImage() {
    closePopup(popupShowImage);
}

// Сохранение информации введенную в форму попапа

function onSubmitHandler(e) {
    e.preventDefault();
    profileName.textContent = popupUserName.value;
    profileDescription.textContent = popupDescription.value;
    closePopup(popupEditProfile);
};

popupButtonOpen.addEventListener('click', openPopupProfile);

popupButtonClose.addEventListener('click', closePopupProfile);

formEditProfile.addEventListener('submit', onSubmitHandler);

popupButtonAddImage.addEventListener('click', openPopupAddImage);

popupButtonCloseAddImage.addEventListener('click', closePopupAddImage);

popupButtonCloseImage.addEventListener('click', closePopupImage);

// Массив кароточки

const initialCards = [
    {
        name: 'Розовый закат',
        link: 'https://images.unsplash.com/photo-1595959910519-2245abe21322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
    },
    {
        name: 'Желтая трава',
        link: 'https://images.unsplash.com/photo-1639333962267-657e34b2a319?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
        name: 'Белая гора',
        link: 'https://images.unsplash.com/photo-1517231880309-963a7334a96d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
    },
    {
        name: 'Зеленое поле',
        link: 'https://images.unsplash.com/photo-1416230789844-1998de481fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80'
    },
    {
        name: 'Голубая вода',
        link: 'https://images.unsplash.com/photo-1447758501994-89bb4bae35d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
        name: 'Оранжевый песок',
        link: 'https://images.unsplash.com/photo-1625282228977-6db01f1af69a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
];

// Шаблоны

const cardsTemplate = document.querySelector('.element-template').content.querySelector('.element');





// Дом элементы

const cardsContainer = document.querySelector('.elements');
const formAddImage = document.querySelector('#popup__add-image');
const inputAddImageName = document.querySelector('#image-name');
const inputAddLink = document.querySelector('#link');

// Обработчики событий

function handleSubmitAddFormImage(e) {
    e.preventDefault();
    renderInitialCards({name: inputAddImageName.value, link: inputAddLink.value});
    inputAddImageName.value = "";
    inputAddLink.value = "";
};

const deleteCardsTemplate = (e) => {
    e.target.closest('.element').remove();
};

const likeButton = (e) => {
    e.target.closest('.element__like-button').classList.toggle('element__like-button_active');
};

// Генерация карточки

const generateCards = (cardsData) => {
    const newCards = cardsTemplate.cloneNode(true);
    const titleCards = newCards.querySelector('.element__title');
    const imageCards = newCards.querySelector('.element__image');
    titleCards.textContent = cardsData.name;
    imageCards.src = cardsData.link;

    const deleteButtonImage = newCards.querySelector('.element__delete-button');
    deleteButtonImage.addEventListener('click', deleteCardsTemplate);

    const activeLikeButton = newCards.querySelector('.element__like-button');
    activeLikeButton.addEventListener('click', likeButton);

    function openPopupImage(newCards) {
        popupImageTitle.textContent = cardsData.name;
        popupImage.src = cardsData.link;
        openPopup(popupShowImage);
    }

    imageCards.addEventListener('click', openPopupImage);

    closePopupAddImage();

    return newCards;
};

// Рендер карточки

const renderInitialCards = (cardsData) => {
    cardsContainer.prepend(generateCards(cardsData));
};

initialCards.forEach((cardsData) => {
    renderInitialCards(cardsData);
    });

// Добавление карточки

formAddImage.addEventListener('submit', handleSubmitAddFormImage);




