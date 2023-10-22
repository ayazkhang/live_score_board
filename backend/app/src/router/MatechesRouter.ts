import express, { Request, Response } from "express";
import { getMatches, start_new_match, update_current_match, delete_match } from "../controllers/matchesController";

const router = express.Router();

router

  .get("/", async (req: Request, res: Response) => {

    try {

      const matches = await getMatches();
      const responseArr = {
        matches: matches,
      };
      return res.send(responseArr);
    } catch (error) {
      const errorMessage = "An error occurred while fetching matches";
      return res.status(500).send(errorMessage);
    }
  })


  .put("/:id", async (req: Request, res: Response) => {

    try {


      
      const matches = await update_current_match(req.body);
      const responseArr = {
        matches: matches,
      };
      return res.send(responseArr);
    } catch (error) {
      const errorMessage = "An error occurred while fetching matches";
      return res.status(500).send(errorMessage);
    }
  })

  .post("/", async (req: Request, res: Response) => {

    try {
      const result = await start_new_match(req.body);
      return res.send(result);
    } catch (error) {
      const errorMessage = "An error occurred while creating a category";
      return res.status(500).send(errorMessage);
    }
  })

  .delete("/:id", async (req: Request, res: Response) => {

    try {

      const id = req.params.id;
      const matches = await delete_match(id);
      const responseArr = {
        matches: matches,
      };
      return res.send(responseArr);
    } catch (error) {
      const errorMessage = "An error occurred while fetching matches";
      return res.status(500).send(errorMessage);
    }
  });

export default router;
