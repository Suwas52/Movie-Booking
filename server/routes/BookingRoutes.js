import express from "express";
import { addMovieBooking } from "../controllers/bookingController";

const bookingRouter = express.Router();

bookingRouter.post("/bookMovie", addMovieBooking);

export default bookingRouter;
