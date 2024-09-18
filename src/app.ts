import express from "express";
import data from "./domain/data/controller/data.controller";
import { RegisterRoutes } from './domain/routes'; // tsoa generated routes

import swaggerUi from "swagger-ui-express";

const app = express();
const port = 3000;

RegisterRoutes(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/data", data);

// eslint-disable-next-line @typescript-eslint/no-require-imports
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(require('../dist/swagger.json')));
app.get("/api-docs/json", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  console.log( require('../dist/swagger.json'))
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  res.send(JSON.stringify(require('../dist/swagger.json'))
  ) 
});


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
