const sliderItems = Array.from(document.getElementsByClassName("slider__item"));
const arrows = Array.from(document.querySelectorAll(".slider__arrow"));
const sliderArrowPrev = document.querySelector(".slider__arrow_prev");
const sliderArrowNext = document.querySelector(".slider__arrow_next");
let index = sliderItems.findIndex((slide) =>
  slide.classList.contains("slider__item_active")
);

for (let i = 0; i < arrows.length; i++) {
  arrows[i].onclick = function () {
    sliderItems[index].classList.remove("slider__item_active");
    arrows[i] === sliderArrowNext ? index++ : index--;
    index === sliderItems.length ? (index = 0) : "";
    index === -1 ? (index = sliderItems.length - 1) : "";
    sliderItems[index].classList.add("slider__item_active");
  };
}
