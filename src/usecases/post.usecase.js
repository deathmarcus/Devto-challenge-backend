const PostDev = require("../models/post.model")

const createPost = (postData) => {
    const postDev = PostDev.create(postData)
    return postDev
}

const getAllPosts = (filters) => {
    const posts = PostDev.find(filters)
    return posts
}

const getPost = (id) => {
    const post = PostDev.findById(id)
    return post
}

const editPost = (id, postData) => {
    const post = PostDev.findByIdAndUpdate(id, postData, {returnDocument: "after"})
    return post
}

const removePost = (id) => {
    const post = PostDev.findByIdAndDelete(id)
    return post
}

module.exports = { createPost, getAllPosts, getPost, editPost, removePost }