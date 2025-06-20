import User from "../models/User.js";
import { protect } from "../middleware/authMiddleware.js";

export const addToWatchlist = async (req, res) => {
    const { movieId, title, poster, releaseDate } = req.body;

    try {
        const user = await User.findById(req.user.id);

        //Prevent duplicates
        const alreadyExists = user.watchlist.find((movie) => movie.movieId === movieId);
        if(alreadyExists){
            return res.status(400).json({ msg: "Movie already in watchlist"});
        }

        // Add movie
        user.watchlist.push({ movieId, title, poster, releaseDate });
        await user.save();
        res.status(200).json({message: "Movie added to watchlist successfully"});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server error occur"});
    }
};

export const getWatchlist = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.status(200).json(user.watchlist);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Unable to fetch watchlist"});
    }
};