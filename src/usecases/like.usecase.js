const LikePost = require("../models/likes.model");


const getLikes = (filters) => {
    const likes = LikePost.find(filters);
    return likes
}

const addLikes = (id, data) => {
    //let newLikeId = []
    //newLikeId.push(data.post.likes)//{...data, ...data.likes}
    //console.log(data, newLikeId)
    const likeAdd = LikePost.findById(id)//, newLikeId, {returnDocument:"after"});
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