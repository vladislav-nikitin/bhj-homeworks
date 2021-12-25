const killCounter = document.getElementById("dead");
const loseCounter = document.getElementById("lost");

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

for (let index = 1; index <= 9; index++) {
  getHole(index).onclick = function () {
    if (getHole(index).classList.contains("hole_has-mole")) {
      killCounter.textContent++;
      return checkWin();
    } else {
      loseCounter.textContent++;
      return checkWin();
    }
  };
}

function checkWin() {
  if (+killCounter.textContent === 10 && +loseCounter.textContent < 5) {
    alert("Победа за вами!");
    killCounter.textContent = 0;
    loseCounter.textContent = 0;
    return;
  } else if (+loseCounter.textContent === 5 && +killCounter.textContent < 10) {
    alert("К сожалению вы проиграли...");
    killCounter.textContent = 0;
    loseCounter.textContent = 0;
    return;
  }
  return;
}
