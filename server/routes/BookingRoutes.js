import express from "express";
import {
  addMovieBooking,
  deleteByIdBooking,
  getAllBooking,
  getByIdBooking,
} from "../controllers/bookingController";

const bookingRouter = express.Router();

bookingRouter.post("/bookMovie", addMovieBooking);
bookingRouter.get("/allBookings", getAllBooking);
bookingRouter.get("/movieBook/:id", getByIdBooking);
bookingRouter.delete("/deleteBook/:id", deleteByIdBooking);

export default bookingRouter;
