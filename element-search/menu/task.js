const menuItem = document.getElementsByClassName("menu__item");
const menuLink = document.getElementsByClassName("menu__link");

for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].onclick = function () {
    if (
      menuItem[i].querySelector(".menu_sub") !== null &&
      menuItem[i].querySelector(".menu_active") === null
    ) {
      menuItem[i].querySelector(".menu_sub").classList.add("menu_active");
      return false;
    } else if (
      menuItem[i].querySelector(".menu_sub") !== null &&
      menuItem[i].querySelector(".menu_active") !== null
    ) {
      menuItem[i].querySelector(".menu_sub").classList.remove("menu_active");
      return false;
    }
  };
}
