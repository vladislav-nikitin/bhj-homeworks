let hasTooltip = Array.from(document.querySelectorAll(".has-tooltip"));

for (let tooltipElem of hasTooltip) {
  tooltipElem.addEventListener("click", addTooltip);
}

hasTooltip.forEach((element) =>
  element.addEventListener("mouseout", changeFocus)
);

function addTooltip(event) {
  event.preventDefault();
  let positionLeft = event.target.getBoundingClientRect().left;

  event.target.insertAdjacentHTML(
    "beforeEnd",
    `<div class ="tooltip tooltip_active" style="left: ${positionLeft}px">${event.target.title}</div>`
  );
}

function changeFocus(el) {
  if (el.target.lastElementChild) {
    el.target.removeChild(el.target.childNodes[1]);
  }
}
