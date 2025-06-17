import express from "express";
import registerUser from "../controllers/RegisterUser.js";
import loginUser from "../controllers/LoginUser.js";
import { protect } from "../middleware/authMiddleware.js";
import { verifyUser } from "../controllers/authController.js";


const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/verify", protect, verifyUser);

export default router;