import express from "express";
import { gameList } from "../data/gameList.mjs";
import { Game } from "../modules/Game.mjs";

export const toPlayRouter = express.Router();

//read - GET - /toplay/
toPlayRouter.get("/", (_, res) => {
  try {
    res.status(200).json(gameList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "internal error", error });
  }
});

//read - GET /toplay/:id

toPlayRouter.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const found = gameList.find((game) => game.id === +id);

    if (found) {
      res.status(200).json(found);
    } else {
      res.status(400).json({ message: "Could not find game with id: " + id });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal error", error });
  }
});

//create - post /toplay/
toPlayRouter.post("/", (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "title is missing" });
    }

    const newGame = new Game(Date.now(), title);

    gameList.push(newGame);
    res.status(201).json(newGame);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error, could not create game", error });
  }
});

//delete - /toplay/:id
toPlayRouter.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "Property id is missing" });
      return;
    }

    const index = gameList.findIndex((game) => game.id === +id);

    if (index < 0) {
      res.status(400).json({ message: "Game not found" });
    } else {
      const deleted = gameList.splice(index, 1);
      res.status(200).json({ message: "Game successfully deleted", deleted });
    }
  } catch (error) {
    res.status(500).json({ message: "Could not delete game" });
  }
});

//update - PATCH /toplay/:id - body
toPlayRouter.patch("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { game }: { game: Game } = req.body;

    if (+id !== game.id) {
      res.status(400).json({ message: "Could not find a matching id" });
    } else {
      const found = gameList.find((g) => g.id === game.id);

      if (found) {
        found.played = game.played;
        found.title = game.title;

        res.status(200).json(found);
      } else {
        res.status(404).json({ message: "Could not find the game" });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});
