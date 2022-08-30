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

const newLike = async (body) => {
    const { postId } = body.post
    const postIdExist = await LikePost.exists({"post.postId": postId})
    if (!postIdExist) {
    const newLikeObject = LikePost.create(body);
    return newLikeObject
    } else {
        return false
    }
}

module.exports = { getLikes, removeLikes, addLikes, newLike }