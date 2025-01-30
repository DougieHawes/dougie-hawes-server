import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import userRoutes from "./routes/userRoutes.js";
import workRoutes from "./routes/workRoutes.js";

dotenv.config();

const MONGODB = process.env.MONGODB_URL;
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log(`express app running on port:${PORT}`));

app.get("/", (req, res) => res.status(200).json({ msg: "Hello World!" }));

app.use("/user", userRoutes);
app.use("/work", workRoutes);

// mongoose
//   .connect(MONGODB)
//   .then(() => console.log("mongodb connected"))
//   .catch((e) => console.log(e));
