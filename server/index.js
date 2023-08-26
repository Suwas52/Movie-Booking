import express from "express";

import mongoose from "mongoose";

import dotenv from "dotenv";
import userRouter from "./routes/UserRoutes";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/user", userRouter);

mongoose
  .connect(process.env.URL)
  .then(() => {
    app.listen(5000, () => {
      console.log(`Database is connected to successfully`);
    });
  })
  .catch((error) => console.log(error));
