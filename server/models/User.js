import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: { 
            type: String, 
            required: true, 
            trim: true,
            unique: true
        },
        email: { 
            type: String, 
            required: true, 
            unique: true 
        },
        password: { 
            type: String, 
            required: true 
        },
        watchlist: [
            {
                movieId: String,
                title: String,
                poster: String,
                releaseDate: String,
            },
        ],
    }, 
    { 
    timestamps: true 
    }
);

export default mongoose.model("User", userSchema);