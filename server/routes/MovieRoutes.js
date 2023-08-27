import express from "express";
import {
  addMoviesController,
  allMoviesController,
  getMovieById,
} from "../controllers/moviesController";

const MovieRouter = express.Router();

MovieRouter.post("/addMovie", addMoviesController);
MovieRouter.get("/allMovies", allMoviesController);
MovieRouter.get("/getMovie/:id", getMovieById);

export default MovieRouter;
