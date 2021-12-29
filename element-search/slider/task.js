const sliderItems = document.getElementsByClassName("slider__item");
const sliderArrow = document.getElementsByClassName("slider__arrow");
let n = 0;

for (let i = 0; i < sliderArrow.length; i++) {
  sliderArrow[i].onclick = function () {
    ++n;
    if (n >= sliderItems.length) {
      sliderItems[n - 1].classList.remove("slider__item_active");
      n = 0;
      sliderItems[n].classList.add("slider__item_active");
    } else {
      sliderItems[n - 1].classList.remove("slider__item_active");
      sliderItems[n].classList.add("slider__item_active");
    }
  };
}
