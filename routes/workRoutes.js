import express from "express";

import {
  getWork,
  getWorkItem,
  createWorkItem,
} from "../controllers/workControllers.js";
import { isAuth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getWork);
router.get("/:workid", getWorkItem);
router.post("/", isAuth, createWorkItem);

export default router;
