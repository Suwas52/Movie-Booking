import express from "express";
import {
  registerController,
  getAllUser,
  loginController,
  updateUserController,
  deleteUserController,
  bookingByUserId,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/all-user", getAllUser);

userRouter.post("/register", registerController);

userRouter.put("/update-user/:id", updateUserController);

userRouter.delete("/delete-user/:id", deleteUserController);

userRouter.post("/login", loginController);

userRouter.get("/booking/:id", bookingByUserId);

export default userRouter;
