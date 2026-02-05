import type { Game } from "../models/Game";

//GET - read
export const getGames = async () => {
  try {
    const reponse = await fetch("http://localhost:3000/toplay/");
    const data: Game[] = await reponse.json();
    return data;
  } catch (error) {
    console.error("Could not fetch data from api");
    return [];
  }
};

//GET - read
export const getGameById = async (id: number) => {
  const response = await fetch("http://localhost:3000/toplay/" + id);
  const data: Game = await response.json();
  return data;
};

//POST - create
export const addGame = async (text: string) => {
  const response = await fetch("http://localhost:3000/toplay", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ title: text }),
  });

  const data: Game = await response.json();

  return data;
};

//DELETE
export const deleteGame = async (id: number) => {
  try {
    const response = await fetch("http://localhost:3000/toplay/" + id, {
      method: "DELETE",
    });
    return response.ok;
  } catch (error) {
    console.error(error);
    return false;
  }
};

//PATCH
export const updateGame = async (id: number, game: Game) => {
  try {
    const response = await fetch("http://localhost:3000/toplay/" + id, {
      method: "PATCH",
      body: JSON.stringify({ game }),
      headers: {
        "content-type": "application/json",
      },
    });

    return response.ok;
  } catch (error) {
    console.error(error);
    return false;
  }
};
