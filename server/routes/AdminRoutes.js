import express from "express";
import {
  addAdminController,
  getAllAdmin,
  loginAdmin,
} from "../controllers/adminController";

const adminRouter = express.Router();

adminRouter.post("/signup", addAdminController);

adminRouter.get("/allAdmin", getAllAdmin);

adminRouter.post("/login", loginAdmin);

export default adminRouter;
