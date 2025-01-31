const reader = document.querySelector(".book");
const fontSizes = document.querySelectorAll(".font-size");

for (let fontSizeItem of fontSizes) {
  fontSizeItem.addEventListener("click", changeSize);
}

function changeSize(event) {
  event.preventDefault();
  if (event.target.dataset.size === "big") {
    reader.classList.add("book_fs-big");
    reader.classList.remove("book_fs-small");
  } else if (event.target.dataset.size === "small") {
    reader.classList.add("book_fs-small");
    reader.classList.remove("book_fs-big");
  } else {
    reader.classList.remove("book_fs-small");
    reader.classList.remove("book_fs-big");
  }

  for (let fontSizeItem of fontSizes) {
    fontSizeItem.classList.remove("font-size_active");
  }
  event.target.classList.add("font-size_active");
}
