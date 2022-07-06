
export default class UserInfo {
  constructor(profileNameSelector, profileDescriptionSelector, profileAvatar) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileDescription = document.querySelector(
      profileDescriptionSelector
    );
	this._profileAvatarImage = document.querySelector(profileAvatar);
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
	  about: this._profileDescription.textContent,
	  avatar: this._profileAvatarImage.src,
    };
  }

  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profileDescription.textContent = data.about;
	this._profileAvatarImage.src = data.avatar;
  }

}
