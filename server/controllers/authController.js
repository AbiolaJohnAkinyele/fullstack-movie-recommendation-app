import User from "../models/User.js";

export const verifyUser = async (req, res) =>{
    const user = await User.findById(req.use.id).select("-password");
    if(!user){
        return res.status(404).json({message: "User not found"});
    }
    res.status(200).json({ user });
};