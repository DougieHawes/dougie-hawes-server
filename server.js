import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import emailRoutes from "./routes/emailRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import workRoutes from "./routes/workRoutes.js";

dotenv.config();

const MONGODB = process.env.MONGODB_URL;
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.listen(PORT, () => console.log(`express app running on port:${PORT}`));

app.use("/email", emailRoutes);
app.use("/user", userRoutes);
app.use("/work", workRoutes);

mongoose
  .connect(MONGODB)
  .then(() => console.log("mongodb connected"))
  .catch((e) => console.log(e));
