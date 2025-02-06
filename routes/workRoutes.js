import express from "express";
import multer from "multer";

const upload = multer({ dest: "uploads/" });

import {
  getWork,
  getWorkItem,
  createWorkItem,
} from "../controllers/workControllers.js";
import { isAuth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getWork);
router.get("/:workid", getWorkItem);
router.post("/", upload.array("images", 10), createWorkItem);

export default router;
