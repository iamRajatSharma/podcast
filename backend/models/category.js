const mongoose = require("mongoose")

const category = new mongoose.Schema({
    categoryname: {
        type: String,
        unique: true,
        required: true
    },
    podcasts: [{
        type: mongoose.Types.ObjectId,
        ref: "podcasts"
    }]
}, { timestamps: true })

module.exports = mongoose.model("category", category);