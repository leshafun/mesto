export default class Card {
  constructor({data, cardSelector, userId, _id, owner, handleCardClick, handleDeleteClick, handelLikeClick, handelRemoveLike }) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
	this._userId = userId;
	this._cardId = data._id;
	this._owner = data.owner._id;
	this._handleDeleteClick = handleDeleteClick;
	this._likes = data.likes;
	this._handelLikeClick = handelLikeClick;
	this._handelRemoveLike = handelRemoveLike;
	this._sumLikes = this._likes;
	this._element = this._getCardTemplate();
    this._buttonLikeToggle = this._element.querySelector(
      ".element__like-button"
    );
    this._titleCard = this._element.querySelector(".element__title");
    this._imageCard = this._element.querySelector(".element__image");
    this._deleteCardButton = this._element.querySelector(
      ".element__delete-button"
    );
	this._likeNumbers = this._element.querySelector(".element__like-numbers");
    this._handleCardClick = handleCardClick;
  }

  _getCardTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  _hasDeleteCard() {
	if (this._userId !== this._owner) {
	  this._deleteCardButton.remove();
	}
  }

  generateCard() {
    this._setEventListeners();
	this._isCardLiked();
	this._hasDeleteCard();
    this._imageCard.alt = this._name;
    this._imageCard.src = this._link;
    this._titleCard.textContent = this._name;
	this._likeNumbers.textContent = this._likes.length;
	this._element.dataset.cardId = this._cardId;
    return this._element;
  }

  _deleteCardTemplate() {
    this._element.remove();
    this._element = null;
  }

  likeButton(likes) {
	this._likeNumbers.textContent = likes.length;
	this._buttonLikeToggle.classList.toggle("element__like-button_active");
  }

  _isCardLiked() {
	if (this._likes.some((user) => {
		  return this._userId === user._id;
		})
	) {
	  this._buttonLikeToggle.classList.add('element__like-button_active');
	}
  }

  /*updateCardLike() {
	console.log('1');
}*/

  _setEventListeners() {
	this._buttonLikeToggle.addEventListener("click", () => {
	  if (this._buttonLikeToggle.classList.contains('element__like-button_active')) {
		this._handelRemoveLike(this._cardId);
	  } else  {
		this._handelLikeClick(this._cardId);
	  }
	});

   this._deleteCardButton.addEventListener("click", () =>
      this._handleDeleteClick(this._cardId)
    );
    this._element
      .querySelector(".element__image")
      .addEventListener("click", () => this._handleCardClick(this._name, this._link));
  }
}


