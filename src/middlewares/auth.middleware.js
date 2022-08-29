const jwt = require("../lib/jwt.lib")
const createError = require("http-errors")

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

const verifyOwner = (request, response, next) => {
    try {
        console.log("request", request.params)
        const authorization = request.headers.authorization || ""
        const token = authorization.replace("Bearer ", "")
        const verifiedOwner = jwt.verify(token)
        console.log("verified", verifiedOwner.id)
        if(verifiedOwner.id === request.params.id){
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