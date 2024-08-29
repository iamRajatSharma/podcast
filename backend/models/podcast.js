const mongoose = require("mongoose")

const podcasts = new mongoose.Schema({
    thumbnail: {
        type: String,
        unique: true,
        required: true
    },
    audio: {
        type: String,
        unique: true,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "category"
    }
}, { timestamps: true })

module.exports = mongoose.model("podcasts", podcasts);