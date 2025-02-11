import express from "express";
import multer from "multer";

import {
  getWork,
  getWorkItem,
  createWorkItem,
} from "../controllers/workControllers.js";
import upload from "../middleware/upload.js";
import isAuth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getWork);
router.get("/:workid", getWorkItem);
router.post(
  "/",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
  ]),
  createWorkItem
);

export default router;
