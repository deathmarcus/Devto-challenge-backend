const PostDev = require("../models/post.model")

const createPost = (postData) => {
    const postDev = PostDev.create(postData)
    return postDev
}

module.exports = { createPost }