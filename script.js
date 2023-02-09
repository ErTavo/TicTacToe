const cells = document.querySelectorAll(".cell");
const playerTurnDisplay = document.querySelector("#player-turn");
let currentPlayer = "X";

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", handleClick);
}

function handleClick(e) {
  const cell = e.target;
  cell.innerHTML = currentPlayer;
  cell.removeEventListener("click", handleClick);

  checkWin();

  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
  playerTurnDisplay.innerHTML = `Turno de: ${currentPlayer}`;
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      cells[a].innerHTML === currentPlayer &&
      cells[b].innerHTML === currentPlayer &&
      cells[c].innerHTML === currentPlayer
    ) {
      alert(`Jugador ${currentPlayer} ganó!`);
      reset();
    }
  }
}

function reset() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
    cells[i].addEventListener("click", handleClick);
  }
  currentPlayer = "X";
  playerTurnDisplay.innerHTML = `Player turn: ${currentPlayer}`;
}

document.querySelector("#reset-button").addEventListener("click", reset);
