const LikePost = require("../models/likes.model");

const getLikes = (filters) => {
  const likes = LikePost.find(filters);
  return likes;
};

const addLikes = async (id, data) => {
  const likeAdd = await LikePost.findOne({ id });
  const likeDocumentId = likeAdd._id.toString();
  likeAdd.likes.push(data.likes);
  likeAdd.likesCounts = likeAdd.likes.length;
  const updateAddLike = await LikePost.findOneAndUpdate(
    likeDocumentId,
    likeAdd,
    {
      returnDocument: "after",
    }
  );
  return updateAddLike;
};

const removeLikes = (id) => {
  const likeRem = LikePost.findByIdAndDelete(id);
  return likeRem;
};

const newLike = async (body) => {
  const { postId } = body;
  const postIdExist = await LikePost.exists({ "post.postId": postId });
  if (!postIdExist) {
    const newLikeObject = LikePost.create(body);
    return newLikeObject;
  } else {
    return false;
  }
};

module.exports = { getLikes, removeLikes, addLikes, newLike };
