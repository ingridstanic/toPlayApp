import type { Game } from "../models/Game";

export const getGames = async () => {
  try {
    const reponse = await fetch("http://localhost:3000/toplay");

    const data: Game[] = await reponse.json();

    return data;
  } catch (error) {
    console.error("Could not fetch data from api");
    return [];
  }
};
