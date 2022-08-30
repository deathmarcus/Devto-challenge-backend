const express = require("express")
const cors = require("cors")

const server = express()

// Routers
const routerAuth = require("./routes/auth.route")
const routerUser = require("./routes/user.route")
const routerPost = require("./routes/post.route")
const routerLike = require("./routes/like.route")
// Middlewares
server.use(cors())
server.use(express.json())


server.use("/auth", routerAuth)
server.use("/users", routerUser)
server.use("/posts", routerPost)
server.use("/likes", routerLike)

module.exports = server