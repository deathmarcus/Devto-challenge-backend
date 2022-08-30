const PostDev = require("../models/post.model");
const { getUser } = require("../usecases/user.usecase");

const createPost = async (postData) => {
  const user = await getUser(postData.postAuthor);
  console.log("user:", user);
  const postDataWithId = {
    ...postData,
    postAuthor: user.userNickname,
    postAuthorId: postData.postAuthor,
  };
  const postDev = PostDev.create(postDataWithId);
  return postDev;
};

const getAllPosts = (filters) => {
  const posts = PostDev.find(filters);
  return posts;
};

const getPost = (id) => {
  const post = PostDev.findById(id);
  return post;
};

const editPost = (id, postData) => {
    const editedPost = {...postData, postChangeDate: Date.now()}
    const post = PostDev.findByIdAndUpdate(id, editedPost, {
    returnDocument: "after",
  });
  return post;
};

const removePost = (id) => {
  const post = PostDev.findByIdAndDelete(id);
  return post;
};

module.exports = { createPost, getAllPosts, getPost, editPost, removePost };
