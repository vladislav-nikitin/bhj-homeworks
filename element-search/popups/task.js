const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");

modalMain.classList.add("modal_active");

let arrModalClose = document.querySelectorAll(".modal__close_times");
for (let i = 0; i < arrModalClose.length; i++) {
  arrModalClose[i].onclick = function () {
    this.closest(".modal").classList.remove("modal_active");
  };
}

document.getElementsByClassName("show-success")[0].onclick = function () {
  modalMain.classList.remove("modal_active");
  modalSuccess.classList.add("modal_active");
};
