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
    const repo = req.params.repo;
    const { page, recordPerPage } = req.query;

    let data;

    if (page && recordPerPage) {
      const pageNumber = parseInt(page as string, 10);
      const recordsPerPage = parseInt(recordPerPage as string, 10);

      data = await domain1Service.getDataByRepo(
        repo,
        pageNumber,
        recordsPerPage
      );
    } else {
      data = await domain1Service.getDataByRepo(repo);
    }
    
    res.send(data);
  } catch (err) {
    console.error("Database error = ", err);
    res.status(500).send("Database error");
  }
});

router.get("/export/:repo", async (req: Request, res: Response) => {
  try {
    const fileName = `${req.params.repo}-${new Date().getTime()}`;
    const data = await domain1Service.ExportDataTable(
      req.params.repo,
      fileName
    );

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${fileName}.xlsx`
    );
    res.send(data);
  } catch (err) {
    console.error("Database error = ", err);
    res.status(500).send("Database error");
  }
});

export default router;
