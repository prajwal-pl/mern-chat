import { RequestHandler } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import tokenAndCookie from "../utils/Token";

export const signup: RequestHandler = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }
    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "User already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const boyProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfile = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfile : girlProfile,
    });
    if (newUser) {
      tokenAndCookie(newUser.id, res);
      await newUser.save();

      res.status(201).json({ message: "User signed up successfully", newUser });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "There was a problem signing up" });
  }
};

export const login: RequestHandler = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const correctPassword = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !correctPassword) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    tokenAndCookie(user.id, res);

    res.status(200).json({
      message: "Successfully logged in!",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
    });
  }
};

export const logout: RequestHandler = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Successfully logged out!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "something went wrong!" });
  }
};
