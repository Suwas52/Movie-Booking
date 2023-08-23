import User from "../models/User";

export const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (error) {
    console.log(error);
  }

  if (!users) {
    return res.status(500).json({ status: false });
  }
  return res.status(200).json({
    users,
  });
};
