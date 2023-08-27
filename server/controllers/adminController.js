import jwt from "jsonwebtoken";
import Admin from "../models/Admin";
import bcrypt from "bcrypt";

export const addAdminController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (
      (!email && email.trim() === "") ||
      (!password && password.trim() === "")
    ) {
      return res
        .status(400)
        .json({ success: false, message: "invalid inputs" });
    }

    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      return res.status(401).json({
        success: false,
        message: "Email is already existed",
      });
    }

    //hashed password
    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = new Admin({ email, password: hashedPassword });
    const saveAdmin = await admin.save();

    if (!saveAdmin) {
      return res.status(500).json({
        success: true,
        message: "Admin register succesfully",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Admin register succesfully",
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

export const loginAdmin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const adminEmail = await Admin.findOne({ email });

    if (!adminEmail) {
      return res.status(400).json({
        success: false,
        message: "This email is not register for admin",
      });
    }

    const matchedPassword = await bcrypt.compare(password, adminEmail.password);

    if (!matchedPassword) {
      return res
        .status(401)
        .json({ success: false, message: "password is not matched" });
    }

    const token = jwt.sign({ id: adminEmail._id }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    return res.status(201).json({
      success: true,
      message: "Admin Login Successfully",
      adminEmail,
      token,
    });
  } catch (error) {
    console.log(error);
  }
};
