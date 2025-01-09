class Player {
  constructor(nom, symbol) {
    this.nom = nom;
    this.symbol = symbol;
  }
}

class GameUI {
  constructor(boardElement, playerNameSpan, playerSymbolSpan) {
    this.boardElement = boardElement;
    this.playerNameSpan = playerNameSpan;
    this.playerSymbolSpan = playerSymbolSpan;
  }

  initializeBoard(clickHandler) {
    this.boardElement.innerHTML = '';
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.index = i;
      this.boardElement.appendChild(cell);

      cell.addEventListener('click', () => clickHandler(i, cell));
    }
  }

  updateCell(cell, symbol) {
    cell.textContent = symbol;
    cell.classList.add(symbol === 'X' ? 'cross' : 'circle');
  }

  updateCurrentPlayer(player) {
    this.playerNameSpan.textContent = player.nom;
    this.playerSymbolSpan.textContent = player.symbol;
  }

  resetBoard() {
    const cells = this.boardElement.querySelectorAll('.cell');
    cells.forEach(cell => {
      cell.textContent = '';
      cell.classList.remove('cross', 'circle');
    });
  }
}

class Game {
  constructor(player1, player2, ui) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = player1;
    this.gameState = Array(9).fill(null);
    this.ui = ui;
  }

  start() {
    this.ui.initializeBoard(this.handleCellClick.bind(this));
    this.ui.updateCurrentPlayer(this.currentPlayer);
  }

  handleCellClick(index, cell) {
    if (this.gameState[index]) return;

    this.gameState[index] = this.currentPlayer.symbol;
    this.ui.updateCell(cell, this.currentPlayer.symbol);

    if (this.checkWin()) {
      alert(`${this.currentPlayer.nom} a gagné !`);
      this.resetGame();
      return;
    }

    if (this.isDraw()) {
      alert("Match nul !");
      this.resetGame();
      return;
    }

    this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
    this.ui.updateCurrentPlayer(this.currentPlayer);
  }

  checkWin() {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    return winningCombinations.some(combination => {
      const [a, b, c] = combination;
      return (
        this.gameState[a] &&
        this.gameState[a] === this.gameState[b] &&
        this.gameState[a] === this.gameState[c]
      );
    });
  }

  isDraw() {
    return this.gameState.every(cell => cell !== null);
  }

  resetGame() {
    this.gameState = Array(9).fill(null);
    this.currentPlayer = this.player1;
    this.ui.resetBoard();
    this.ui.updateCurrentPlayer(this.currentPlayer);
  }
}

const startButton = document.getElementById('start-game');
const board = document.querySelector('.board');
const currentPlayerInfo = document.getElementById('current-player');
const playerNameSpan = document.getElementById('player-name');
const playerSymbolSpan = document.getElementById('player-symbol');

const player1 = new Player('Goku', 'X');
const player2 = new Player('Saitama', 'O');
const ui = new GameUI(board, playerNameSpan, playerSymbolSpan);
const game = new Game(player1, player2, ui);

startButton.addEventListener('click', () => {
  startButton.classList.add('hidden');
  board.classList.remove('hidden');
  currentPlayerInfo.classList.remove('hidden');
  game.start();
});