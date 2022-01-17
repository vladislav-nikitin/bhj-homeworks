const rotators = Array.from(document.querySelectorAll(".rotator__case"));
const rotatorMain = document.querySelector(".rotator");
let speed = 1000;
function changing() {
  setTimeout(() => {
    for (let rotatorItem of rotators) {
      if (rotatorItem.nextElementSibling === null) {
        rotatorMain.firstElementChild.classList.add("rotator__case_active");
        rotatorMain.firstElementChild.style.color =
          rotatorMain.firstElementChild.dataset.color;
        speed = rotatorMain.firstElementChild.dataset.speed;
        rotatorItem.classList.remove("rotator__case_active");
      } else if (rotatorItem.classList.contains("rotator__case_active")) {
        rotatorItem.nextElementSibling.classList.add("rotator__case_active");
        rotatorItem.nextElementSibling.style.color =
          rotatorItem.nextElementSibling.dataset.color;
        speed = rotatorItem.nextElementSibling.dataset.speed;
        rotatorItem.classList.remove("rotator__case_active");
        break;
      }
    }
  }, speed);
}
setInterval(changing, speed);
