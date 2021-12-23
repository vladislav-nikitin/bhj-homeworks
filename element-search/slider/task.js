const sliderItems = Array.from(document.getElementsByClassName("slider__item"));
const sliderArrowPrev = document.getElementsByClassName("slider__arrow_prev");
const sliderArrowNext = document.getElementsByClassName("slider__arrow_next");
let n = 0;

function imageSlider(arg) {
  for (let i = 0; i < sliderItems.length; i++) {
    if (sliderItems[i].classList.contains("slider__item_active")) {
      return sliderItems[i].classList.remove("slider__item_active");
    }
  }
  return sliderItems[arg].classList.add("slider__item_active");
}

sliderArrowPrev[0].onclick = function () {
  if (n === 0) {
    n = 4;
    return imageSlider(n);
  } else if (n !== 0) {
    n = n - 1;
    return imageSlider(n);
  }
};

sliderArrowNext[0].onclick = function () {
  if (n === 4) {
    n = 0;
    return imageSlider(n);
  } else if (n < 4) {
    n = n + 1;
    return imageSlider(n);
  }
};
