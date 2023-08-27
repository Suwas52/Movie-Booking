import Booking from "../models/Booking";

export const addMovieBooking = async (req, res, next) => {
  try {
    const { movie, date, seatNumber, user } = req.body;

    if (!movie && !date && !seatNumber && !user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Booking " });
    }

    const booking = await new Booking({
      movie,
      date: new Date(`${date}`),
      seatNumber,
      user,
    });

    const bookingAdded = await booking.save();

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
