const mongoose = require("mongoose")

const likeSchema = new mongoose.Schema({
    postLikesCount: {
        type: {
            postId: {
                type: String,
                required: true
            },
            userIdLikes: {
                type:
                {
                    userId: {
                        type: String,
                        required: true
                    }
                },
                required: true
            }
        }
    }
})

module.exports = mongoose.model("likes", likeSchema)