import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minLength: 6,
    },
    addMovies: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Admin", adminSchema);
