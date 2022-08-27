const mongoose = require("mongoose")

const postDev = new mongoose.Schema({
    postAuthor: {
        type: String,
        required: true
    },
    postBody: {
        type: String,
        required: true
    },
    postChangeDate: {
        type: Date,
        default: Date.now()
    },
    postCreationDate: {
        type: Date,
        default: Date.now()
    },
    postImage: {
        type: String
    },
    postLikesCount: {
        type: Number
    },
    postSavedCount: {
        type: Number
    },
    postTags: {
        type:
        {
            tags: {
                type: String
            }
        }
    },
    postTimeToRead: {
        type: Number
    },
    postTitle: {
        type: String,
        required: true
    },
    postUnicornCount: {
        type: Number
    }
})

module.exports _ mongoose.model("postDev", postDev)