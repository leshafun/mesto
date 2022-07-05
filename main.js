(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e,this._headers=n}var n,r;return n=t,(r=[{key:"_checkServerResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._checkServerResponse)}},{key:"createCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkServerResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkServerResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkServerResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkServerResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._checkServerResponse)}},{key:"setUserInfo",value:function(e,t){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,description:t})}).then(this._checkServerResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._url,"avatar/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({data:e})}).then(this._checkServerResponse)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=t,this._validationSettings=n,this._inputSelector=n.inputSelector,this._submitButtonSelector=n.submitButtonSelector,this._inactiveButtonClass=n.inactiveButtonClass,this._inputErrorClass=n.inputErrorClass,this._errorClass=n.errorClass,this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector))}var t,r;return t=e,(r=[{key:"_errorElement",value:function(e){return this._formElement.querySelector(".".concat(e.id,"-error"))}},{key:"_showInputError",value:function(e){var t=this._errorElement(e);t.textContent=e.validationMessage,e.classList.add(this._inputErrorClass),t.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){this._errorElement(e).textContent="",e.classList.remove(this._inputErrorClass),this._errorElement(e).classList.remove(this._inputErrorClass)}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_disableSubmitButton",value:function(){this._buttonElement.disabled=!0,this._buttonElement.classList.add(this._inactiveButtonClass)}},{key:"_enableSubmitButton",value:function(){this._buttonElement.disabled=!1,this._buttonElement.classList.remove(this._inactiveButtonClass)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?this._disableSubmitButton(this._buttonElement):this._enableSubmitButton(this._buttonElement)}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){var n=t.data,r=t.cardSelector,o=t.userId,i=t._id,u=t.owner,a=t.handleCardClick,c=t.handleDeleteClick,l=t.handelLikeClick,s=t.handelRemoveLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=n,this._name=n.name,this._link=n.link,this._cardSelector=r,this._element=this._getCardTemplate(),this._userId=o,this._cardId=i,this._owner=u,this._handleDeleteClick=c,this._likes=n.likes,this._handelLikeClick=l,this._handelRemoveLike=s,this._sumLikes=this._likes,this._buttonLikeToggle=this._element.querySelector(".element__like-button"),this._titleCard=this._element.querySelector(".element__title"),this._imageCard=this._element.querySelector(".element__image"),this._deleteCardButton=this._element.querySelector(".element__delete-button"),this._likeNumbers=this._element.querySelector(".element__like-numbers"),this._handleCardClick=a}var t,n;return t=e,(n=[{key:"_getCardTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_hasDeleteCard",value:function(){this._userId!==this._owner&&this._deleteCardButton.remove()}},{key:"generateCard",value:function(){return this._setEventListeners(),this._likeButton(),this._hasDeleteCard(),this._imageCard.alt=this._name,this._imageCard.src=this._link,this._titleCard.textContent=this._name,this._element}},{key:"_deleteCardTemplate",value:function(){this._element.remove(),this._element=null}},{key:"_likeButton",value:function(e){e?(this._buttonLikeToggle.classList.add("element__like-button_active"),this._likeNumbers.textContent=String(this._sumLikes+1),this._sumLikes+=1):(this._buttonLikeToggle.classList.remove("card__like-button_active"),this._likeNumbers.textContent=String(this._sumLikes-1),this._sumLikes-=1)}},{key:"_setEventListeners",value:function(){var e=this;this._buttonLikeToggle.addEventListener("click",(function(){return e._likeButton()})),this._deleteCardButton.addEventListener("click",(function(){return e._deleteCardTemplate()})),this._element.querySelector(".element__image").addEventListener("click",(function(){return e._handleCardClick(e._name,e._link)}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderer",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._popupButtonClose=this._popup.querySelector(".popup__button-close"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_open"),document.addEventListener("keydown",this._handleEscClose)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_open"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"handleOutsideClick",value:function(e){e.target===e.currentTarget&&this.closePopup(e.target)}},{key:"setEventListeners",value:function(){var e=this;this._popupButtonClose.addEventListener("click",(function(){return e.closePopup()})),this._popup.addEventListener("mousedown",(function(t){return e.handleOutsideClick(t)}))}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=h(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function _(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=document.querySelector(".popup__image"),t._popupImageTitle=document.querySelector(".popup__image-title"),t}return t=u,(n=[{key:"openPopup",value:function(e){this._popupImage.src=e.link,this._popupImage.alt=e.name,this._popupImageTitle.textContent=e.name,f(y(u.prototype),"openPopup",this).call(this)}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(l);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function S(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function u(e){var t,n=e.selector,r=e.submitAddForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._SubmitAddForm=r,t._popupForm=t._popup.querySelector(".popup__form"),t._popupButtonSave=t._popup.querySelector(".popup__button-save"),t._inputList=Array.from(t._popup.querySelectorAll(".popup__input")),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValue={},this._inputList.forEach((function(t){e._formValue[t.name]=t.value})),this._formValue}},{key:"setEventListeners",value:function(){var e=this;k(C(u.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._SubmitAddForm(e._getInputValues())}))}},{key:"closePopup",value:function(){k(C(u.prototype),"closePopup",this).call(this),this._popupForm.reset()}},{key:"renderLoading",value:function(e){this._popupButtonSave.textContent=e?"Сохранение...":"Сохранить"}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(l);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=j(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function j(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function q(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function u(e){var t,n=e.selector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._form=t._popup.querySelector(".popup__form"),t}return t=u,(n=[{key:"submitCallback",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;P(B(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("click",(function(t){t.preventDefault(),e._handleSubmit()}))}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(l);function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T,D=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(t),this._profileDescription=document.querySelector(n),this._profileAvatarImage=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,description:this._profileDescription.textContent,avatar:this._profileAvatarImage.src}}},{key:"setUserInfo",value:function(e){this._profileName.textContent=e.username,this._profileDescription.textContent=e.description,this._profileAvatarImage.src=e.avatar}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),A={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_disabled",inputErrorClass:".popup__input_type_error",errorClass:"popup__input-error_active"},V=document.querySelector(".profile__edit-button"),H=document.querySelector(".profile__add-button"),M=document.querySelector(".popup_edit-profile"),U=(M.querySelector(".popup__button-close"),document.querySelector(".profile__name"),document.querySelector(".profile__description"),document.querySelector(".popup__form")),G=U.querySelector("#username"),N=U.querySelector("#description"),F=document.querySelector(".popup_add-image"),W=(F.querySelector("#popup__button-close"),document.querySelector(".popup_show-image"),document.querySelector(".popup__button-close-image"),document.querySelector(".elements"),document.querySelector("#popup__add-image"),document.querySelector("#image-name"),document.querySelector("#link"),M.querySelector(".popup_edit-profile"),document.querySelector(".profile__avatar-image"),document.querySelector(".popup_add-avatar")),Y=document.querySelector(".profile__avatar-button");function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var z=new t({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-44",headers:{authorization:"b8624322-c4fe-40b5-a027-a6fa38818c5d","Content-Type":"application/json"}});Promise.all([z.getInitialCards(),z.getUserInfo()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return J(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];X.setUserInfo(i),T=i._id,re.renderItems(o)})).catch((function(e){console.log(e)}));var $=new r(M,A);$.enableValidation();var K=new r(F,A);K.enableValidation();var Q=new r(W,A);Q.enableValidation();var X=new D(".profile__name",".profile__description",".profile__avatar-image");V.addEventListener("click",(function(){var e=X.getUserInfo();G.value=e.name,N.value=e.description,$.resetValidation(),ie.openPopup()}));var Z=new E({selector:".popup_add-avatar",submitAddForm:function(e){Z.renderLoading(!0),z.setUserAvatar(e).then((function(e){X.setUserInfo(e),Z.closePopup()})).catch((function(e){console.log(e)})).finally((function(){Z.renderLoading(!1)}))}});Y.addEventListener("click",(function(){Q.resetValidation(),Z.openPopup()}));var ee=new m(".popup_show-image"),te=new I({selector:".popup_delete-image"}),ne=function(e,t,n){n.handleCardClick;var r=new i({data:e,cardSelector:t,userId:T,handleCardClick:function(e,t){ee.openPopup(e,t)},handleDeleteClick:function(e){te.openPopup(),te.submitCallback((function(){z.deleteCard(e).then((function(){te.closePopup(),r.deleteCardTemplate()})).catch((function(e){console.log(e)}))}))},handelLikeClick:function(e){z.addLike(e).then((function(e){r.likeButton(e)})).catch((function(e){console.log(e)}))},handelRemoveLike:function(e){z.deleteLike(e).then((function(e){r.likeButton(e)})).catch((function(e){console.log(e)}))}});return r.generateCard()},re=new a({items:[{name:"Розовый закат",link:"https://images.unsplash.com/photo-1595959910519-2245abe21322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"},{name:"Желтая трава",link:"https://images.unsplash.com/photo-1639333962267-657e34b2a319?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},{name:"Белая гора",link:"https://images.unsplash.com/photo-1517231880309-963a7334a96d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"},{name:"Зеленое поле",link:"https://images.unsplash.com/photo-1416230789844-1998de481fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"},{name:"Голубая вода",link:"https://images.unsplash.com/photo-1447758501994-89bb4bae35d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},{name:"Оранжевый песок",link:"https://images.unsplash.com/photo-1625282228977-6db01f1af69a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}],renderer:function(e){var t=ne(e,".element-template",{handleCardClick:function(){ee.openPopup({image:e.link,name:e.name})}});re.addItem(t)}},".elements");re.renderer();var oe=new E({selector:".popup_add-image",submitAddForm:function(e){oe.renderLoading(!0),z.createCard(e).then((function(e){re.addItem(ne(e)),oe.closePopup()})).catch((function(e){console.log(e)})).finally((function(){oe.renderLoading(!1)}))}});H.addEventListener("click",(function(){K.resetValidation(),oe.openPopup()}));var ie=new E({selector:".popup_edit-profile",submitAddForm:function(e){ie.renderLoading(!0),z.setUserInfo(e).then((function(e){X.setUserInfo(e),ie.closePopup()})).catch((function(e){console.log(e)})).finally((function(){oe.renderLoading(!1)}))}});Z.setEventListeners(),ee.setEventListeners(),te.setEventListeners(),oe.setEventListeners(),ie.setEventListeners()})();