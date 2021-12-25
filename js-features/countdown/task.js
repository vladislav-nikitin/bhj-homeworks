let countdownTimer = function () {
  let countSeconds = document.getElementById("timer");
  countSeconds.textContent--;
  if (countSeconds.textContent == 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(1);
  }
};
setInterval(countdownTimer, 1000);
