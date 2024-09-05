import express, { Request, Response } from "express";
import { Domain1Service } from "../service/data.service";

const router = express.Router();
const domain1Service = new Domain1Service();

router.get("/", async (req: Request, res: Response) => {
  try {
    const data = await domain1Service.getDataBase();
    res.send(data);
  } catch (err) {
    console.error("Database error = ", err);
    res.status(500).send("Database error");
  }
});

router.get("/:repo", async (req: Request, res: Response) => {
  try {
    const data = await domain1Service.getDataByRepo(req.params.repo);
    res.send(data);
  } catch (err) {
    console.error("Database error = ", err);
    res.status(500).send("Database error");
  }
});

export default router;
