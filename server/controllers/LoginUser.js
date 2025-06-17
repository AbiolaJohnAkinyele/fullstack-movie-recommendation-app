import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const LoginUser = async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if (!user) {
      res.status(404).json({ message: "Email/Password incorrect" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(404).json({ message: "Email/Password incorrect" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {expiresIn: "1d"});
    res
      .status(200)
      .json({
        message: "Login successful!",
        token,
        user: { id: user._id, username: user.username, email: user.email },
      });
  } catch (error) {
    res
      .status(404)
      .json({ message: "Server error Occur", error: error.message });
  }
};

export default LoginUser;