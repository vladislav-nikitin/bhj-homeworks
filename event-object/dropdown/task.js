const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownItems = document.querySelectorAll(".dropdown__item");

dropdownValue.addEventListener("click", function () {
  dropdownList.classList.toggle("dropdown__list_active");
});

for (let i = 0; i < dropdownItems.length; i++) {
  dropdownItems[i].addEventListener("click", function (event) {
    event.preventDefault();
    dropdownValue.textContent = dropdownItems[i].textContent;
    dropdownList.classList.remove("dropdown__list_active");
  });
}
