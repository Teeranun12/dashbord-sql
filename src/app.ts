import express from "express";
import client from "./config/datasource";
import data from "./domain/data/controller/data.controller";

const app = express();
const port = 3000;

client.connect();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/data", data);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
