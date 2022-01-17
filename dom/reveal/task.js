const reveals = Array.from(document.querySelectorAll(".reveal"));
let viewportHeight = window.innerHeight;

for (const revItem of reveals) {
  document.addEventListener("scroll", function () {
    if (revItem.getBoundingClientRect().top < viewportHeight) {
      revItem.classList.add("reveal_active");
    } else {
      revItem.classList.remove("reveal_active");
    }
  });
}
