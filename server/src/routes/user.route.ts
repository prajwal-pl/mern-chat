import express from "express";
import { getUsers } from "../controllers/users.controller";
import protectedRoute from "../middleware/protectRoute";
const router = express.Router();

router.get("/", protectedRoute, getUsers);

export default router;
