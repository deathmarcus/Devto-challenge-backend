const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  postId: {
    type: String,
    required: true,
  },
  likes: [
    {
      type: String,
      required: true,
    },
  ],
  likesCounts: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("likes", likeSchema);
