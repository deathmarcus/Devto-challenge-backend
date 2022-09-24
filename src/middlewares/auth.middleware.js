const jwt = require("../lib/jwt.lib");
const createError = require("http-errors");
const { getPost } = require("../usecases/post.usecase");
const { getUser } = require("../usecases/user.usecase");

const auth = (request, response, next) => {
  try {
    const authorization = request.headers.authorization || "";
    const token = authorization.replace("Bearer ", "");
    const verifiedToken = jwt.verify(token);
    next();
  } catch (error) {
    response.status(401);
    response.json({
      success: false,
      error: error.message,
    });
  }
};

const verifyOwner = async (request, response, next) => {
  try {
    const authorization = request.headers.authorization || "";
    const token = authorization.replace("Bearer ", "");
    const verifiedOwner = jwt.verify(token);
    const postUserId = await getPost(request.params.id);
    const { postAuthorId } = postUserId;
    if (verifiedOwner.id === postAuthorId) {
      next();
    } else {
      throw createError(401, "No eres el creador del post");
    }
  } catch (error) {
    response.status(401);
    response.json({
      success: false,
      error: error.message,
    });
  }
};

const verifyUser = async (request, response, next) => {
  try {
    const authorization = request.headers.authorization || "";
    const token = authorization.replace("Bearer ", "");
    const verifiedUser = jwt.verify(token);
    const userId = await getUser(request.params.id);
    if (verifiedUser.id === userId) {
      next();
    } else {
      throw createError(401, "No autorizado");
    }
  } catch (error) {
    response.status(401);
    response.json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = { auth, verifyOwner, verifyUser };
