import mongoose from "mongoose";
import Booking from "../models/Booking";
import Movies from "../models/Movies";
import User from "../models/User";

export const addMovieBooking = async (req, res, next) => {
  try {
    const { movie, date, seatNumber, user } = req.body;

    if (!movie && !date && !seatNumber && !user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Booking " });
    }

    const booking = new Booking({
      movie,
      date: new Date(`${date}`),
      seatNumber,
      user,
    });

    const existingMovie = await Movies.findById(movie);
    const existingUser = await User.findById(user);

    if (!existingUser) {
      return res
        .status(401)
        .json({ success: false, message: "User not found " });
    }

    if (!existingMovie) {
      return res
        .status(401)
        .json({ success: false, message: "Movie not found" });
    }

    const session = await mongoose.startSession();
    session.startTransaction();
    existingMovie.bookings.push(booking);
    existingUser.bookings.push(booking);
    await existingMovie.save({ session });
    await existingUser.save({ session });
    const bookingAdded = await booking.save({ session });
    await session.commitTransaction();

    if (!bookingAdded) {
      return res
        .status(404)
        .json({ success: false, message: "Booking is failed" });
    }

    return res
      .status(201)
      .json({ success: true, message: "Booking is successfully", booking });
  } catch (error) {
    return next(error);
  }
};

export const getAllBooking = async (req, res, next) => {
  try {
    const bookings = await Booking.find();

    if (!bookings) {
      return res.status(404).json({
        success: false,
        message: "Invalid request",
      });
    }

    return res.status(201).json({
      success: true,
      message: "All Booking Lists",
      bookings,
    });
  } catch (error) {
    return next(error);
  }
};

export const getByIdBooking = async (req, res) => {
  try {
    const id = req.params.id;

    const booking = await Booking.findById(id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Invalid request",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Booking By Id",
      booking,
    });
  } catch (error) {
    return next(error);
  }
};

export const deleteByIdBooking = async (req, res, next) => {
  try {
    const id = req.params.id;

    let booking;

    booking = await Booking.findByIdAndRemove(id).populate("user movie");

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Invalid request",
      });
    }

    const session = await mongoose.startSession();
    session.startTransaction();

    await booking.user.bookings.pull(booking);
    await booking.movie.bookings.pull(booking);
    await booking.movie.save({ session });
    await booking.user.save({ session });
    session.commitTransaction();

    return res.status(201).json({
      success: true,
      message: "Booking Delete Successfully",
    });
  } catch (error) {
    return next(error);
  }
};
