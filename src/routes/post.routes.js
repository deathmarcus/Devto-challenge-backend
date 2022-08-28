const express = require("express")
const { createPost } = require("../usecases/post.usecases")
const router = express.Router()

router.post("/", async (request, response) => {
    const { body } = request
    try{
        const postDev = await createPost(body)
        response.status(201)
        response.json({
            success: true,
            data: {
                postDev
            }
        })
    }catch (err) {
        response.status(400)
        response.json({
            success: false,
            message: err.postDev
        })
    }
})

