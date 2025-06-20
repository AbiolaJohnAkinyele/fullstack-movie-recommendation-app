import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { addToWatchlist, getWatchlist } from "../controllers/watchlistController.js";

const router = express.Router();

router.post("/add", protect, addToWatchlist);
router.get("/", protect, getWatchlist);

export default router;