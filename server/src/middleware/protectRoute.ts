import { RequestHandler } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/user.model";

const protectedRoute: RequestHandler = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorised or invalid token!" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

    if (!decoded) {
      return res
        .status(401)
        .json({ message: "Unauthorised or invalid token!" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User does not exist" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Error in protectRoute middleware: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default protectedRoute;
