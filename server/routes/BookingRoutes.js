import express from "express";
import {
  addMovieBooking,
  getAllBooking,
  getByIdBooking,
} from "../controllers/bookingController";

const bookingRouter = express.Router();

bookingRouter.post("/bookMovie", addMovieBooking);
bookingRouter.get("/allBookings", getAllBooking);
bookingRouter.get("/movieBook/:id", getByIdBooking);

export default bookingRouter;
