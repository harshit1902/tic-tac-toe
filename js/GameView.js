export default class GameView {
  updateBoard(game) {
    this.updateTurn(game);
    for (let i = 0; i <= 8; i++) {
      const tile = document.querySelector(`.board-tile[data-index='${i}']`);
      tile.textContent = game.board[i];

      tile.classList.remove("icon-X");
      tile.classList.remove("icon-O");
      tile.classList.remove("winner");

      if (game.board[i] === "O") {
        tile.classList.add(`icon-O`);
      }
      if (game.board[i] === "X") {
        tile.classList.add(`icon-X`);
      }

      if (
        game.findWinningCombination() &&
        game.findWinningCombination().includes(i)
      ) {
        tile.classList.remove("icon-X");
        tile.classList.remove("icon-O");
        tile.classList.add("winner");
      }
    }
  }

  updateTurn(game) {
    const playerX = document.querySelector(".player-X");
    const playerO = document.querySelector(".player-O");

    game.turn === "X"
      ? playerX.classList.add("active")
      : playerX.classList.remove("active");
    game.turn === "O"
      ? playerO.classList.add("active")
      : playerO.classList.remove("active");
  }
}
