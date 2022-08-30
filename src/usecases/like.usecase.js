const LikePost = require("../models/likes.model");
let newLikeData = []


const getLikes = (filters) => {
    const likes = LikePost.find(filters);
    return likes
}

const addLikes = async (id, data) => {
    const likeAdd = await LikePost.findById(id);
    likeAdd.post.likes.push(data.post.likes)
    likeAdd.post.likesCounts += 1
    likeAdd.save()
    return likeAdd
}

const removeLikes = (id) => {
    const likeRem = Likepost.findByIdAndDelete(id);
    return likeRem
}

const newLike = (like) => {
    const newLikeObject = LikePost.create(like);
    return newLikeObject
}

module.exports = { getLikes, removeLikes, addLikes, newLike }