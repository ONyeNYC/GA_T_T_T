# Tic-Tac-Toe Game

## Overview

This is a simple Tic-Tac-Toe game implemented in JavaScript. The game allows two players to take turns marking a square in a 3x3 grid. The player who places three of their marks in a horizontal, vertical, or diagonal row wins the game.

## Features

- 3x3 game board
- Two players: Red and Blue
- Win and tie detection

## How to Play

1. Open `index.html` in your web browser.
2. The game board will be displayed, and it's Red's turn first.
3. Click on a square to place your mark.
4. The game will automatically detect a win or a tie.
5. To reset the game, click the 'Reset' button.

## Code Structure

- `let currentPlayer = "red";`: Keeps track of the current player.
- `let gameBoard = Array(9).fill(null);`: Represents the game board.
- `createGrid()`: Creates the 3x3 grid.
- `handleSquareClick(event)`: Handles square clicks.
- `checkWin()`: Checks for a win or tie.
- `resetGame()`: Resets the game board.

## Installation

1. Clone the repository.
2. Open `index.html` in your web browser.

## Contributing

Feel free to contribute to this project by submitting a pull request.

## License

MIT License
