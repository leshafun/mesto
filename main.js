(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._formElement=e,this._validationSettings=n,this._inputSelector=n.inputSelector,this._submitButtonSelector=n.submitButtonSelector,this._inactiveButtonClass=n.inactiveButtonClass,this._inputErrorClass=n.inputErrorClass,this._errorClass=n.errorClass,this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector))}var n,r;return n=t,(r=[{key:"_errorElement",value:function(e){return this._formElement.querySelector(".".concat(e.id,"-error"))}},{key:"_showInputError",value:function(e){var t=this._errorElement(e);t.textContent=e.validationMessage,e.classList.add(this._inputErrorClass),t.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){this._errorElement(e).textContent="",e.classList.remove(this._inputErrorClass),this._errorElement(e).classList.remove(this._inputErrorClass)}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_disableSubmitButton",value:function(){this._buttonElement.disabled=!0,this._buttonElement.classList.add(this._inactiveButtonClass)}},{key:"_enableSubmitButton",value:function(){this._buttonElement.disabled=!1,this._buttonElement.classList.remove(this._inactiveButtonClass)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?this._disableSubmitButton(this._buttonElement):this._enableSubmitButton(this._buttonElement)}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r){var o=r.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=t,this._name=t.name,this._link=t.link,this._cardSelector=n,this._element=this._getCardTemplate(),this._buttonLikeToggle=this._element.querySelector(".element__like-button"),this._titleCard=this._element.querySelector(".element__title"),this._imageCard=this._element.querySelector(".element__image"),this._deleteCardButton=this._element.querySelector(".element__delete-button"),this._handleCardClick=o}var t,r;return t=e,(r=[{key:"_getCardTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._setEventListeners(),this._imageCard.alt=this._name,this._imageCard.src=this._link,this._titleCard.textContent=this._name,this._element}},{key:"_deleteCardTemplate",value:function(){this._element.remove(),this._element=null}},{key:"_likeButton",value:function(){this._buttonLikeToggle.classList.toggle("element__like-button_active")}},{key:"_setEventListeners",value:function(){var e=this;this._buttonLikeToggle.addEventListener("click",(function(){return e._likeButton()})),this._deleteCardButton.addEventListener("click",(function(){return e._deleteCardTemplate()})),this._element.querySelector(".element__image").addEventListener("click",(function(){return e._handleCardClick(e._data)}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderer",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._popupButtonClose=this._popup.querySelector(".popup__button-close"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_open"),document.addEventListener("keydown",this._handleEscClose)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_open"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"handleOutsideClick",value:function(e){e.target===e.currentTarget&&this.closePopup(e.target)}},{key:"setEventListeners",value:function(){var e=this;this._popupButtonClose.addEventListener("click",(function(){return e.closePopup()})),this._popup.addEventListener("mousedown",(function(t){return e.handleOutsideClick(t)}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(){return c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},c.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function d(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=document.querySelector(".popup__image"),t._popupImageTitle=document.querySelector(".popup__image-title"),t}return t=u,(n=[{key:"openPopup",value:function(e){this._popupImage.src=e.link,this._popupImage.alt=e.name,this._popupImageTitle.textContent=e.name,c(_(u.prototype),"openPopup",this).call(this)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=v(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function w(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function u(e,t){var n,r=t.submitAddForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._SubmitAddForm=r,n._popupForm=n._popup.querySelector(".popup__form"),n._inputList=Array.from(n._popup.querySelectorAll(".popup__input")),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValue={},this._inputList.forEach((function(t){e._formValue[t.name]=t.value})),this._formValue}},{key:"setEventListeners",value:function(){var e=this;b(k(u.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._SubmitAddForm(e._getInputValues())}))}},{key:"closePopup",value:function(){b(k(u.prototype),"closePopup",this).call(this),this._popupForm.reset()}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(t),this._profileDescription=document.querySelector(n)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,description:this._profileDescription.textContent}}},{key:"setUserInfo",value:function(e){this._profileName.textContent=e.username,this._profileDescription.textContent=e.description}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),O={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_disabled",inputErrorClass:".popup__input_type_error",errorClass:"popup__input-error_active"},x=document.querySelector(".profile__edit-button"),P=document.querySelector(".profile__add-button"),q=document.querySelector(".popup_edit-profile"),j=(q.querySelector(".popup__button-close"),document.querySelector(".profile__name"),document.querySelector(".profile__description"),document.querySelector(".popup__form")),L=j.querySelector("#username"),B=j.querySelector("#description"),I=document.querySelector(".popup_add-image"),D=(I.querySelector("#popup__button-close"),document.querySelector(".popup_show-image"),document.querySelector(".popup__button-close-image"),document.querySelector(".elements"),document.querySelector("#popup__add-image"),document.querySelector("#image-name"),document.querySelector("#link"),q.querySelector(".popup_edit-profile"),new t(q,O));D.enableValidation();var T=new t(I,O);T.enableValidation();var M=new h(".popup_show-image");M.setEventListeners();var V=function(e,t,n){n.handleCardClick;var o=new r(e,t,{handleCardClick:function(e){M.openPopup(e)}});return o.generateCard()},H=new i({items:[{name:"Розовый закат",link:"https://images.unsplash.com/photo-1595959910519-2245abe21322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"},{name:"Желтая трава",link:"https://images.unsplash.com/photo-1639333962267-657e34b2a319?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},{name:"Белая гора",link:"https://images.unsplash.com/photo-1517231880309-963a7334a96d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"},{name:"Зеленое поле",link:"https://images.unsplash.com/photo-1416230789844-1998de481fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"},{name:"Голубая вода",link:"https://images.unsplash.com/photo-1447758501994-89bb4bae35d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},{name:"Оранжевый песок",link:"https://images.unsplash.com/photo-1625282228977-6db01f1af69a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}],renderer:function(e){var t=V(e,".element-template",{handleCardClick:function(){M.openPopup({image:e.link,name:e.name})}});H.addItem(t)}},".elements");H.renderer();var R=new E(".popup_add-image",{submitAddForm:function(e){var t=V(e,".element-template",{handleCardClick:function(){M.openPopup({image:e.link,name:e.name})}});H.addItem(t),R.closePopup()}});R.setEventListeners();var A=new E(".popup_edit-profile",{submitAddForm:function(e){G.setUserInfo(e),A.closePopup()}});A.setEventListeners();var G=new C(".profile__name",".profile__description");x.addEventListener("click",(function(){var e=G.getUserInfo();L.value=e.name,B.value=e.description,D.resetValidation(),A.openPopup()})),P.addEventListener("click",(function(){T.resetValidation(),R.openPopup()}))})();