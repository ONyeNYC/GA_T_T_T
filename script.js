let currentPlayer = "red";
let gameBoard = Array(9).fill(null); // Create a new array to represent the game board
const gridContainer = document.getElementById("grid-container");
const currentPlayerDisplay = document.getElementById("current-player");
const messageDisplay = document.getElementById("message"); // New element to display messages

function createGrid() {
  for (let i = 0; i < 9; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    gridSquare.dataset.index = i; // Store the index of the square
    gridSquare.addEventListener("click", handleSquareClick);
    gridContainer.appendChild(gridSquare);
  }
}

function handleSquareClick(event) {
  const square = event.target;
  const index = square.dataset.index;
  if (gameBoard[index] !== null) {
    return; // Square has already been clicked, do nothing
  }

  // Update the UI and game board array
  square.classList.add(currentPlayer);
  gameBoard[index] = currentPlayer;

  // Check for win or tie
  if (checkWin()) {
    messageDisplay.textContent = `${
      currentPlayer.charAt(0).toUpperCase() + currentPlayer.slice(1)
    } wins!`;
  } else if (gameBoard.every((square) => square !== null)) {
    messageDisplay.textContent = "It's a tie!";
  } else {
    // Switch the current player
    currentPlayer = currentPlayer === "red" ? "blue" : "red";
    currentPlayerDisplay.textContent = `${
      currentPlayer.charAt(0).toUpperCase() + currentPlayer.slice(1)
    }'s turn`;
  }
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  return winningCombinations.some((combination) => {
    return combination.every((index) => {
      return gameBoard[index] === currentPlayer;
    });
  });
}

function resetGame() {
  const gridSquares = document.querySelectorAll(".grid-square");
  gridSquares.forEach((square) => {
    square.classList.remove("red", "blue");
  });
  gameBoard.fill(null);
  currentPlayer = "red";
  currentPlayerDisplay.textContent = "Red's turn";
  messageDisplay.textContent = ""; // Clear any win or tie messages
}

window.onload = createGrid;
