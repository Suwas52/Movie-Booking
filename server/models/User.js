import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "name is required"],
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    bookings: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Booking",
      },
    ],
  },
  { timestamps: true }
);
export default mongoose.model("User", userSchema);
