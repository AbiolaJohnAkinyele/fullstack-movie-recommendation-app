import jwt from "jsonwebtoken";

export const protect = (req, res, next) =>{
    const authHeader = req.headers.authorization;

    if(!authHeader?.startsWith("Bearer ")){
        return res.status(401).json({message: "No token, auth denied"});
    }
    try {
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.status(401).json({message: "Token not valid"});
    } catch (error) {
        
    }
};