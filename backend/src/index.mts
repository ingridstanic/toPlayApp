import express, { json } from "express";
import { toPlayRouter } from "./routes/toPlayRouter.mjs";

const app = express();

app.use(json());

app.use("/toplay", toPlayRouter);

app.listen(3000, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Api is upp and running on port: 3000");
  }
});
