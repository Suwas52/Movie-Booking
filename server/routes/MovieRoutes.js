import express from "express";
import { addMoviesController } from "../controllers/moviesController";

const MovieRouter = express.Router();

MovieRouter.post("/addMovie", addMoviesController);

export default MovieRouter;
