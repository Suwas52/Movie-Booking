import express from "express";
import { addAdminController } from "../controllers/adminController";

const adminRouter = express.Router();

adminRouter.post("/signup", addAdminController);

export default adminRouter;
