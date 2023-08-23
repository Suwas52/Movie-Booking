import express from "express";
import { getAllUser } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", getAllUser);

export default userRouter;
