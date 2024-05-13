import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth.route";
import messageRouter from "./routes/message.route";
import userRouter from "./routes/user.route";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Testing server...");
});

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);

app.listen(4000, () => {
  connectDB();
  console.log("Server running on port: 4000");
});
