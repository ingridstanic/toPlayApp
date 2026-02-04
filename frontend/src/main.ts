import { getGames } from "./services/gameServices";
import "./style.css";
import { createHtml } from "./utils/htmlUtils";

const toPlay = await getGames();
createHtml(toPlay);
