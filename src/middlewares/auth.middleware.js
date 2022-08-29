const jwt = require("../lib/jwt.lib")
const createError = require("http-errors")
const { getPost } = require("../usecases/post.usecase")

const auth = (request, response, next) => {
    try {
        const authorization = request.headers.authorization || ""
        const token = authorization.replace("Bearer ", "")
        const verifiedToken = jwt.verify(token)
        next()
    }catch(error) {
        response.status(401)
        response.json({
            success: false,
            error: error.message
        })
    }
}

const verifyOwner = async (request, response, next) => {
    try {
        console.log("request", request.params.id)
        const authorization = request.headers.authorization || ""
        const token = authorization.replace("Bearer ", "")
        const verifiedOwner = jwt.verify(token)
        console.log("verified", verifiedOwner.id)
        const userId = await getPost(request.params.id)
        const { postAuthorId } = userId
        console.log("postAuthorId", postAuthorId)
        if(verifiedOwner.id === postAuthorId){
            console.log("ya pasaste el if")
            next()
        }else{
            throw createError(401, "No eres el creador del post")
        }
    }catch(error) {
        response.status(401)
        response.json({
            success: false,
            error: error.message
        })
    }
}

module.exports = {auth, verifyOwner}