import express from "express";

import authRoutes from "./auth.js";
import tasksRoutes from "./tasks.js";
import usersRoutes from "./users.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/tasks", tasksRoutes);
router.use("/users", usersRoutes);

export default router;
