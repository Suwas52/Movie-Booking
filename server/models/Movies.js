import mongoose from "mongoose";

const moviesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    desc: { type: String, required: [true, "Description is required"] },
    releaseDate: { type: Date, required: [true, "Date is required"] },
    posterUrl: { type: String, required: [true, "Image Url is required"] },
    actors: [
      {
        type: String,
        required: [true, "Actor is required"],
      },
    ],
    featured: {
      Boolean,
    },
    booking: [
      {
        type: String,
      },
    ],
    admin: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Movies", moviesSchema);
