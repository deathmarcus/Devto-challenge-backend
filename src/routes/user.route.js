const { request, response } = require("express");
const express = require("express");
const {
  createUser,
  getUser,
  editUser,
  removeUser,
} = require("../usecases/user.usecase");
const { auth, verifyOwner } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/", async (request, response) => {
  const { body } = request;
  try {
    console.log(body);
    const user = await createUser(body);
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

router.get("/:id", async (request, response) => {
  try {
    const { params } = request;
    const user = await getUser(params.id);
    response.status(201);
    response.json({
      success: true,
      data: {
        userName: user.userName,
        userLastname: user.userLastname,
        userNickname: user.userNickname,
        userProfilePic: user.userProfilepic,
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

router.patch("/:id", auth, verifyOwner, async (request, response) => {
  try {
    const { params, body } = request;
    const user = await editUser(params.id, body);
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

router.delete("/:id", auth, verifyOwner, async (request, response) => {
  try {
    const { params } = request;
    const post = await removeUser(params.id);
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
