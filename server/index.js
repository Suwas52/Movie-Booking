import express from "express";

import mongoose from "mongoose";

import cors from "cors";

import dotenv from "dotenv";
import userRouter from "./routes/UserRoutes";
import adminRouter from "./routes/AdminRoutes";
import MovieRouter from "./routes/MovieRoutes";
import bookingRouter from "./routes/BookingRoutes";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", MovieRouter);
app.use("/booking", bookingRouter);

mongoose
  .connect(process.env.URL)
  .then(() => {
    app.listen(5000, () => {
      console.log(`Database is connected to successfully`);
    });
  })
  .catch((error) => console.log(error));
