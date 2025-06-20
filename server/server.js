import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import watchlistRoutes from "./routes/watchlistRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/watchlist", watchlistRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is running...");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));

