const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    postAuthor: {
        type: String,
        required: true
    },
    postBody: {
        type: String,
        required: true
    },
    postChangeDate: {
        type: Date
    },
    postCreationDate: {
        type: Date,
        default: Date.now()
    },
    postImage: {
        type: String,
        default:"https://picsum.photos/200/300?grayscale=random=37"
    },
    postLikesCount: {
        type: Number,
        default:0
    },
    postSavedCount: {
        type: Number,
        default:0
    },
    postTags: {
        type:
        {
            0: {
                type: String,
                default:""
            },
            _id:false,
            1: {
                type: String,
                default:""
            },
            _id:false,
            2: {
                type: String,
                default:""
            },
            _id:false,
            3: {
                type: String,
                default:""
            },
            _id:false
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
        type: Number,
        default:0        
    }
})

module.exports = mongoose.model("postSchema", postSchema)