const LikePost = require("../models/likes.model");


const getLikes = (filters) => {
    const likes = LikePost.find(filters);
    return likes
}

const addLikes = (id, data) => {
    const likeAdd = LikePost.findByIdAndUpdate(id, data, {returnDocument:"after"});
    return likeAdd
}

const removeLikes = (id) => {
    const likeRem = Likepost.findByIdAndDelete(id);
    return likeRem
}

const newLike = (data) => {
    const newLikeObject = LikePost.create(data);
    return newLikeObject
}

module.exports = { getLikes, removeLikes, addLikes, newLike }