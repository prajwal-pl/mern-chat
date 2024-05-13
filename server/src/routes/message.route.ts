import express from "express";
import { getMessages, sendMessages } from "../controllers/message.controller";
import protectedRoute from "../middleware/protectRoute";

const router = express.Router();

router.get("/:id", protectedRoute, getMessages);
router.post("/send/:id", protectedRoute, sendMessages);

export default router;
