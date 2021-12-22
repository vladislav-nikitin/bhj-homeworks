let countdownTimer = function () {
  let countSeconds = document.getElementById("timer");
  countSeconds.textContent--;
  if (countSeconds.textContent == 0) {
    alert("Вы победили в конкурсе!");
  }
};
setInterval(countdownTimer, 1000);
