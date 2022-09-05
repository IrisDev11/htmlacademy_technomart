const contactsLink = document.querySelector(".contacts__button");
const modalAppeal = document.querySelector(".modal-appeal");
const closeButton = modalAppeal.querySelector(".modal__button-close");
const appealForm = modalAppeal.querySelector(".modal-appeal__form");
const userName = modalAppeal.querySelector("[name=name]");
const userEmail = modalAppeal.querySelector("[name=email]");
const textarea = modalAppeal.querySelector(".modal-appeal__textarea");

let isStorageSupport = true;
let storage = "";
let storageEmail = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

try {
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

contactsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalAppeal.classList.add("modal-show");

  if (storage) {
    userName.value = storage;
    userEmail.focus();
  } else {
    userName.focus();
  }

  if (storageEmail) {
    userEmail.value = storageEmail;
    textarea.focus();
  } else {
    userEmail.focus();
  }

});

closeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalAppeal.classList.remove("modal-show");
  modalAppeal.classList.remove("modal-error");
});

appealForm.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !textarea.value) {
    evt.preventDefault();
    modalAppeal.classList.remove("modal-error");
    modalAppeal.offsetWidth = modalAppeal.offsetWidth;
    modalAppeal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", userName.value);
      localStorage.setItem("email", userEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalAppeal.classList.contains("modal-show")) {
      evt.preventDefault();
      modalAppeal.classList.remove("modal-show");
    }
  }
});

