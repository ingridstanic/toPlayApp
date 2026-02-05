import { addGame, getGames } from "./services/gameServices";
import "./style.css";
import { createHtml } from "./utils/htmlUtils";

document.getElementById("gameForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userInput = (document.getElementById("gameText") as HTMLInputElement)
    .value;

  const data = await addGame(userInput);

  console.log("DATA", data);

  (document.getElementById("gameText") as HTMLInputElement).value = "";

  const gamesToPlay = await getGames();
  createHtml(gamesToPlay);
});

const toPlay = await getGames();
createHtml(toPlay);
