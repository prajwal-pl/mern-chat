import { RequestHandler } from "express";
import User from "../models/user.model";

export const getUsers: RequestHandler = async (req, res) => {
  try {
    const loggedInUserId = req.user?._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "something went wrong!" });
  }
};
