const LikePost = require("../models/likes.model");

const getLikes = async (postId, userId) => {
  const likeDocument = await LikePost.findOne({ postId });

  const likeDocumentId = likeDocument._id.toString();
  console.log("UserId:", userId);
  const userExistInDocument = likeDocument.likes.includes(userId);
  const result = {
    userExistInDocument,
    numberOfLikes: likeDocument.likesCounts,
  };
  console.log(result);
  return result;
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

const removeLike = async (body) => {
  const { postId, likes } = body;
  const likeDocument = await LikePost.findOne({ postId });
  console.log("likeDocument", likeDocument);
  const likeDocumentId = likeDocument._id.toString();
  likeDocument.likes.remove(likes);
  likeDocument.likesCounts = likeDocument.likes.length;
  const updatedLikeDocument = await LikePost.findOneAndUpdate(
    likeDocumentId,
    likeDocument,
    {
      returnDocument: "after",
    }
  );

  return updatedLikeDocument;
};

const newLike = async (body) => {
  const { postId, likes } = body;
  const postIdExist = await LikePost.exists({ "post.postId": postId });
  if (!postIdExist) {
    const newLikeObject = LikePost.create(body);
    return newLikeObject;
  } else {
    const likeAdd = await LikePost.findOne({ postId });
    const likeDocumentId = likeAdd._id.toString();
    if (likeAdd.likes.includes(likes)) {
      return;
    }
    likeAdd.likes.push(body.likes);
    likeAdd.likesCounts = likeAdd.likes.length;
    const updatedAddLike = await LikePost.findOneAndUpdate(
      likeDocumentId,
      likeAdd,
      {
        returnDocument: "after",
      }
    );
    return updatedAddLike;
  }
};

module.exports = { getLikes, removeLike, addLikes, newLike };
