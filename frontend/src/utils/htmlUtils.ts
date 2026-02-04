import type { Game } from "../models/Game";

export const createHtml = (toPlay: Game[]) => {
  const gameContainer = document.getElementById("gameContainer");

  if (gameContainer) {
    gameContainer.innerHTML = "";
  }

  toPlay.forEach((game) => {
    const gameCard = document.createElement("li");
    const gameTitle = document.createElement("span");

    gameTitle.innerHTML = game.title;

    gameCard.appendChild(gameTitle);
  });
};
