import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
const gameView = new GameView();
gameView.updateBoard(game);

let tiles = document.querySelectorAll(".board-tile");
document.querySelector(".restart").addEventListener("click", () => {
  game = new Game();
  gameView.updateBoard(game);
});

tiles.forEach((tile, index) => {
  tile.addEventListener("click", () => {
    if (game.board[index] === null && !game.winner) {
      game.makeMove(index);
      gameView.updateBoard(game);
      game.nextTurn();
    }
  });

  tile.addEventListener("mouseover", () => {
    if (game.board[index]) {
      tile.style.cursor = "not-allowed";
    } else {
      tile.style.cursor = "pointer";
    }
  });
});
