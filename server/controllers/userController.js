import User from "../models/User";

import bcrypt from "bcrypt";

export const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (error) {
    console.log(error);
  }

  if (!users) {
    return res
      .status(500)
      .json({ success: false, message: "Unexpected error" });
  }
  return res.status(200).json({
    users,
  });
};

export const registerController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .send({ success: false, message: "invalid Inputs" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(401)
        .send({ success: false, message: "Email is already successfully" });
    }

    //password bcrypt

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    return res
      .status(201)
      .send({ success: true, message: "New user created successfully" });
  } catch (error) {
    console.log(error);

    return next(error);
  }
};

export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (
      (!email && email.trim() === "") ||
      (!password && password.trim() === "")
    ) {
      return res
        .status(404)
        .send({ success: false, message: "invalid inputs" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "email not found" });
    }

    const matchPassword = await bcrypt.compare(password, user.password);

    if (!matchPassword) {
      return res
        .status(400)
        .send({ success: false, message: "Password not match" });
    }

    return res
      .status(201)
      .send({ success: false, message: "Login Successfully" });
  } catch (error) {
    return next(error);
  }
};
