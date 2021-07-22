class Game {
  constructor() {
    this.turn = "X";
    this.board = new Array(9).fill(null);
    this.winner = null;
  }

  nextTurn() {
    this.turn = this.turn === "X" ? "O" : "X";
  }

  makeMove(i) {
    this.board[i] = this.turn;
    if (this.findWinningCombination()) {
      this.winner = this.turn;
    }
  }

  findWinningCombination() {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        this.board[a] === this.turn &&
        this.board[b] === this.turn &&
        this.board[c] === this.turn
      ) {
        return combination;
      }
    }
    return false;
  }
}

export default Game;
