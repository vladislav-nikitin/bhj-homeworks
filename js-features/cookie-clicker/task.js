let element = document.getElementById("cookie");
element.onclick = function () {
  let counter = document.getElementById("clicker__counter");
  counter.textContent++;
  element.width = 250;
  setTimeout(() => (element.width = 200), 100);
};
