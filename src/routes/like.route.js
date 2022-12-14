const express = require("express");
const {
  getLikes,
  removeLike,
  addLikes,
  newLike,
} = require("../usecases/like.usecase");

const router = express.Router();

router.post("/", async (request, response) => {
  const { body } = request;
  console.log("body", body);
  try {
    const likePost = await newLike(body);
    response.status(201);
    response.json({
      success: true,
      data: {
        likePost,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const postId = request.params.id;
    const userId = request.headers.userid;
    const postLikeInfo = await getLikes(postId, userId);
    response.json({
      success: true,
      data: {
        postLikeInfo,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

router.patch("/", async (request, response) => {
  try {
    const { body } = request;
    console.log();
    const like = await removeLike(body);
    response.json({
      success: true,
      data: {
        like,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const { params } = request;
    const likeRemo = await removeLikes(params.id);
    response.json({
      success: true,
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
