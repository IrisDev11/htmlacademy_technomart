const orderLinkArray = document.querySelectorAll(".products__button--buy");
const modalOrder = document.querySelector(".modal-order");
const closeOrder = modalOrder.querySelector(".modal__button-close");

for (let elem = 0; elem < orderLinkArray.length; elem++) {
  orderLinkArray[elem].addEventListener("click", function (evt) {
    evt.preventDefault();
    modalOrder.classList.add("modal-show");
  })
};

closeOrder.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalOrder.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalOrder.classList.contains("modal-show")) {
      evt.preventDefault();
      modalOrder.classList.remove("modal-show");
    }
  }
});
