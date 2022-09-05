const mapLink = document.querySelector(".contacts__map-link");
const modalMap = document.querySelector(".map");
const closeMap = modalMap.querySelector(".modal__button-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalMap.classList.contains("modal-show")) {
      evt.preventDefault();
      modalMap.classList.remove("modal-show");
    }
  }
});
