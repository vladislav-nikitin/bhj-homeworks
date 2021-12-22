let killCounter = document.getElementById("dead");
let loseCounter = document.getElementById("lost");
let holeIndex;
for (let index = 1; index <= 9; index++) {
  function getHole(index) {
    holeIndex = document.getElementById(`hole${index}`);
    return holeIndex;
  }
}

holeIndex.onclick = function () {
  if (hole.className.includes("hole_has-mole") === true) {
    killCounter.textContent++;
  } else {
    loseCounter.textContent++;
  }

  if (killCounter.textContent === 10) {
    alert("Победа за вами!");
    killCounter.textContent = 0;
    loseCounter.textContent = 0;
  } else if (loseCounter.textContent === 5) {
    alert("К сожалению вы проиграли...");
    killCounter.textContent = 0;
    loseCounter.textContent = 0;
  }
};
