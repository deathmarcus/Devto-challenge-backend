const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  comments: {
    postId: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    body: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    likes: {
      type: [
        {
          type: String,
        },
      ],
    },
    replies: {
      type: [
        {
          body: {
            type: String,
            required: true,
          },
          userId: {
            type: String,
            required: true,
          },
          createdAt: {
            type: Date,
            default: Date.now(),
          },
          likes: {
            type: [
              {
                type: String,
              },
            ],
          },
        },
      ],
    },
  },
});

module.exports = mongoose.model("comments", commentSchema);
