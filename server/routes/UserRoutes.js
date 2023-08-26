import express from "express";
import {
  registerController,
  getAllUser,
  loginController,
  updateUserController,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/all-user", getAllUser);

userRouter.post("/register", registerController);

userRouter.put("/update-user/:id", updateUserController);

userRouter.post("/login", loginController);

export default userRouter;
