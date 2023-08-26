import express from "express";
import { registerController, getAllUser } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", getAllUser);

userRouter.post("/register", registerController);

export default userRouter;
