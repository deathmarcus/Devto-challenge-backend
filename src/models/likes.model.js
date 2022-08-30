const mongoose = require("mongoose")

const likeSchema = new mongoose.Schema({
    post: {
        postId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'posts',
            required: true
        },
        likes: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
            required: true
        }],
        likesCounts: {
            type: Number,
            default: 0
        }
    }
})

module.exports = mongoose.model("likes", likeSchema)