import express from "express";
import { addAdminController, loginAdmin } from "../controllers/adminController";

const adminRouter = express.Router();

adminRouter.post("/signup", addAdminController);

adminRouter.post("/login", loginAdmin);

export default adminRouter;
