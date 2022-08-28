const { request } = require("express");
const express = require("express");
const auth = require("../middlewares/auth.middleware");
const {
  createPost,
  getAllPosts,
  getPost,
  editPost,
  removePost,
} = require("../usecases/post.usecase");

const router = express.Router();

router.post("/", async (request, response) => {
  const { body } = request;
  try {
    console.log(body);
    const user = await createPost(body);
    response.status(201);
    response.json({
      success: true,
      data: {
        user,
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

router.get("/", async (request, response) => {
  try {
    const { query } = request;
    const posts = await getAllPosts(query);
    response.json({
      success: true,
      data: {
        posts,
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

router.get("/:id", auth, async (request, response) => {
  try {
    const { params } = request;
    const post = await getPost(params.id);
    response.json({
      success: true,
      data: {
        post,
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

router.patch("/:id", async (request, response) => {
  try {
    const { params, body } = request;
    const post = await editPost(params.id, body);
    response.json({
      success: true,
      data: {
        post,
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
    const post = await removePost(params.id);
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

//Eliminar todo
