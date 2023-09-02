import Admin from "../models/Admin";
import Booking from "../models/Booking";
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
    const existingAdmin = await Admin.findOne({ email });

    if (existingUser || existingAdmin) {
      return res
        .status(401)
        .json({ success: false, message: "Email is already register" });
    }

    //password bcrypt

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    return res
      .status(201)
      .json({ success: true, message: "New user created successfully", user });
  } catch (error) {
    console.log(error);

    return next(error);
  }
};

export const updateUserController = async (req, res, next) => {
  try {
    const id = req.params.id;

    const { name, email, password } = req.body;

    if (
      (!name && name.trim() === "") ||
      (!email && email.trim() === "") ||
      (!password && password.trim() === "")
    ) {
      return res
        .status(404)
        .send({ success: false, message: "Field the input" });
    }

    const passwordHashed = await bcrypt.hash(password, 10);

    const user = await User.findByIdAndUpdate(id, {
      name,
      email,
      password: passwordHashed,
    });

    if (!user) {
      return res
        .status(201)
        .send({ success: false, message: "something is wrong" });
    }

    return res
      .status(201)
      .send({ success: true, message: "update successfully" });
  } catch (error) {
    return next(error);
  }
};

export const deleteUserController = async (req, res, next) => {
  try {
    const id = req.params.id;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Something is wrong" });
    }

    return res
      .status(201)
      .json({ success: true, message: "User Delete successfully" });
  } catch (error) {
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

export const bookingByUserId = async (req, res, next) => {
  const id = req.params.id;

  try {
    const bookings = await Booking.find({ user: id });

    if (!bookings) {
      return res
        .status(404)
        .json({ success: false, message: "booking not found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "User By Booking ", bookings });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};
