import express from "express";
import {
  registerController,
  getAllUser,
  loginController,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/all-user", getAllUser);

userRouter.post("/register", registerController);

userRouter.post("/login", loginController);

export default userRouter;
