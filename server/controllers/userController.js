import User from "../models/User";

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

    const user = new User({ name, email, password });
    await user.save();

    return res
      .status(201)
      .send({ success: true, message: "New user created successfully" });
  } catch (error) {
    console.log(error);

    return next(error);
  }
};
